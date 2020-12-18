/**
 * 生成器
 * 
 * 将一个复杂对象的结构与它的表示分离，使得同样的构建过程可以创建不同的表示。
 * 需要体现出‘结构’与‘表示’分离
 * 
 * 缺点：
 * 一个对象只有一种表示时，没必要做如此地步的抽象
 * 
 * 总之builder模式对于创建一个复杂对象特比有用
 */


//以造房子为例子，Director与Builder可以做任意的修改以适应不同的场景

class Director {
    public create( concreateBuilder ){
        //创建零件
        concreateBuilder.buildA();
        concreateBuilder.buildB();
        //校验参数已经生成实力
        return concreateBuilder.build();
    }
}

class HouseBuilder {
    public buildA (){
        //创建房屋
        //this.xxx = xxx
    }
    public buildB (){
        //刷油漆
    }
    public build (){
        //最终创建实例
        return  
    }
}

// 接下来是正式的使用
const director = new Director();
const builder = new HouseBuilder();
const house = director.create(builder)