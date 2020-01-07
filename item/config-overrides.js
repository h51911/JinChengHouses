const path = require('path');
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    
    // 添加别名：
    // config.resolve.alias['@'] = path.join(__dirname,'./src/')
    // config.resolve.alias['~'] = path.join(__dirname,'./src/components')
    // config.resolve.alias['@store'] = path.join(__dirname,'./src/store')

    Object.assign(config.resolve.alias,{
        '@':path.resolve(__dirname,'./src'),
        '~':path.resolve(__dirname,'./src/components'),
        '@store':path.resolve(__dirname,'./src/store'),
        '@public':path.resolve(__dirname,'./public'),
    })

    console.log('config',config)
    console.log('env',env)
    console.log("sdfsdf")

    return config;
}