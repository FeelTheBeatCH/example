import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerValue: CustomerModel[] = [
    {
      name: 'Nessensohn',
      firstName: 'Beat',
      street: 'musterstrasse 1',
      plz: '1234',
      place: 'musterOrt'
    }, {
      name: 'Mustermann',
      firstName: 'jakob',
      street: 'Oriannastrasse 1b',
      plz: '9876',
      place: 'wohooo',
      notes: 'why because i can'
    },
    {
      name: 'Mustermann',
      firstName: 'jakob',
      street: 'Oriannastreet 1b',
      plz: '9876',
      place: 'wohooo',
      notes: 'why because i can'
    }
  ];

  private customerStream = new BehaviorSubject<CustomerModel[]>(this.customerValue);

  constructor() {
  }

  public loadCustomersStrem(): Observable<CustomerModel[]> {
    return this.customerStream;
  }

  public addCustomer(customer: CustomerModel) {
    this.customerValue.push(customer);
    this.customerStream.next(this.customerValue);
  }
}
