import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css'],
})
export class UnderConstructionComponent{
  constructor( private router: Router ) {}

    //TODO remove the following functions as only for testing purposes: 
    triggerError(): void {
      throw new Error('This is a custom error!');
    }
    routeToPage(){
      this.router.navigate(['under-construction']);
    }
}
