import path from 'path';
import crypto from 'crypto';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import svgr from '@svgr/rollup';

const md5 = str => crypto.createHash('md5').update(str).digest('hex');

const jsBundle = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/esm/index.js',
      format: 'esm',
    },
  ],
  plugins: [
    del({ targets: 'dist/*', runOnce: true }),
    postcss({
      extract: 'styles.css',
      minimize: true,
      modules: {
        generateScopedName: function (name, filename, css) {
          const file = path.basename(filename, '.css').replace('.module', '');
          const hash = Buffer.from(md5(`${name}:${filename}:${css}`))
            .toString('base64')
            .substring(0, 5);

          return `${file}-${name}--${hash}`;
        },
      },
    }),
    svgr({ icon: true }),
    typescriptPaths({ preserveExtensions: true }),
    resolve({ extensions: ['.tsx', '.ts', '.jsx', '.js'] }),
    commonjs(),
    esbuild(),
    del({ targets: ['dist/esm/styles.css'], hook: 'closeBundle' }),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react-spring'],
};

const dtsBundle = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  plugins: [
    resolve(),
    commonjs(),
    typescriptPaths({
      preserveExtensions: true,
    }),
    dts(),
  ],
  external: [
    /\.css/,
    'react',
    'react-dom',
    'react/jsx-runtime',
    'react-spring',
    'react-hook-form',
    'date-fns',
  ],
};

export default [jsBundle, dtsBundle];
