/**
 * 装饰器模式
 * 动态的给一个对象添加一额外的职责要比生成子类更为灵活
 * 
 * 缺点：
 * 组合过程复杂对象无限增多
 * 层层包裹对追溯bug会有很大的困难
 */

class Component {
    //点击事件
    public onClick = () => {};
}

class Decorator extends Component {
    private _component;

    constructor ( component ){
        super()
        this._component = component;
    }

    public onClick = () => {
        // 在这里就可以做一些其他的事情, 可以理解为一种拓展
        this._component.onClick;
    }
}
// 一个普通的Click
const component = new Component();
component.onClick();
// 带有附带拓展功能的Click
const wrapperComponent = new Decorator(component);
wrapperComponent.onClick();