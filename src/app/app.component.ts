import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

declare var google;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get('/appNames').subscribe(data => {
      console.log(data);
    });
  }

  applicationNames: any[] = [{ "name": "CLM" }, { "name": "PSI" }, { "name": "DLI" }];
  subAppNames: any[];
  allValues: any[];

  loadSupAppNames(appName: string): any[] {
    console.log('sdfhasdjkflsd');
    this.http.get('/appNames').subscribe(data => {
      console.log('ldkfjsdfklj');
      console.log(data);
    });
    switch (appName) {
      case "PSI":
        this.subAppNames = [{ "name": "PSI-subGroup1" }, { "name": "PSI-subGroup2" }, { "name": "PSI-subGroup3" }];
        return this.subAppNames;
      case "DLI":
        this.subAppNames = [{ "name": "DLI-subGroup1" }, { "name": "DLI-subGroup2" }, { "name": "DLI-subGroup3" }];
        return this.subAppNames;
      case "CLM":
        this.subAppNames = [{ "name": "CLM-subGroup1" }, { "name": "CLM-subGroup2" }, { "name": "CLM-subGroup3" }];
        return this.subAppNames;
    }
  }
  loadData(appName: string, subAppName: string): any[] {
    switch (appName) {
      case "PSI":
        switch (subAppName) {
          case "PSI-subGroup1":
            this.allValues = [{ "TotalTests": "100", "TotalAutomated": "90", "Month": "April" }, { "TotalTests": "110", "TotalAutomated": "100", "Month": "May" }, { "TotalTests": "120", "TotalAutomated": "110", "Month": "June" }];
            return this.allValues;
          case "PSI-subGroup2":
            this.allValues = [{ "TotalTests": "130", "TotalAutomated": "120", "Month": "April" }, { "TotalTests": "140", "TotalAutomated": "130", "Month": "May" }, { "TotalTests": "150", "TotalAutomated": "140", "Month": "June" }];
            return this.allValues;
          case "PSI-subGroup3":
            this.allValues = [{ "TotalTests": "160", "TotalAutomated": "150", "Month": "April" }, { "TotalTests": "170", "TotalAutomated": "160", "Month": "May" }, { "TotalTests": "180", "TotalAutomated": "170", "Month": "JUne" }];
            return this.allValues;
        }
      case "DLI":
        switch (subAppName) {
          case "DLI-subGroup1":
            this.allValues = [{ "TotalTests": "100", "TotalAutomated": "90", "Month": "April" }, { "TotalTests": "110", "TotalAutomated": "100", "Month": "May" }, { "TotalTests": "120", "TotalAutomated": "110", "Month": "June" }];
            return this.allValues;
          case "DLI-subGroup2":
            this.allValues = [{ "TotalTests": "130", "TotalAutomated": "120", "Month": "April" }, { "TotalTests": "140", "TotalAutomated": "130", "Month": "May" }, { "TotalTests": "150", "TotalAutomated": "140", "Month": "June" }];
            return this.allValues;
          case "DLI-subGroup3":
            this.allValues = [{ "TotalTests": "160", "TotalAutomated": "150", "Month": "April" }, { "TotalTests": "170", "TotalAutomated": "160", "Month": "May" }, { "TotalTests": "180", "TotalAutomated": "170", "Month": "JUne" }];
            return this.allValues;
        }
      case "CLM":
        switch (subAppName) {
          case "CLM-subGroup1":
            this.allValues = [{ "TotalTests": "100", "TotalAutomated": "90", "Month": "April" }, { "TotalTests": "110", "TotalAutomated": "100", "Month": "May" }, { "TotalTests": "120", "TotalAutomated": "110", "Month": "June" }];
            return this.allValues;
          case "CLM-subGroup2":
            this.allValues = [{ "TotalTests": "130", "TotalAutomated": "120", "Month": "April" }, { "TotalTests": "140", "TotalAutomated": "130", "Month": "May" }, { "TotalTests": "150", "TotalAutomated": "140", "Month": "June" }];
            return this.allValues;
          case "CLM-subGroup3":
            this.allValues = [{ "TotalTests": "160", "TotalAutomated": "150", "Month": "April" }, { "TotalTests": "170", "TotalAutomated": "160", "Month": "May" }, { "TotalTests": "180", "TotalAutomated": "170", "Month": "JUne" }];
            return this.allValues;
        }
    }

  }

  pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['samp',     11],
      ['samp1',      2],
      ['samp2',  2],
      ['samp3', 2],
      ['sampl4',    7]
    ],
    options: {'title': 'Tasks', backgroundColor: '#e9ecef'},
  };

}
