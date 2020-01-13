const express = require('express');//模块访问：缓存
const {
    formatdata
} = require('../utils/formatdata');


const Router = express.Router();

const { mysql: query } = require('../db');//解构并重命名
// let { create } = require('../utils/token');

// Router.get('/getUser',async (req,res)=>{
//     console.log(req.body,req.params,req.query);
//     // let {user} = req.body;
//     // let sql = `SELECT * from user WHERE user=${user}`;
//     // let data = await query(sql);
//     // data.length?res.send(formatdata({data:data})):res.send(formatdata({ code: 0 }))
//     // res.send(formatdata({ data }));
//     res.send('sdfds');
// })
//查询用户
Router.post('/getUser', async (req, res) => {
    console.log(req.body);
    // console.log(req.body,req.params,req.query);
    let { user, pwd } = req.body;
    let sql = `SELECT * from user WHERE user=${user} AND pwd=${pwd}`;
    let data = await query(sql);
    data.length ? res.send(formatdata({ data: data })) : res.send(formatdata({ code: 0 }))
    // res.send(formatdata({ data }));
    // res.send(data);
})

//查询用户，有则登录，没则添加再登录
Router.get("/login", async (req, res) => {
    const { user } = req.query;
    let sql = `SELECT * FROM phoneuser WHERE user = ${user}`;
    let sqlRes = await query(sql);
    // console.log(user,sqlRes);
    if (!sqlRes.length) {
        let sql2 = `insert into phoneuser(user) values(${user})`;
        await query(sql2);
    }
    // token = create(user);
    res.send(formatdata({ data: user }));//把token生成后发给前端

})
//注册用户
Router.post('/reg', async (req, res) => {
    console.log(req.body);
    // console.log(req.body,req.params,req.query);
    let { user, pwd, condition } = req.body;
    if (user) {

        let sql = `SELECT * from user WHERE user=${user}`;
        let data = await query(sql);
        console.log(data)
        if (data.length) {
            res.send(formatdata({ code: 0 }));
        } else {
            //没有找到，可以注册
            if (condition) {
                let sql2 = `insert into user(user,pwd) values(${user},${pwd})`;
                let data2 = await query(sql2);
                res.send(formatdata());
                return;
            }
            res.send(formatdata());
        }
    }
})



//后台管理系统
//插入用户

Router.post('/addUser', async (req, res) => {
    let res2 = req.body.values;
    let {name,sex,age,address,phone,email,website,key,createtime}  = res2;
    let sql2 = `SELECT * from user3 WHERE name='${name}'`;
    let datas2 = await query (sql2);
    console.log(datas2);
    if(datas2.length){
        res.send(formatdata());
    }else{
        let sql = `insert into user3(name,sex,age,address,phone,email,website,createtime) values('${name}','${sex}',${age},'${address}','${phone}','${email}','${website}','${createtime}')`;
        let datas = await query(sql);
        res.send(formatdata({ code:0 }));
    }
})
// Router.post('/addUser', async (req, res) => {
//     let res2 = req.body.values;
//     let {name,sex,age,address,phone,email,website,key,createtime}  = res2;
//     let sql2 = `SELECT * from user2 WHERE name='${name}'`;
//     let datas2 = await query (sql2);
//     console.log(datas2);
//     if(datas2.length){
//         res.send(formatdata());
//     }else{
//         let sql = `insert into user2(name,sex,age,address,phone,email,website,createtime,key2) values('${name}','${sex}',${age},'${address}','${phone}','${email}','${website}','${createtime}',${key})`;
//         let datas = await query(sql);
//         res.send(formatdata({ code:0 }));
//     }
// })

//获取数据
Router.get("/getUser", async (req,res)=>{
    let sql = `SELECT * from user3 ORDER BY key2`;
    let datas = await query(sql);
    res.send(datas);
})
// Router.get("/getUser", async (req,res)=>{
//     let sql = `SELECT * from user2`;
//     let datas = await query(sql);
//     res.send(datas);
// })
// 564525512
//
//修改数据
Router.post("/editUser", async (req,res)=>{
    let res2 = req.body.values;
    let {name,sex,age,address,phone,email,website,createtime,key2}  = res2;
    // console.log(key,'key');
    let sql2 = `SELECT * from user3 WHERE key2 <>'${key2}' AND name = '${name}'`;
    let datas2 = await query (sql2);
    if(datas2.length){
        res.send(formatdata());
    }else{
        let sql2 = `UPDATE user3 SET name = '${name}',sex = '${sex}',age = ${age},address = '${address}',phone = '${phone}',email = '${email}',website = '${website}',createtime = '${createtime}' WHERE key2 = ${key2}`;
        let datas = await query(sql2);
        res.send(formatdata({ code:0 }));
    }
})
// Router.post("/editUser", async (req,res)=>{
//     let res2 = req.body.values;
//     let {name,sex,age,address,phone,email,website,createtime,key2}  = res2;
//     // console.log(key,'key');
//     let sql2 = `SELECT * from user2 WHERE key2 <>'${key2}' AND name = '${name}'`;
//     let datas2 = await query (sql2);
//     if(datas2.length){
//         res.send(formatdata());
//     }else{
//         let sql2 = `UPDATE user2 SET name = '${name}',sex = '${sex}',age = ${age},address = '${address}',phone = '${phone}',email = '${email}',website = '${website}',createtime = '${createtime}' WHERE key2 = ${key2}`;
//         let datas = await query(sql2);
//         res.send(formatdata({ code:0 }));
//     }
// })
//删除数据
Router.post("/delUser",async (req, res) => {
    let { key } = req.body;
    console.log(key);
    let sql = `DELETE FROM user3 WHERE key2=${key}`;
    let data = await query(sql);
    res.send(data);
})
// Router.post("/delUser",async (req, res) => {
//     let { key } = req.body;
//     console.log(key);
//     let sql = `DELETE FROM user2 WHERE key2=${key}`;
//     let data = await query(sql);
//     res.send(data);
// })
//删除多个
Router.post("/delMoreUser",async (req, res) => {
    let { selectedRowKeys } = req.body;
    console.log(selectedRowKeys.join(","),req.body);
    let sql = `delete from user3 where key2 in (${selectedRowKeys.join(",")})`;
    // let sql = `DELETE FROM user2 WHERE key2=${key}`;
    let data = await query(sql);
    res.send('data');
})
// Router.post("/delMoreUser",async (req, res) => {
//     let { selectedRowKeys } = req.body;
//     console.log(selectedRowKeys.join(","),req.body);
//     let sql = `delete from user2 where key2 in (${selectedRowKeys.join(",")})`;
//     // let sql = `DELETE FROM user2 WHERE key2=${key}`;
//     let data = await query(sql);
//     res.send('data');
// })
module.exports = Router;
//新建信息模板
// jackal
// 11
// 17825013321
// 1218771998@qq.com