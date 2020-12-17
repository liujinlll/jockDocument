//外观
//定义一个高层接口使得子系统的使用更加的容易
class A {
    private b;
    constructor(b){
        this.b = b ;
    }
    public run (){
        return this.b;
    }
}

class B {
    private c;
    constructor(c){
        this.c = c;
    }
}

class C {
    
}

class Compile {
    public run (){
        const paster = new A( new B( new C))
        paster.run();
    }
}

// 可以直接使用Compile类，而不需要了解 ABC 之间的关系
const complie = new Compile();
complie.run();