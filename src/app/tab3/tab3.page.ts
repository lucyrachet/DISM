import { Component } from '@angular/core';

import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  clienteData: any;

  constructor(
    public apiService: ApiService, 
    private router: Router) {
    this.clienteData = [];
  }

  ionViewWillEnter(){
    this.getAllCliente();
  }

  getAllCliente() {
    this.apiService.getListCliente().subscribe(response => {
      this.clienteData = response;
    });
  }

  editar(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        parte: item
      }
    };
    this.router.navigate(['editarCliente'], navigationExtras);
  }
}
