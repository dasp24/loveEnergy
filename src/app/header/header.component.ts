import { Component, OnInit } from '@angular/core';

import { DeviceDetector } from '../services/device-detector.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerItems: string[] = ['Business Energy', 'Home Energy', 'Other Services', 'Content Hub', 'About Us']
  public isMenuOpen: boolean = false;
  constructor(public deviceDetector: DeviceDetector) { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
