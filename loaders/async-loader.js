// 异步loader
module.exports=function(content,map,meta){
    // 异步loader
   const callback = this.async()
    setTimeout(()=>{
        console.log("async loader");
        callback(null,content,map,meta)
    },1000)
}