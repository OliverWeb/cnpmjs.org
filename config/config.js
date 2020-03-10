module.exports = {
    debug: false,
    database: {
        db: 'cnpmjs',     // 数据库名，默认为cnpmjs_test
        host: '127.0.0.1',    // 服务器地址
        port: 3306,           // 端口
        username: 'root',     // 用户名
        password: '123456',   // 密码
        dialect: 'mysql'    // 使用mysql，默认为sqlite, 还支持postgres,mariadb,暂时不支持oracle
    },
    admins: {
        admin: 'admin@cnpmjs.org' // 管理员权限
    },
    scopes: ['@vt'], // 私有包必须依附于 scope 下
    registryHost: '0.0.0.0',   //替换服务器ip
    bindingHost: '0.0.0.0'
};
