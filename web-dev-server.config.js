import { legacyPlugin } from '@web/dev-server-legacy';

export default {
  nodeResolve: true,
  preserveSymlinks: true,
  watch: true,
  plugins: [
    legacyPlugin({
      polyfills: {
        // Manually imported in index.html file
        webcomponents: false,
      },
    }),
  ],
};
