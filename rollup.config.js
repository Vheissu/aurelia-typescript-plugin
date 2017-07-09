import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

const cssExportMap = {};

export default {
    entry: 'dist/index.js',
    dest: 'dist/index.bundle.js',
    format: 'umd',
    moduleName: 'plugin',
    external: ['aurelia-pal', 'aurelia-framework'],
    plugins: [
        postcss({
            plugins: [
                postcssModules({
                    getJSON(id, exportTokens) {
                        cssExportMap[id] = exportTokens;
                    }
                })
            ],
            getExport(id) {
                return cssExportMap[id];
            }
        })
    ],
    onwarn: (warning) => {
        const skip_codes = [
            'THIS_IS_UNDEFINED',
            'MISSING_GLOBAL_NAME'
        ];
        if (skip_codes.indexOf(warning.code) != -1) return;
        console.error(warning);
    }
};
