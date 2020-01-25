import { Component, OnInit } from '@angular/core';
import { WarframeApiService } from '../services/warframe-api.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.sass']
})
export class AlertsComponent implements OnInit {

  constructor(public warframeService: WarframeApiService) { }

  ngOnInit() {
    this.getAlerts();
  }

  getAlerts() {
    this.warframeService.getAlerts().subscribe((res) => {
      console.log(res);
    });
  }

}
