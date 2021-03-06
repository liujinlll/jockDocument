# 1 加减号
# 开启关闭拓展
set -o noglob
set +o noglob

# 2 波浪线拓展
# 波浪线拓展，会自动拓展成当前用户的主目录
# ~+会拓展成当前所在的目录，等同于pwd命令
echo ~
echo ~root

# 3 问号拓展
# ? 字符代表文件路径里面的任意单个字符，不包括空字符。
# 比如Data??? 匹配所有Data后面跟着三个字符的文件名,这里要注意 ?表示的是字符数
# README.MD -> ??????.MD
ls ?.txt 
ls ??????.MD

# 4 星号拓展
# * 字符表示文件路径里面的任意数量的任意字符，包括零个字符
# * 不会匹配隐藏文件
# 想要匹配多层的子目录 **/*.txt
ls *.MD
ls *me*

# 5 方括号拓展
# [] 方括号扩展的形式是[...]，只有文件确实存在的前提下才会拓展。
# 如果文件不存在，就会原样输出括号中的任意一个字符
# [-] 联系拓展 [a-c] , [0-9]
ls [README].md

# 6 大括号拓展
# {} 大括号扩展分别表示扩展成大括号里面的所有值，各个值之间使用逗号分隔
# 这里需要注意的是大括号内部的逗号前后不能有空格。否则，打括号会失效
echo {1,2,3} # 1 2 3
echo d{a,e,i,o,u}g # dag,deg,dig,dog,dug
echo a.log{,.bk} # a.log a.log.bk

# 7{a..b} 拓展
# 特别常见的是用途是新建一系列的目录, 另一个用途是用于for循环,第三个参数为步长
echo {a..c};
echo d{a..c}g;
echo {c..a}

echo {2007..2009}-{01..12}

for i in {1..4}
do 
    echo $i
done

#8 变量拓展  -> 将美元开头的词视为变量
echo ${SHELL}

#9 自命令拓展 （...） 可以拓展成为另一个命令的运行结果
echo ${date}
echo `date`

#10 算数拓展
echo $((2+2))