import { Component } from '@angular/core';

import { Parte } from '../models/parte';
import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  parteData: Parte;
  
  constructor(
    public apiService: ApiService, 
    public router: Router) {
    this.parteData = new Parte();
  }
  ngOnInit(){

  }
  
  nuevoParte(){
    this.apiService.createParte(this.parteData).subscribe((response) => {
      this.router.navigate(['tab2']);
    });
  }

}
