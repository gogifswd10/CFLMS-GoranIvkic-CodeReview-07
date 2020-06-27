import { Component, OnInit } from '@angular/core';
import { destinations } from '../destinations';
import { CartService } from '../card.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.sass']
})
export class TravelsComponent implements OnInit {
destinations = destinations;
  constructor(private cartService: CartService) { 
  }
addToCart(destinations) {
   window.alert('Your vacation has been added to the cart!');
   this.cartService.addToCart(destinations);
 }
  ngOnInit(): void {
  }

}
