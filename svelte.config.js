import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

const config = {
  preprocess: [
    vitePreprocess(),
    sveltePreprocess({
      scss: {
        prependData: '@use "src/style/variables.scss";'
      },
    }),
  ],
}

export default config;