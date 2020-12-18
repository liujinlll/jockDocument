/**
 * 定义一个用于创建对象的接口，让子类去决定实力化哪一个类
 * facrory使一个类的实例化延迟到其子类
 * 
 * 这其实是抽象工厂的第一步，所以抽象工厂使用了工厂方法
 * 弊端：
 * 每创建一个集体的子类，就要写一个对应的ConcerterCreate这相对比较笨重
 * 但是如果将多个对象都放到一个ConcreateCreate中，就变成了简单工厂模式
 */

 // 产品接口
 interface Product {
     save:() => void;
 }
 // 工厂接口
 interface Creator {
     createProduct: () => Product;
 }
 //具体产品
 class ConcreteProduct implements Product {
    public save = () => {};
 }
 
 //具体工厂
 class ConcreteCreator implements Creator {
     createProduct = () => {
         return new ConcreteProduct();
     };
 }

 //可以随意传入工厂
 function main ( anyCreator: Creator){
     const product = anyCreator.createProduct();
     return product;
 }

 const a = new ConcreteProduct();
 const a1 = new ConcreteCreator().createProduct;



 /**
  * 彼之毒药吾之蜜糖，没有一种设计模式可以解决所有问题，没有一种设计模式没有弊端
  * 而这个弊端不代表这个设计模式不好，一个弊端的出现可能是为了解决另一个痛点。
  * 
  */



