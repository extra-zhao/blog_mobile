/**
 * Created by extra_zhao on 2020/1/7.
 */
var fs = require("fs");
var path = require("path");
var args = process.argv.splice(2);
var folderPath = path.resolve('./../',__dirname,'./../src/pages/');

//在目录中添加自己的组件目录
args.forEach(function (value,index) {
    if(fs.existsSync()){
        console.log( value + "已存在");
    }else{
        fs.mkdirSync(folderPath + '/' + value,function (err) {
            if(err) throw err;
        })
    }
})

args.forEach(function (value,index) {
    fs.writeFileSync(folderPath+ '/' + value +'/'+ value +'.vue',getVueTemp());
    fs.writeFileSync(folderPath+ '/' + value +"/index.js",getIndexTemp(value));
})

console.log("创建成功");



// 添加路由
function getIndexTemp(name){
    return `import ${name} from "./${name}.vue";\n\nexport default ${name}`
}


function getVueTemp() {
    var data = fs.readFileSync(path.resolve('./../',__dirname,'./../') + '/vueTemp');
    return data.toString();
}
