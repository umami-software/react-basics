import path from 'path';
import ts from 'rollup-plugin-ts';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import md5 from 'md5';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        name: 'react-basics',
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
      },
    ],
    plugins: [
      postcss({
        extract: 'styles.css',
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
      commonjs({ sourceMap: false }),
      ts(),
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime', 'react-spring'],
  },
];
