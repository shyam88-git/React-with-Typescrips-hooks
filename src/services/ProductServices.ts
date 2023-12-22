import { IProduct } from "../models/IProduct";

export class ProductServices {

    private static products:IProduct[] = [
        {
            id: "A001",
            imgUrl: "https://static-01.daraz.com.np/p/4aff56b50c232659d630ad50a04c8288.jpg",
            name: "Rojen Watch",
            price: 5000,
            qty:20,
        },
        {
            id: "A002",
            imgUrl: "https://assorted.downloads.oppo.com/static/assets/products/oppo-watch-1/images/1920/sec8-img-073222c6333cda52cedac1e01048df38.png",
            name: "Oppo Watch",
            price: 6000,
            qty:24,
        },
        {
            id: "A003",
            imgUrl: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg",
            name: "Apple Watch",
            price: 8000,
            qty:50,
        },
        {
            id: "A004",
            imgUrl: "https://snpi.dell.com/snp/images/products/large/en-us~AC267813/AC267813.jpg",
            name: "Dell Watch",
            price: 5500,
            qty:40,
        },
        {
            id: "A005",
            imgUrl: "https://m.media-amazon.com/images/I/61vi37EAeML._AC_UF1000,1000_QL80_.jpg",
            name: "Lenovo Watch",
            price: 7000,
            qty:12,
        },
        {
            id: "A006",
            imgUrl: "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-watch-lite/section01-img02.png",
            name: "Mi Watch",
            price: 4500,
            qty:200,
        },
        {
            id: "A007",
            imgUrl: "https://www.bhakari.com/wp-content/uploads/2016/03/Hidden-camera-watch.jpg",
            name: "HP Watch",
            price: 7500,
            qty:5,
        },

    ];


    static getAllProducts():IProduct[]{

        return this.products;
    }
}
