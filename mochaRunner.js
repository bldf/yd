// mocha 专门用来路由数据使用的
const Mocha = require("mocha");
console.log('......');
const mocha = new Mocha({
    reporter:'mochawesome',
    reporterOptions:{
        reportDir:'./docs/mochawesome-reporter'//想把这个报表放到那里去
    }

});
mocha.addFile('./service/router.spec.js');
mocha.run(function(){
    console.log('done');
    //××××××× 注意这里这个必须要退出， 一定要记住。×××××××
    process.exit();
});