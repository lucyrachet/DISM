import { Component } from '@angular/core';

import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  parteData: any;

  constructor(
    public apiService: ApiService, 
    private router: Router) {
    this.parteData = [];
  }

  ionViewWillEnter(){
    this.getAllParte();
  }

  getAllParte() {
    this.apiService.getListParte().subscribe(response => {
      this.parteData = response;
    });
  }

  delete(item) {
    this.apiService.deleteParte(item.id).subscribe(response => {
      this.getAllParte();
    });
  }

  editar(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        parte: item
      }
    };
    this.router.navigate(['editarParte'], navigationExtras);
  }
}
