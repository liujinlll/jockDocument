/**
 * 外观
 * 定义一个高层接口使得子系统的使用更加的容易
 * 
 * 缺点：
 * 并不适合所有的场景，当子系统足够简单时，使用外观模式未免画蛇添足
 * 当系统功能难以抽象时，faced模式可能无所适从，高层次接口的适用范围狭窄，此时的使用意义就比较小
 */
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