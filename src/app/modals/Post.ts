export class Post{
    public id: number;
    public title: string;
    public imgSrc?: string;
    public price: number;
}


export class Product{
    public id: number;
    public title: string;
    public imgSrc: string;
    public price: number;
    public status: string;
    public description: string;

    constructor(id: number, title: string, imgSrc: string, price: number, status: string, description: string){
        this.id = id;
        this.title = title;
        this.imgSrc = imgSrc;
        this.price = price;
        this.status = status;
        this.description = description;
    }

}
