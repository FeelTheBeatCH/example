import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.scss']
})
export class CustomerOverviewComponent implements OnInit {
  private customers: CustomerModel[];
  public filteredCustomers: CustomerModel[] = [];
  public filterValue: string;
  private streams: Subscription;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.loadCustomers();
  }

  private loadCustomers() {
    this.streams = this.customerService.loadCustomersStrem().subscribe(
      customers => {
        this.customers = customers;
        this.filter();
      }
    );
  }

  public filter(value?) {
    if (!value || value === '') {
      this.filteredCustomers = this.customers;
      return;
    }
    this.filteredCustomers = this.customers.filter(customer => {
      for (const key in customer) {
        if (customer[key].toLowerCase().includes(value.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }
}
