import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  api: string = 'http://localhost:4201/';
  constructor(private http: HttpClient) {}

  addCustomerToStripe(name: string) {
    return this.http.post(this.api + "create-customer/name/tedsantiago@gmail.com/phone/603-690-8891", name)
    .subscribe((res) => {
      console.log(res);
    });
  }
}
