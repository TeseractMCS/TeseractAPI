const esbuild = require("esbuild");
const glob = require("glob");

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
console.log(`Started building ${package_name}@${version}!`);

const files = glob.sync(["src/**/*.ts", "src/**/*.js"]); 
esbuild
    .build({
        entryPoints: files,
        outdir: "scripts/",
        splitting: false,
        keepNames: true,
        tsconfig: 'tsconfig.json', // Asegúrate de que esbuild use tu tsconfig.json
        platform: 'node', // O 'browser' dependiendo de tu objetivo
        target: ['es2020'],
        format: 'esm', // Asegúrate de que el formato de salida sea ES Modules
        logLevel: 'info',
        sourcemap: false, // Opcional: agrega un mapa de fuentes para depuración
        minify: false,
        
    })
    .then(() => {
        console.log(`Bundling finished in ${Date.now() - initialMS} milliseconds!`);
    })
    .catch((error) => {
        console.error(error);
    });
