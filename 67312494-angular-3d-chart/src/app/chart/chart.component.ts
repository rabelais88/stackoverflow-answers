import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import ChartRenderer from './ChartRenderer';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas: ElementRef<HTMLCanvasElement> =
    {} as ElementRef<HTMLCanvasElement>;
  chartRenderer?: ChartRenderer;
  constructor() {}
  ngAfterViewInit() {
    this.chartRenderer = new ChartRenderer({
      canvas: this.chartCanvas,
      width: 500,
      height: 500,
    });
  }
}
