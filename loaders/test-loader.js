/**
 * 同步loader
 * 不能进行异步操作
 * @param {String} content 文件内容
 * @param {*} map SourceMap相关
 * @param {*} meta 别的loader传递的数据
 * @returns 
 */
// module.exports=function(content,map,meta){
//     console.log(content);
//     return content
// }

module.exports=function(content,map,meta){
    // 本loader处理完了，传递给下一个loader
    this.callback(null,content,map,meta)
}