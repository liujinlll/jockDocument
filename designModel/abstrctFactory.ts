/**
 * 抽象工厂
 * 提供一个接口以创建一系列相关或者互相依赖的对象，而无需指定他们具体的类
 * 
 * 弊端：
 * 当有新元素增加时，实现会非常复杂，不仅要为所有的ConcreateFactory增加每一个元素
 * 还要修改抽象工厂，违背开闭原则
 * 
 * 因此，对于已有元素的固定系统，可以使用抽象工厂，反之不然
 */

 class AbstractFactory{
     public createProduce(concreateFactory){
        const productA = concreateFactory.createProductA();
        const productB = concreateFactory.createProductB();
           // 建立 A 与 B的固定的关联关系，即便A与B的实现换成任意都不影响
        productA.bind(productB);
    }
 }
 

