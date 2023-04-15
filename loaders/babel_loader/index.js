// babel loader es6转es5
const {
    transform
} = require('@babel/core')
const schema = require("./schema.json")
module.exports = function (content) {
    // babel处理是异步的
    const callback = this.async()
    const options = this.getOptions(schema)

    transform(content, options, function (err, result) {
        if(err) callback(err)
        else callback(null,result.code)
    })
}