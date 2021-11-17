import { Component } from '@angular/core';
import { DeviceDetector } from '../services/device-detector.service';

@Component({
  selector: 'app-reasons-why',
  templateUrl: './reasons-why.component.html',
  styleUrls: ['./reasons-why.component.scss']
})
export class ReasonsWhyComponent {
  reasonsArray: { [key: string]: string }[] = [
    { imageUrl: 'assets/reasons-to-switch-icons/low-prices-icon.svg', title: 'Low prices:', body: 'No hidden extras, no additional costs - just cheaper water rates' },
    { imageUrl: 'assets/reasons-to-switch-icons/free-water-audits-icon.svg', title: 'Free water audits:', body: 'If you spend over £1,000 on your annual water bill' },
    { imageUrl: 'assets/reasons-to-switch-icons/fixed-rates-icon.svg', title: 'Fixed rates:', body: 'You can fix your retail rates for up to 3 years' },
    { imageUrl: 'assets/reasons-to-switch-icons/easy-setup-icon.svg', title: 'Easy set up:', body: 'Once we’ve found the best deal, set up only takes a few minutes' },
  ]
  constructor(public deviceDetector: DeviceDetector) { }

}
