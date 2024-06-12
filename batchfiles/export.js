const fs = require("node:fs");
const path = require("path");
const esbuild = require("esbuild");
const glob = require("glob");
const archiver = require("archiver");

const exportFolder = "./exports/";
const package_name = "TeseractUHC";
const version = "1.0.0";

const bundled = false;

const external = [
    "@minecraft/server",
    "@minecraft/server-ui",
    "@minecraft/server-admin",
    "@minecraft/server-gametest",
    "@minecraft/server-net",
    "@minecraft/server-common",
    "@minecraft/server-editor",
    "@minecraft/debug-utilities",
];

const initialMS = Date.now();
console.log(`Started building ${package_name}@${version}!`);

const files = glob.sync("../src/**/*.{ts,js}");
const build_data = bundled
    ? {
          entryPoints: ["../src/main.ts"],
          outfile: "scripts/main.js",
          tsconfig: "tsconfig.json",
          platform: "node",
          target: ["es2020"],
          format: "esm",
          logLevel: "info",
          bundle: true,
          sourcemap: false,
          external,
          minify: true,
          //   minify: false,
          // minifySyntax: true,
      }
    : {
          entryPoints: files,
          outdir: "scripts/",
          tsconfig: "tsconfig.json",
          platform: "node",
          target: ["es2020"],
          format: "esm",
          logLevel: "info",
          sourcemap: false,
          minify: false,
      };

esbuild
    .build(build_data)
    .then(() => {
        console.log(`Bundling finished in ${Date.now() - initialMS} milliseconds!`);

        const addonDirs = [
            "blocks",
            "items",
            "loot_tables",
            "recipes",
            "scripts",
            "structures",
            "features",
            "feature_rules",
            "entities",
        ];

        // Find all files within the addon directories
        const addonFiles = addonDirs.flatMap((dir) => glob.sync(`${dir}/**/*.*`));

        // Ensure the export folder exists
        if (!fs.existsSync(exportFolder)) {
            fs.mkdirSync(exportFolder);
        }

        // Create the specific export directory
        const timestamp = Date.now().toString(36);
        const exportSubFolder = path.join(exportFolder, `${package_name}@${version}_${timestamp}`);
        const exportSourceFolder = path.join(exportSubFolder, "source");
        if (!fs.existsSync(exportSourceFolder)) {
            fs.mkdirSync(exportSourceFolder, { recursive: true });
        }

        addonFiles.forEach((file) => {
            const dest = path.join(exportSourceFolder, path.relative(".", file));
            const destDir = path.dirname(dest);
            if (!fs.existsSync(destDir)) {
                fs.mkdirSync(destDir, { recursive: true });
            }

            try {
                fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);

                fs.copyFileSync(file, dest);

                if (fs.existsSync(dest)) {
                    console.log(`Copied: ${file} -> ${dest}`);
                } else {
                    throw new Error(`File not copied: ${file}`);
                }
            } catch (error) {
                console.error(`Failed to copy file ${file} to ${dest}:`, error);
            }
        });

        const additionalFiles = ["manifest.json", "pack_icon.png"];

        additionalFiles.forEach((file) => {
            const dest = path.join(exportSourceFolder, path.relative(".", file));
            const destDir = path.dirname(dest);

            fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);

            fs.copyFileSync(file, dest);
        });

        console.log(`Files copied successfully to ${exportSourceFolder}`);

        const archiveName = path.join(exportSubFolder, `${package_name}@${version}.mcaddon`);
        const output = fs.createWriteStream(archiveName);
        const archive = archiver("zip", {
            zlib: { level: 9 },
        });

        output.on("close", () => {
            console.log(`${archive.pointer()} total bytes`);
            console.log(`Archive has been finalized and the output file descriptor has closed.`);
        });

        archive.on("error", (err) => {
            throw err;
        });

        archive.pipe(output);

        archive.directory(exportSourceFolder, false);

        archive.finalize();

        console.log(`Export finished successfully to ${archiveName}`);
    })
    .catch((error) => {
        console.error(error);
    });
