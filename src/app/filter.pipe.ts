import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], SearchValue: string): any[] {
    if (!items || !SearchValue) {
      return items;
      

    }
    return items.filter((items =>
      items.content.name.toLocaleLowerCase().includes(SearchValue.toLocaleLowerCase())
      ||
      items.content.email.toLocaleLowerCase().includes(SearchValue.toLocaleLowerCase())
      ||
      items.content.phoneNumber.toString().toLocaleLowerCase().includes(SearchValue.toLocaleLowerCase())
      ||
      items.content.vehicleNumber.toString().toLocaleLowerCase().includes(SearchValue.toLocaleLowerCase())
      ||
      items.content.vehicleModel.toLocaleLowerCase().includes(SearchValue.toLocaleLowerCase())
      ||
      items.content.comments.toLocaleLowerCase().includes(SearchValue.toLocaleLowerCase()) 
      ||
      items.content.date.toLocaleLowerCase().includes(SearchValue.toLocaleLowerCase())
    ));
}


}
