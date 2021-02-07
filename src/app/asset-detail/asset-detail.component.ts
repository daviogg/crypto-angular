import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { AssetHistory, HistoryItem, Interval } from '../models/assets';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.scss']
})
export class AssetDetailComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private activatedroute: ActivatedRoute, private service: CryptoService) { }

  ngOnInit(): void {
    this.lineChartLabels = [];
    this.populateChartData();
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public changeColor(): void {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  private populateChartData(): void {
    const today = new Date();
    const yesterday = this.getYesterday();
    const id = this.activatedroute.snapshot.paramMap.get('id');
    this.lineChartData[0] = {
      data: [],
      label: id
    };
    const history = this.service.getAssetHistory(id, Interval.m5, yesterday, today)
      .subscribe((r: AssetHistory) => {
        r.data.forEach(item => {
          this.populateXAxis(item);
          this.populateData(item);
        });
      });

    console.log(this.lineChartData);
    console.log(history);
  }

  private populateData(item: HistoryItem): void {
    this.lineChartData[0].data.push(item.priceUsd);
  }

  private populateXAxis(item: HistoryItem): void {
    const date = item.date;
    const stringHour = new Date(date).getUTCHours();
    const ampm = stringHour >= 12 ? 'PM' : 'AM';
    const dateElement = `${stringHour}${ampm}`;
    if (this.lineChartLabels.indexOf(dateElement) === -1) {
      this.lineChartLabels.push(`${stringHour}${ampm}`);
    }
  }

  private getYesterday(): Date {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d;
  }
}
