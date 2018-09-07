descripe('测试断言库jasmine api',function(){

    // 注意最好这里不要使用  ES6 的函数
    // 要在karma.conf.js 中的files将 index.js 和index.spect.js关联起来

    it('测试加1函数',function(){

        // expect   我们期望  window.text(2) 的结果是  3 ；
        expec(window.test(2).toB(3));

    });
});