import path from 'path';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import tsconfigPaths from 'rollup-plugin-tsconfig-paths';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import alias from '@rollup/plugin-alias';

const name = require('./package.json').main.replace(/\.js$/, '');

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  //external: [/\.css/, 'react', 'react-dom', 'react/jsx-runtime'],
  external: id => {
    console.log({ id });
    return /node_modules|\.css|\.svg/.test(id);
  },
});

export default [
  bundle({
    plugins: [
      typescriptPaths({
        preserveExtensions: true,
        transform(path) {
          console.log({ path });
          return path;
        },
      }),
      commonjs(),
      resolve(),
      esbuild(),
    ],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
];
