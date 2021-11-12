import { defineConfig } from 'vite';
import externalGlobals from 'rollup-plugin-external-globals';
import { join } from 'path';

const externals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: './index.tsx',
      output: {
        dir: join(process.cwd(), './dist'),
        entryFileNames: 'app.js',
      }
    },
    sourcemap: true,
  },
  plugins: [
    externalGlobals(externals)
  ]
});
