export class Post {
    public id: number;
    public title: string;
    public imgSrc?: string;
    public price: number;
}

export class Product {
    public id: number;
    public title: string;
    public imgSrc: string;
    public price: number;
    public status: string;
    public description: string;
    public quantity?: number;

    constructor(id: number, title: string, imgSrc: string, price: number, status: string, description: string, quantity?: number) {
        this.id = id;
        this.title = title;
        this.imgSrc = imgSrc;
        this.price = price;
        this.status = status;
        this.description = description;
        this.quantity = quantity;
    }

}
