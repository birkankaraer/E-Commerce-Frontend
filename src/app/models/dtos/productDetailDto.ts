import { ProductImage } from "../productImage";


export interface ProductDetailDto{
    productId:number;
    categoryId:number;
    productName:string;
    unitPrice:number;
    unitsInStock:number;
    categoryName:string;
    productImages:ProductImage[];
}
