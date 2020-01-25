import { Component, OnInit } from '@angular/core';
import { WarframeApiService } from '../services/warframe-api.service';

@Component({
  selector: 'app-fissures',
  templateUrl: './fissures.component.html',
  styleUrls: ['./fissures.component.sass']
})
export class FissuresComponent implements OnInit {

  fissures = [];
  constructor(public warframeService: WarframeApiService) { }

  ngOnInit() {
    this.getFissures();
  }

  getFissures() {
    this.warframeService.getFissures().subscribe((res) => {
      this.fissures = res;
      console.log(this.fissures);
      console.log(res);
    });
  }
}
