/**
 * 将对象组合成树形结构表示,使得用户对单个对象和组合对象的使用具有一致性
 * 这里要重点突出‘🌲’，
 * 简单的说就是将树状结构中所有节点统一抽象
 * 
 * 缺点：
 * 组合模式增加的抽象实际上增加了复杂系统中业务的复杂度
 * 如果Compnsite 与 leaf 差异过大，那么统一抽象带来的心智负担还是很高的
 * 
 * 总之，组合模式是针对树状结构这种特定的场景的统一的抽象方案，对降低系统负责度很有意义
 * 但是同时也不要忘了过度抽象是有害的。
 */

// 统一抽象
class Component1 {
    public add (value){};
    public getName (){};
    public getChildren (){};
}

// 非叶子节点
class Composite extends Component1 {
    private children = [];
    private name ;

    public add (component){
        this.children.push(component);
    }
    public getName (){
        return this.name;
    }
    public getChildren() {
        return this.children;
    }
}

//叶子节点
class Leaf extends Component1 {
    private name;
    public add (){
        throw Error('叶子节点无法添加元素')
    }
    public getName (){
        return this.name;
    }
    public getChildren (){
        return null;
    }
}