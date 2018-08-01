## Vue的初体验
1. 引入vue.js文件
2. 创建一个Vue实例,这个实例能够监管html代码
3. 通过el属性指定vue实例的监管范围,它的值是一个id
4. 通过data属性保存数据
5. 使用插值表达式`{{}}`展示数据
---
##### 插值表达式用法
+ `{{}}`里面可以写表达式以及三元运算符

## Vue里面的指令
+ v-text和v-html都是用来渲染页面数据用的,写在标签的属性上`<div v-text = "数据的键"></div>` `<div v-html = "数据的键"></div>`,v-html中可以嵌套标签
+ **注意: 在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。只在可信内容上使用 v-html，永不用在用户提交的内容上.**
+ v-bind的基本用法, 可以动态的绑定属性. 
    + 使用方式: `v-bind:属性名='data里面的属性值'`
    + 简写方式: `:属性名='data里面的属性值'`
+ v-bind可以绑定任意的属性
+ 动态绑定样式的方法 `:class='{'样式名':布尔值}`,布尔值可以是三元表达式
  + 可以是数组 `:class='[active]'`
  + 可以是数组和对象的混合 `:class='[{'active':布尔值}]'`
+ v-for用来循环数组和对象,配合`:key=" "`来使用
    1. 循环数组两种方法:
        + 在标签的属性位置上写上 `v-for = "item in arr"`, item表示数组的值, arr表示需要遍历的数组
        + 在标签的属性位置上写上 `v-for = "(value,index) in arr"`, vale表示数组的值, index表示数组的索引,arr表示需要遍历的数组
    2. 循环对象的两种方法:
        + 在标签的属性位置上写上 `v-for = "value in obj"` , value表示对象中的值, obj表示需要遍历的对象 
        + 在标签的属性位置上写上 `v-for = "(value,key,index) in obj"` , value表示对象中的值, key表示对象的键, index表示对象的索引 obj表示需要遍历的对象 
    3. v-for能过根据data里面的数据的变化自动的更新view里面内容
    4. 数组注意点: 
         + 当使用数组的length属性去改变需要循环数组,数组改变了,但是view里面的内容不会改变
         + 当使用数组的index索引去改变需要循环数组中的值,数组的值改变了,但是view里面的内容不会改变
    5. 解决改变数组数据方法:
         + 使用`Vue.set(arr,index,newval)`来改变数组的值, arr为需要改变的数组, index为索引, newval是改变后的值
         + 使用`Array.prototype.splice()`数组的方法来改变数组数据也可以
    6.v-for结合`:key=""` 属性的好处: key会成为数组中每一项的唯一标识符, 如果未来数组中的某一项发生了改变, 我们view层的数据不会重新去加载, 只会根据唯一标识符去改变那一项, 好处是能够更好的提升性能
+ v-model指令使用来双向数据绑定的
    1. 即model层数据和view中的值进行同步的变化
    2. 使用范围: `input textarea select`表单标签内使用
