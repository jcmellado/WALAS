import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  moduleName: 'walas',
  format: 'umd',
  entry: 'src/index.js',
  dest: 'dist/walas.js',
  sourceMap: true,
  sourceMapFile: 'dist/walas.js.map',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
};
