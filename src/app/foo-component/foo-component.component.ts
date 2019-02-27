import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foo-component',
  templateUrl: './foo-component.component.html',
  styleUrls: ['./foo-component.component.css']
})
export class FooComponentComponent implements OnInit {

  constructor(public http: HttpClient) {}

    data: Object;
    loading: boolean;
    o :Observable<Object>;
    
    makeRequest(): void {
      console.log("here");
      this.loading = true;
      this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
      this.o.subscribe(this.getData);
    }
    getData = (d : Object) =>
    {
      this.data = new Object(d);
      this.loading = false;
    }

    //Nota bene, questo è un metodo alternativo al metodo makeRequest
    makeCompactRequest(): void {
      this.loading = true;
      this.http
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .subscribe(data => {
        this.data = data;
        this.loading = false;
        });
       }

  ngOnInit() {
  }

}
