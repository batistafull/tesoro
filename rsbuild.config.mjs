import { defineConfig } from '@rsbuild/core';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
    html: {
        title: 'Tesoro Game',
    },
    plugins: [pluginSass()],
    dev: {
        progressBar: true,
    },
});
