module.exports = {
    presets: [
        '@vue/app',
    ],
    plugins: [ //按需引入配置
        [

            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}