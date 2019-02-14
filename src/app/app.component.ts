import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin-template';
  mapTOView: any;

  constructor(private appService: AppService) {
  }
  ngOnInit() {
    this.appService.detailData.subscribe((res) => {
      this.mapTOView = res;
      console.log('I am from Event emitter! ' + JSON.stringify(res));
    });
  }

}
