import gzip from 'rollup-plugin-gzip'
import minifyHTML from 'rollup-plugin-minify-html-literals';
import resolve from '@rollup/plugin-node-resolve';
import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'build/hello-lit.js',
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify HTML template literals
    minifyHTML(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
      compress: true,
    }),
    // Gzip JS
    gzip(),
    // Print bundle summary
    summary(),
  ],
  output: {
    dir: 'dist',
  },
  preserveEntrySignatures: 'strict',
};
