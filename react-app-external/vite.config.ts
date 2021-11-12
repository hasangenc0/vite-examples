import { defineConfig } from 'vite';
import externalGlobals from 'rollup-plugin-external-globals';


const externals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

export default defineConfig({
  plugins: [
    externalGlobals(externals)
  ]
});
