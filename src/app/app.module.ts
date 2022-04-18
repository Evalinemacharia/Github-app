import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgProgressModule } from '@ngx-progressbar/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe'
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GithubRequestService } from './github-http/github-request.service';
// import { UpperCasePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    SearchComponent,
    NavbarComponent,
  
    // UpperCasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgProgressHttpClientModule,
    NgProgressModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GithubRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
