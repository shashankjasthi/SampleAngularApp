import { Pipe, PipeTransform } from '@angular/core'// for @pipe and PipeTransform Interface
import { IProduct } from '../product-list/product'

@Pipe({
    name : 'productFilter'
})
export class ProductFilterPipe implements PipeTransform{

//
transform(value: IProduct[],filterBy: string):IProduct[]{
    filterBy = filterBy ? filterBy.toLocaleLowerCase(): null; //
    return filterBy ? value.filter((product:IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1): value;
}
}