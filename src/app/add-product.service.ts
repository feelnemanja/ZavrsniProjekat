import { Injectable } from '@angular/core';
import { Product } from './modals/Post';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  
  statuses = [
    { name: 'sympathy', imgSrc: 'category1.png', status: "sympathy" },
    { name: 'anniversary', imgSrc: 'category2.png', status: "anniversary"  },
    { name: 'congratulations', imgSrc: 'category3.png', status: "congratulations" },
    { name: 'getwell', imgSrc: 'category4.png', status: "getwell" }
    
  ];

  products: Product[] = [
    new Product(0, "Beautiful Spring Basket", "product1.PNG", 105, "sympathy", "Let them know how much you care with a gorgeous bouquet that features carnations, stock, roses, lilies and Fuji mums. Each bloom is a thoughtful reminder of your support and love, while sitting in a beautifully crafted basket."),
    new Product(1, "The Spathiphyllum Plant", "product2.PNG", 89, "sympathy", "Everyone could use a little peace in their life! Commonly known as the peace lily, our spathiphyllum plant is a favorite among just about everyone and perfect for every occasion. This beautiful plant is long-lasting and has an amazing effect on any room with its lush leaves and white flowers."),
    new Product(2, "Comfort Planter", "product3.PNG", 66, "sympathy", "The Comfort Planter offers unspoken words of hope and peace during this time of loss and sadness. Our stylish and sophisticated white ceramic planter holds an elegant 6\" peace lily plant, which exhibits brilliant white tear-shaped blooms amongst dark green foliage for a simply beautiful effect."),
    new Product(3, "Eternal Friendship Bouquet", "product4.PNG", 100, "sympathy", "An exuberance of bright and beautiful white blossoms provides an exquisite way to deliver your expressions of sympathy and comfort. This life affirming tribute combines white roses, snapdragons and Asiatic lilies accented by lush greens arranged in a clear glass 8\" vase. An excellent choice for a wake, funeral service or for sending your condolences to the home of grieving family or friends."),
    new Product(4, "Long Stem Pink Rose Bouquet", "product5.PNG", 200, "sympathy", "Enjoy the classic beauty of the rose with a playful twist in our Long Stem Pink Rose Bouquet. This arrangement features all pink roses that will look especially pretty in the hands of those you cherish most."),
    new Product(5, "Clear Skies Bouquet", "product6.PNG", 135, "sympathy", "Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood."),
    new Product(6, "Beyond Blue Bouquet", "product7.PNG", 92, "sympathy", "There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason."),
    new Product(7, "Alluring Elegance Bouquet", "product8.PNG", 115, "sympathy", "An illuminating array of florals brings an air of elegance to any room it's placed. This arrangement features refined florals like lilies, Queen Anne's Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions."),
    new Product(8, "Beach House Bouquet", "product9.PNG", 125, "sympathy", "Take yourself on a seaside getaway with our Beach House Bouquet. The calming blue hydrangea is the perfect pair for the peach carnations and roses. Enjoy the fun lavender button pompons as a colorful contrast to the classic blooms."),
    new Product(9, "Pastel Peace Basket", "product10.PNG", 105, "sympathy", "The Pastel Peace Basket is a sweet and simple way to offer your condolences. Lavender roses, fuchsia gerbera daisies, lavender daisies, purple larkspur, purple matsumoto asters, pink mini carnations and lush greens are arranged to perfection in a round whitewash handled basket to create a gift that expresses your wishes for sympathy and peace."),
    new Product(10, "Picnic Tulips", "product11.PNG", 70, "sympathy", "Celebrate mom with the classic beauty of our Picnic Tulips. These captivating colors shine brightest in spring around fun birthdays, anniversaries and as a Mother's Day surprise."),
    new Product(11, "Sunshine & Joy Garden", "product12.PNG", 65, "sympathy", "The color yellow expresses happiness, imagination and fun, as does this garden! The perfect present for anyone on any occasion, this plant is filled to the brim with smiles. This garden is overflowing with a collection of two yellow Kalanchoes, a golden Pothos and a Croton plant. The flowers may arrive in buds, only to bloom in a short time."),
    new Product(12, "Fiesta Bouquet", "product13.PNG", 95, "getwell", "The Fiesta Bouquet is composed of a lively mix, fit to celebrate any and every moment. With a combination of vibrant flowers, this florist-designed arrangement brings a pop of color and a burst of excitement as soon as it arrives."),
    new Product(13, "Alluring Elegance Bouquet", "product14.PNG", 105, "getwell", "An illuminating array of florals brings an air of elegance to any room it's placed. This arrangement features refined florals like lilies, Queen Anne's Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions."),
    new Product(14, "Beyond Blue Bouquet", "product15.PNG", 92, "getwell", "There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason."),
    new Product(15, "Clear Skies Bouquet", "product16.PNG", 135, "getwell", "Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood."),
    new Product(16, "Light of My Life Bouquet", "product17.PNG", 80, "getwell", "The Light of My Life Bouquet blossoms with brilliant color and a sweet sophistication to create the perfect impression! Pink Lilies make the eyes dance across the unique design of this flower bouquet, surrounded by the blushing colors of orange roses, lavender cushion poms, hot pink carnations, and lush greens. Presented in a clear glass vase, this fresh flower arrangement has been created just for you to help you send your sweetest thank you, happy anniversary, or thinking of you wishes."),
    new Product(17, "Truly Stunning Bouquet", "product18.PNG", 108, "anniversary", "This dreamy jewel toned bouquet combines bold color and eye catching texture to make a statement. Featuring a thoughtful array of both roses and lilies, this dazzling assortment is bound to impress your recipient."),
    new Product(18, "Zou're Precious Bouquet", "product19.PNG", 90, "anniversary", "Blushing shades of pink blooms are nestled in lush greens to charm anyone's day. This bouquet is abundant with a classic assortment of pretty florals - roses, alstroemeria and carnations to name a few."),
    new Product(19, "Long Stem Red Rose Bouquet", "product20.PNG", 200, "anniversary", "You can never go wrong with a bouquet of hand delivered long stem red roses from a local florist. Let our network of expert florists design this timeless red bouquet to make a statement for your special someone. Red flowers are an elegant, iconic and romantic gift for anyone close to your heart. Each rose is handcrafted and hand delivered to say I love you directly from a local florist to their home or office."),
    new Product(20, "Pretty in Pink Belgian Chocolate Truffles", "product21.PNG", 45, "anniversary", "Send a little piece of your heart with the Pretty in Pink Truffles. Adorably designed in heart shapes with a pink and red coating for the holiday of love, this treat comes neatly packaged with 15 truffles aligned with their shade of pink."),
    new Product(21, "Valentine's Day Belgian Chocolate Covered Treat Sampler", "product22.PNG", 45, "anniversary", "Don’t make that special someone chose this February, and send the Valentine's Day Belgian Chocolate Covered Treat Sampler instead. Try an assortment of holiday treats such as chocolate-dipped Rice Krispie® treats, chocolate cookies, mini chocolate pretzel twists, and more."),
    new Product(22, "Bliss White Orchid", "product23.PNG", 68, "congratulations", "The most popular variety of this plant, the Phalaenopsis orchid makes a great gift for plant lovers and plant beginners alike! White orchids are easy to care for and add a touch of delicate beauty to any home, office or table."),
    new Product(23, "CLASSIC WHITE CALLA LILY", "product24.PNG", 58, "congratulations", "This houseplant is great for making every day bright. Whether perched on a windowsill or gifted to a friend in need of a smile, the pure white tones and healthy greenery add a delicate touch to any space. This plant loves rich soil and plenty of sun."),
    new Product(24, "SPRING FLING TULIP BULB GARDEN", "product25.PNG", 45, "congratulations", "Grow a pop of color for the changing season with the Assorted Spring Tulip Garden blooming pink, yellow and purple flowers. Nothing revitalizes a space like fresh flowers. Packed with bold bell-shaped blooms, this bulb garden is the perfect gift for any occasion."),
    new Product(25, "CONGRATS BELGIAN CHOCOLATE COVERED BERRY-GRAM", "product26.PNG", 55, "congratulations", "Artisan Crafted Belgian Chocolate Covered Treats Crafted in a Small Batch Kitchen 12 Strawberries Hand Dipped in Belgian Dark Chocolate Hand Decorated with drizzles and White Chocolate Letters spelling out \"\"CONGRATS\"\" Arrives in an Elegant Gift Box.") 
  ];
constructor(){}

getProductsByStatus(status: string): Product[] {
  return this.products.filter(product => product.status === status);
}
getProductByTitle(title: string): Product | undefined {
 
  return this.products.find(product => product.title.toLowerCase() === title.toLowerCase());
}

getProductById(id: number): Product | undefined {
  return this.products.find(product => product.id === id);
}

getAllProducts(): Product[] {
  return this.products;
}
}