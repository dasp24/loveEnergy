import { Component } from '@angular/core';
import { DeviceDetector } from '../services/device-detector.service';

@Component({
  selector: 'app-supplier-table',
  templateUrl: './supplier-table.component.html',
  styleUrls: ['./supplier-table.component.scss']
})
export class SupplierTableComponent  {

  public supplierArray: { [key: string]: string}[] = [{ url: 'assets/water-supplier-logos/everflow-water.png', description: 'Independent water supplier Everflow promise to build a well for every 250 customers switched', link: 'Request a quote' },
  { url: 'assets/water-supplier-logos/castle-water-medium-size-logo.png', description: 'Launched in 2014, Castle Water is the UK’s leading independent business water supplier', link: 'Request a quote' },
  { url: 'assets/water-supplier-logos/water-business.png', description: 'Water2business date back to a joint venture created by Bristol Water and Wessex Water in 2000', link: 'Request a quote' },
  { url: 'assets/water-supplier-logos/wave.png', description: 'Wave Utilities is a leading national water supplier with over 300,000 business customers', link: 'Request a quote' }];

  constructor(public deviceDetector: DeviceDetector) { }
}
