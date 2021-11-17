import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DeviceDetector } from './services/device-detector.service';
import { QuotePageComponent } from './quote-page/quote-page.component';
import { ReasonsWhyComponent } from './reasons-why/reasons-why.component';
import { SupplierTableComponent } from './supplier-table/supplier-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuotePageComponent,
    ReasonsWhyComponent,
    SupplierTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [DeviceDetector
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
