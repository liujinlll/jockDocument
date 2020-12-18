echo "欢迎来到雷贾克斯的平行时间"
echo "请创建人物"

read your_name

echo "你好 ${your_name}"
echo "请输入性别"

read your_sex

echo "您的性别为${your_sex}"
echo "您的属性为"
printf "%-10s %-8s %-4s\n" 姓名 性别 战斗力
printf "%-10s %-8s %-4s\n" your_name your_sex 10

