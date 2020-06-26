import { Component, OnInit } from '@angular/core';
import { destinations } from '../destinations';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.sass']
})
export class TravelsComponent implements OnInit {
destinations = destinations;
  constructor() { }

  ngOnInit(): void {
  }

}
