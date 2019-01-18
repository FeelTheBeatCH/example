import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.scss']
})
export class CustomerOverviewComponent implements OnInit, OnDestroy {
  private customers: CustomerModel[] = [];
  public filteredCustomers: CustomerModel[] = [];
  public filterValue: string;
  private stream: Subscription;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.loadCustomers();
  }

  ngOnDestroy() {
    this.stream.unsubscribe();
  }

  private loadCustomers() {
    this.stream = this.customerService.loadCustomersStrem().subscribe(
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
    const loweredValue = value.toLowerCase();
    this.filteredCustomers = this.customers.filter(
      customer => {
        for (const key in customer) {
          if (customer[key].toLowerCase().includes(loweredValue)) {
            return true;
          }
        }
        return false;
      }
    );
  }
}
