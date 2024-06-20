const swc = require("@swc/core");
const glob = require("glob");
const fs = require("fs");
const path = require("path");

const package_name = "TeseractUHC";
const version = "2.0.0";

const initialMS = Date.now();
console.log(`Started building ${package_name}@${version}!`);

const files = glob.sync("src/**/*.{ts,js}"); 

Promise.all(
    files.map((file) =>
        swc
            .transformFile(file, {
                jsc: {
                    parser: {
                        syntax: "typescript",
                        decorators: true,
                    },
                    transform: {
                        legacyDecorator: true,
                        decoratorMetadata: true,
                    },
                    target: "es2020",
                },
                module: {
                    type: "es6",
                },
            })
            .then((output) => {
                const outPath = path.join("scripts", path.relative("src", file));
                const outDir = path.dirname(outPath);
                fs.mkdirSync(outDir, { recursive: true });
                fs.writeFileSync(outPath.replace(/\.ts$/, ".js"), output.code);
                if (output.map) {
                    fs.writeFileSync(outPath.replace(/\.ts$/, ".js.map"), output.map);
                }
            })
    )
)
    .then(() => {
        console.log(`Bundling finished in ${Date.now() - initialMS} milliseconds!`);
    })
    .catch((error) => {
        console.error(error);
    });
