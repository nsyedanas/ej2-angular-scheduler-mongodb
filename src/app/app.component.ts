import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
})

export class AppComponent implements OnInit {
  private dataManager: DataManager = new DataManager({
    url: 'http://localhost:5000/GetData',
    crudUrl: 'http://localhost:5000/BatchData',
    adaptor: new UrlAdaptor,
    crossDomain: true
  });
  public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
  public selectedDate: Date;
  ngOnInit(): void {
    this.selectedDate = new Date(2026, 0, 1);
  }
}