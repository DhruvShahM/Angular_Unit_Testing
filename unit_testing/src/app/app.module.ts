import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorService } from './services/calculator/calculator.service';
import { LoggerService } from './services/Logger/logger.service';
import { StrengthPipe } from './pipes/Strength/Strength.pipe';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/Posts/posts.service';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,CalculatorService,LoggerService,PostsService]
})
export class AppModule { }
