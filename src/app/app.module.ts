import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DeviceDetector } from './services/device-detector.service';
import { QuotePageComponent } from './quote-page/quote-page.component';
import { ReasonsWhyComponent } from './reasons-why/reasons-why.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuotePageComponent,
    ReasonsWhyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DeviceDetector
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
