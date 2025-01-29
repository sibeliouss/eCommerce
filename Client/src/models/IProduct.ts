export interface IProduct{
    id:number,
    name:string,
    description?: string, 
    price:number,
    imgUrl?: string,
    stock?:number,
    isActive:boolean

}