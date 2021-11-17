import { Injectable, EventEmitter } from '@angular/core';
import { DeviceType } from '../enums/device-type.enum';

@Injectable()
export class DeviceDetector {
  deviceType: DeviceType = DeviceType.DESKTOP;
  widthChange = new EventEmitter<number>();

  constructor() {
    this.widthChange.subscribe((width: number) => {
      if (width < 769) {
        this.deviceType = DeviceType.MOBILE;
      } else if (width < 1024) {
        this.deviceType = DeviceType.TABLET;
      } else {
        this.deviceType = DeviceType.DESKTOP;
      }
    });
  }
  get isMobile() {
    return this.deviceType === DeviceType.MOBILE;
  }

  get isTablet() {
    return this.deviceType === DeviceType.TABLET;
  }

  get isDesktop() {
    return this.deviceType === DeviceType.DESKTOP;
  }

}
