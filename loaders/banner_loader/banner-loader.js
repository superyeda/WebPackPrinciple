const schema=require('../banner_loader/schema.json')

module.exports=function(content){
    const options = this.getOptions(schema)
    console.log(options);
    const prefix=`
    /*
     *  Author:${options.author}
    */
    `
    return prefix+content
}