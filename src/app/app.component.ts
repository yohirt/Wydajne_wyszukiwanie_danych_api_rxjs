import { Component, VERSION } from '@angular/core';
import { ServiceService } from './service.service';

export interface Character {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  characters: Array<Character> = [];
  constructor(private service: ServiceService) {}

  search(name: string) {
    console.log('name');
    this.service
      .search(name)
      .subscribe((characters) => (this.characters = characters));
  }
}
