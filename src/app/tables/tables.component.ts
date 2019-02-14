import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  @Input() tableData: string[];
  @Input() dataBody: any;

  constructor(private appService: AppService) { }


  ngOnInit() {
  }
  openDetail(data) {
    this.appService.detailData.emit(data);
  }

}
