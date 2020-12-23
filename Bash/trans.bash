# 某些字符在Bash里面是有特殊含义的，那么在输出的时候需要使用 \ 转义
# 单引号用于保留字符的字面含义，特殊字符在单引号中会变成普通字符。
# 双引号比单引号宽松，大部分特殊字符在双引号里都会失去特殊含义，变成普通字符
# 除了 美元符号，反引号和反斜杠。这个三个字符在双引号中会被bash自动拓展

# Here 文档，是一种输入多行字符串的方法。Here文档的本质是重定向，它将字符串重定向输出
# 给某个指令，相当于包含了echo命令
<< token
text
token

$ cat << _EOF_
<html>
<head>
    <title>
    The title of your page
    </title>
</head>

<body>
    Your page content goes here.
</body>
</html>
_EOF_

# Here文档还有一种变体，叫做Here字符串，使用三个小于号表示
# 感觉更像是一种组合变体
<<< string

cat <<< 'hi there'
#等同于
echo 'hi here' | cat;
