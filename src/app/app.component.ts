import { Component, HostListener, OnInit } from '@angular/core';
import { DeviceDetector } from './services/device-detector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'energy';

  constructor(private deviceDetector: DeviceDetector) {

  }

  ngOnInit() {
    this.deviceDetector.widthChange.emit(document.documentElement.clientWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.deviceDetector.widthChange.emit(document.documentElement.clientWidth);
  }
}

