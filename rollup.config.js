import path from 'path';
import crypto from 'crypto';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import svgr from '@svgr/rollup';

const md5 = str => crypto.createHash('md5').update(str).digest('hex');

const customResolver = resolve({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});

const jsBundle = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: 'dist/*', runOnce: true }),
    postcss({
      extract: 'styles.css',
      sourceMap: true,
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
    alias({
      entries: [
        { find: /^components/, replacement: path.resolve('./src/components') },
        { find: /^hooks/, replacement: path.resolve('./src/hooks') },
      ],
      customResolver,
    }),
    resolve(),
    commonjs(),
    esbuild(),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
};

const dtsBundle = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  plugins: [
    alias({
      entries: [
        { find: /^components/, replacement: path.resolve('./src/components') },
        { find: /^hooks/, replacement: path.resolve('./src/hooks') },
      ],
      customResolver,
    }),
    resolve(),
    commonjs(),
    dts(),
  ],
  external: [/\.css/, 'react', 'react-dom', 'react/jsx-runtime'],
};

export default [jsBundle, dtsBundle];
