const esbuild = require("esbuild");

const package_name = "TeseractUHC";
const version = "2.0.0";

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
console.log(`Started bundling ${package_name}@${version}!`);

esbuild
    .build({
        entryPoints: ["src/main.ts"],
        outfile: "scripts/main.js",
        bundle: true,
        target: ["es2020"],
        format: "esm",
        external,
        // minify: true,
        minify: false,
        // minifySyntax: true,
    })
    .then(() => {
        console.log(`\nBundling finished in ${Date.now() - initialMS} milliseconds!`);
    })
    .catch((error) => {
        console.error(error);
    });
