import ts from 'rollup-plugin-ts';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        name: 'react-basics',
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
      },
    ],
    plugins: [
      external(),
      postcss({ extract: true, modules: true, minimize: true }),
      svgr({ icon: true }),
      resolve(),
      commonjs(),
      ts(),
      terser(),
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
  },
];
