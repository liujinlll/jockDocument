> 字符串的长度

    ${#varname}
    echo ${#pwd}

> 子字符串

    ${varname:offset:length}
    $count=frogfootman
    $echo ${count:4:4}

这里需要使用变量名，如果不使用变量名的话就会报错
第三个参数可以选，如果offset为负值，则表示从字符串的末尾开始计算。

