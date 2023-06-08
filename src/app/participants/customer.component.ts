import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.http.get<any[]>('your_backend_url/customers')
      .subscribe(
        response => {
          this.customers = response;
        },
        error => {
          console.log('Error fetching customers:', error);
        }
      );
  }
}
