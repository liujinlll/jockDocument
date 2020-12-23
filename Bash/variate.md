## Bash变量

> Bash 变量分成环境变量和自定义变量两种。
> 环境变量是自带的变量，可以直接使用

下面是一些常见的环境变量

1. BASHPID  Bash进程的进程ID
2. pwd 当前目录
3. path 搜索目录列表

> 自定义变量是用户在当前shell里面自己定义的变量
> 必须先定义后使用，而且仅仅在当前的shell可用，一旦退出就不存在了

set 命令可以显示所有的变量，以及素有的Bash函数。

    $set

> 创建变量的时候不允许出现空格和标点

    variable=value

上面代码需要注意的是等号两边不能有空格
如果变量的值包含空格那么必须将值放在引号中

    myvar="hello world"

Bash没有数据类型的概念，所有的变量都是字符串，我倒觉得这样也好，省去很多麻烦事

    a=z
    b='a string'
    c='a string and $b' //可以引用变量
    d='\t\ta string \n' //可以使用转义字符
    e=$(ls -l foo.txt)  //可以是命令的执行结果
    f=$((5 * 7))        //可以是数学运算的结果

当然变量也可以重复赋值，后面的赋值会覆盖前面的赋值

    $foo=1
    $foo=2
    $echo $foo

>读取变量的时候，需要在变量的名字前面加上`$`

    $foo=bar
    $echo $foo

>删除变量可以使用 `unSet`

    unset NAME

这个命令其实没有什么用，因为就算删除了这个变量，还是可以读取的，只不过值为空字符

> 用户创建的变量仅可用于当前shell,子shell默认读取不到父shell定义的变量，为了把变量传递给子shell,需要使用`export`命令。这样输出的变量对于子shell来说就是环境变量。

`export` 命令用来向子shell输出变量

    Name=foo
    export Name

> 特殊变量

    echo $$ //当前shell进程id
    echo $? //判断上一个命令是否执行成功
    $0  //当前shell的名称或者脚本名

> declare 命令

`declare`命令可以生命一些特殊类型的变量，为变量设置一些限制，比如声明只读类型的变量和整数类型的变量

    declare OPTION VARIABLE=value
    declare -r // 等同与 readonly

> let 命令

`let`命令声明变量时，可以直接执行算数表达式

    let foo=1+2
    echo foo

也可以同时对多个变量赋值，赋值表达式之间使用空格分隔

