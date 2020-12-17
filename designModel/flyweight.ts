// 享元模式
// 运用共享技术有效地支持大量细粒度的对象
class FlyweightFactory {
    private flyweight;
    public getFlyWeight( key ){
        if( this.flyweight[key] ){
            return this.flyweight[key]
        }
        const flyweight = new FlyweightFactory();
        this.flyweight[key] = flyweight;
        return flyweight;
    }
}
