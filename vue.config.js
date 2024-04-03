const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: process.env.VUE_APP_ENV_SERVER,
                // changeOrigin: true
            }
        }
    }
})
