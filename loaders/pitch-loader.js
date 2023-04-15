// pitch loader
// 优先于normal loader执行，return可以提前熔断
module.exports=function(content){
    console.log("normal loader");
    return content
}

module.exports.pitch=function(){
    console.log("pitch");
}