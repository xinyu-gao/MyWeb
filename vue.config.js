const port = process.env.VUE_APP_PORT
const serveIP = process.env.VUE_APP_SERVE

module.exports = {
    devServer: {
        port: port,
        open: true,
        proxy: {
            '/api': {
                target: serveIP,
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
    configureWebpack: () =>{
        // 生产环境打包分析体积
        if (process.env.NODE_ENV === 'production' && process.env.npm_config_report) {
            return {
                plugins: [
                    new BundleAnalyzerPlugin()
                ]
            }
        }
    }
}