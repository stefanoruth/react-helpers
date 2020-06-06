import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import bundleSize from 'rollup-plugin-bundle-size'
import pkg from './package.json'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'es',
        },
    ],
    external: ['react', 'react-dom', 'focus-trap'],
    plugins: [
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true,
        }),
        bundleSize(),
    ],
}
