import path from 'path';
import ts from 'rollup-plugin-ts';
import crypto from 'crypto';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import svgr from '@svgr/rollup';

const md5 = str => crypto.createHash('md5').update(str).digest('hex');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
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
      resolve(),
      commonjs(),
      ts(),
      terser(),
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime', 'react-spring'],
  },
];
