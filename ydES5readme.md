/*
我是用有道云记录的。
有道云地址： http://note.youdao.com/noteshare?id=47cbc8aeec293f01aed7866dadf503d4&sub=C8E0E98DE0CC462D949AB8EAD762E4C5d'd
*/
# ES5核心技巧
### 1. this的理解
一句话总结，就是谁调用就是谁。
##### 要注意的点
  在函数中的函数体重的this是函数本身， 在new fn()的时候就会执行。

```
function fn(){
    this.abc = 23 ;
}
fn.prototype.abc = 456 ;
var c = new fn()  ;
console.log(c.abc)//---->23 ;
```
#### 在es6中的箭头函数中的this,因为之前自己弄错了，所以这个标题自己给加粗。一句话理解，就是====将当前这个箭头函数添加bind绑定this====,


```
var obj = {
    ooo:{
       fn:function(){
           console.log(this) ;
       },
       fn2(){//这个不是箭头函数只是一种函数的简写
           console.log(this) ;
       },
       fn3:()=>{
           console.log(this) ;
       },
       fn4:(function(){
           console.log(this) ;
       }).bind(5)
}
}

obj.ooo.fn();//{ooo....}
obj.ooo.fn2();//{ooo....}
obj.ooo.fn3();//window
obj.ooo.fn4();//window
```

### 2. 值传递和按引用传递
### 在函数调用的时候，参数都是按值传递，指向了同一个地址而已。如果你重写该参数不会对原有的发生改变

```
function set(obj,obj2){
    obj = 23 ;
    obj2.bbb=222 ;
}
var  obj = {aaa:23}
var obj2 = {bbb:45}
set(obj);
console.log(obj,obj2) ;//-->{aaa:22},{bbb:45}

```
## 3.思路很重要
### 在实现一个业务逻辑的时候一定要多思考，看看能不能简化代码
## 4.作用域
#### 变量的提升
```
console.log(a) ; //--->function a(){}
// 因为函数的作用域会提升。
var a  ;
function a (){}

console.log(a) ; //--->function a(){}
// 因为函数的作用域会提升。如果var a 没有赋值，就会忽略掉
function a (){}
var a  ;

// Begin 以上代码看到的应该是这样的
var a ;
function a(){}
console.log(a);
```
#### 在js中我们都知道函数是有作用域的,常见的if条件却没有作用域，如何解决呢？
1. try{} catch(){}
2. with也可以，但是会延长作用域链，不推荐

```
if(true){
    try{
        var aaa = 999 ;
         throw 23 ;
    }catch(a){

        console.log(a);//23
    }

}

console.log(aaa) ;//999
console.log(a) ;//报错
```

## 4.闭包
#### 何为闭包，拿到你不该拿到的东西。==注意一点就是内存泄露解决可以把引用重置为null,如果闭包返回的东西没有引用时不会造成内存泄露的，因为如果没有引用执行完就已经被回收了==

```
function test(){

    var a = 1 ;
    //return function(){//这种情况下， a会消失，因为返回的方法没有调用，

    //}
    return function(){
        eval('') ;//这种情况下，a不会消失，因为eval不确定要不要调用，window。eval()除外
        try{}catch{}//a不会消失
        with(aa){}//a不会消失
    }
}
test() ;//因为这里没有调用，所有就不会造成内存泄露

```