+ v-on 用来监听dom事件
    1. 在标签的属性位置写上`v-on:任意事件类型='执行函数'`,以后开发中都用简写方式`@任意事件类型='执行函数'`
    2. 在`methods`属性中定义函数,在methods中想要获取data中的属性,必须加上this, this表示Vue中new出来的实例
    3. 可以通过执行函数来添加参数, 在添加事件对象的时候, 只能在执行函数中添加`$event`参数来添加,并且不能加`''`
    4. 事件修饰符,常用的有下面这些:
        ```
        <!-- 阻止单击事件继续传播 -->
            <a v-on:click.stop="doThis"></a>
            <!-- 提交事件不再重载页面 -->
            <form v-on:submit.prevent="onSubmit"></form>

            <!-- 修饰符可以串联 -->
            <a v-on:click.stop.prevent="doThat"></a>

            <!-- 只有修饰符 -->
            <form v-on:submit.prevent></form>

            <!-- 添加事件监听器时使用事件捕获模式 -->
            <!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
            <div v-on:click.capture="doThis">...</div>

            <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
            <!-- 即事件不是从内部元素触发的 -->
            <div v-on:click.self="doThat">...</div>

        ```
    5. 按键修饰符, 可以给常用的按键事件点加按键修饰符`<input @keyup.enter="submit">`, 也可以自定义 `Vue.config.keyCodes.a = 107`;
    6. v-if和v-show的使用
        1. 相同点: 它们都是用来控制元素的显示和隐藏
        2. 使用方法: `v-if=布尔值` ,`v-show = 布尔值` , 为true的时候显示,false的时候隐藏
        3. 区别: v-if是通过控制dom元素的添加和删除来控制元素的显示,隐藏,但是v-show是通过控制样式`display:none/block`来控制元素的显示,隐藏
        4. 使用场景区别: + 涉及到频繁操作dom元素的地方,使用v-show
                        + 涉及到异步数据渲染的时候使用v-if

    7. v-if 条件判断的用法: 在元素上添加`v-if="" v-else-if="",v-else`来控制元素的显示与否
    8. v-cloak的使用: 因为在页面加载到html部分的时候后面data的数据还未加载,所以会先闪烁的元素
        1. 解决办法: 给元素添加`v-cloak `属性,它的样式为`[v-cloak]{display:none}`
        2. 在vue文件编译完后,v-cloak属性会自动的被删除 
---
## Day2 知识点
['参考文章'](https://segmentfault.com/a/1190000008010666)
+ Vue里面的生命阶段 
    1. beforCreate(): 组件实例刚被创建,组件属性计算之前,如data属性等
    2. created(): 组件实例完成,属性已绑定,但是DOM还未完成, `$el`属性还不存在
    3. beforeMount(): 模板编译/挂载之前
    4. mounted(): 模板编译/挂载之后(不保证组件已在document中)
    5. beforeUpadte(): 组件更新之前
    6. updated(): 组件更新之后
    7. activated(): for `keep-alive`,组件被激活时调用
    8. deactivated() for `keep-alive`,组件被移除时调用
    9. beforeDestory(): 组件销毁前调用
    10. destroyed(): 组件销毁后调用
   
**使用场景:**
+   beforecreate : 举个例子：可以在这加个loading事件 
+   created ：在这结束loading，还做一些初始化，实现函数自执行,axios请求数据等 
+   mounted ： 操作views里面dom元素使用,
+   beforeDestroy： 你确认删除XX吗？ destroyed ：当前组件已被删除，清空相关内容
---
+ Vue里面自定义指定:
    1. 在全局通过`Vue.directive()`创建,有两个参数
        1. 参数1: 定义指令的名字, 命名随便但是尽量小写, 如果只按驼峰命名,则在元素上使用'-'分隔
        2. 参数2: 另一个是对象, 对象里面包含一个inserted钩子函数, inserted有两个参数`(el,binding)`,el表示使用自定义的元素,binding表示自定义指定信息
        3. inserted函数表示自定义指定插入到坐标中的时候执行
        4. binding.value可以获取到传入自定义指令中属性的值
+ Vue,filter过滤器:
    + 参数1: 过滤器的名字
    + 参数2: 过滤器的处理函数,函数有个默认参数,表示过滤数据在需要过滤的数据后面加上管道 `|过滤器的名称`,改处理函数也可以传入其它参数

+ Vue里面的computed:
    + 定义: 计算属性是根据data中已有的属性,计算得到一个新的属性
    + 特点: computed对象里面的函数是一个计算属性,它也是一个函数,但是可以将它成属性来说使用 
    + 好处: 提升性能, 能够从缓存中取值
  
+ Vue里面的watch:
    + 定义: 用来监听data中的值, 只要按监听的数据发生变化执行相应的函数
    + 特点: 在watch对象里面的函数很特殊, 函数的名字必须是data里面数据的名字, 这个函数包含两个参数 `newVal, oldVal`
    + 深度监听: 在监听复杂数据类型的时候,简单的方法不行,所以需要深度监听
  
    ```
    watch:{
        需要监听的数据:{
              handler(newVal){
                  //handler的函数名不能改变
        },
       deep: true

        }
       
    }
    ```