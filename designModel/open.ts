/**
 * 开闭原则：
 * 一个软件实体如，类，模块和函数应该对拓展开放对修改关闭
 * 
 */

 //egg:
 interface IBook {
    getName: () => string;
    getPrice: () => number;
    getAuthor: () => string;
 }


 // 小说

 class NovelBook implements IBook {  
     private name: string;
     public price: number;
     private author: string;
     constructor(name,price,author){
        this.name = name;
        this.price = price;
        this.author = author;
     }
     
     public NovelBook(name: string, price: number,author: string){
         this.name = name;
         this.price = price;
         this.author = author;
     }

     public getAuthor(): string{
         return this.author;
     }

     public getName(): string{
         return this.name;
     }

     public getPrice(): number{
         return this.price;
     }

 }

 //Client 类
class Client {
    public main ( args: string[]){
        let novel: IBook = new NovelBook("笑傲江湖",100,"金庸");
        console.log(novel.getName() ,novel.getAuthor() , novel.getPrice());
    }
}

//拓展类
class OffNovelBook extends NovelBook{
    constructor(name,price,author){
        super(name,price,author)
    }
    public  getPrice(){
        if(this.price > 40){
           return this.price * 0.8;
        }else{
           return this.price * 0.9;
        }     
      } 
}