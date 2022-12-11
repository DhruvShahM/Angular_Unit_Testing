import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorService } from './calculator/calculator.service';
import { LoggerService } from './Logger/logger.service';
import { StrengthPipe } from './pipes/Strength/Strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,CalculatorService,LoggerService]
})
export class AppModule { }
