module.exports = function(content){
    // const script=`
    // const styleEl = document.createElement('style')
    // styleEl.innerHTML = ${JSON.stringify(content)}
    // document.head.appendChild(styleEl)
    // `
    // return script
}

module.exports.pitch=function(remainingRequest){
    // 1. 绝对路径改相对路径
    const relativePath = remainingRequest.split('!').
        map(absolutePath=>{
            return this.utils.contextify(this.context,absolutePath)
        }).join("!")
    // 2. 引入css-loader处理后的资源
    // 3. 创建style，将内容插入页面中生效
        const script=`
        import style from "!!${relativePath}"
        const styleEl = document.createElement('style')
        styleEl.innerHTML = style
        document.head.appendChild(styleEl)
        `
        return script
}