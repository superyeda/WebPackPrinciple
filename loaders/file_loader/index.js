const {interpolateName} = require("loader-utils")
// 

module.exports=function(content){
    // 1. 根据文件内容生成带hash值文件名
    let fileName = interpolateName(this,"[hash].[ext][query]",{content});
    fileName=`images/${fileName}`
    // 2. 将文件输出出去
    this.emitFile(fileName,content);
    // 3. 返回module.exports="文件路径"
    return `module.exports = "${fileName}"`
}
// 处理图片，字体等文件，他们都是buffer数据
// 需要raw loader处理
module.exports.raw = true