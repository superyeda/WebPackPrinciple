// raw loader接收到的content是Buffer数据
// 一般用来处理图片视频字体图标等资源
module.exports = function(content){
    console.log(content);
    return content
}

module.exports.raw=true
