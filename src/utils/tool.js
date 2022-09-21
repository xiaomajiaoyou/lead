// module  模块系统对象
// exports  这个接口是暴露(方法/属性) 导出
module.exports = {
    // get
    get_read(url,data){
        return new Promise((resolve,reject)=>{
            axios.get(url,{params:data}).then(
                response=> {
                    resolve(response.data)
                },
                error=> {
                    reject(error);
                }
            )
        })
    },
    // post
    post_read(url,data){
        return new Promise((resolve,reject)=>{
            axios.post(url,data).then(
                response=> {
                    // 获取返回的数据
                    resolve(response.data)
                },
                error=> {
                    reject(error);
                }
            )
        })
    },
}
// 如何接收工具
// 导入工具（公共函数）
// 第一种：
// import tool from '../utils/tool.js'
// 第二种:
// let tool = require('../utils/tool.js')
