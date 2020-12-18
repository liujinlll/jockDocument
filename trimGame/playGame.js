var prompt = require('prompt')

prompt.start();

prompt.get(['username', 'email'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
});

const user = {
    name:'',
    sex:'',
    profession:''
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const createSex = () => {
    readline.question(`请输入性别`, sex => {
        user.sex = sex;
        console.log(`您的性别为${sex}`);
        readline.close()
    })
}

console.log('欢迎来到雷贾克斯平行时间，请创建人物');

readline.question(`请输入人物姓名`, name => {
    user.name = name;
    console.log(`你好 ${name}!`);
    readline.close();
    createSex();
})

