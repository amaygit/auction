import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  sellers!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getSellers();
  }

  getSellers() {
    this.http.get<any[]>('your_backend_url/sellers')
      .subscribe(
        response => {
          this.sellers = response;
        },
        error => {
          console.log('Error fetching sellers:', error);
        }
      );
  }
}
