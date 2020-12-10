import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      console.log('new data:', data);
        this.value = data;
    }
  }

}