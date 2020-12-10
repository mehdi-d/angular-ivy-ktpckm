import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { interval } from "rxjs";
import { take } from "rxjs/operators";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }

  getData() {
    return interval(1000).pipe(take(2));
  }
}
