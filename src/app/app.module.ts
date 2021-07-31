import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { BindingPracticeComponent } from './binding-practice/binding-practice.component';

import { FormsModule } from '@angular/forms';
import { SizerComponent } from './sizer/sizer.component';
import { DirectivePractiveComponent } from './directive-practive/directive-practive.component';
import { LoginComponent } from './login/login.component';
import { BackendServiceService } from './services/backend-service.service';
import { TestClass } from './models/person';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { InterceptorService } from './services/interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
import { MyhighlighterDirective } from './directives/myhighlighter.directive';
import { MyTestPipePipe } from './pipes/my-test-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent,
    BindingPracticeComponent,
    SizerComponent,
    DirectivePractiveComponent,
    LoginComponent,
    HomeComponent,
    MoviesComponent,
    NavComponent,
    PageNotFoundComponent,
    LogoutComponent,
    MyNgIfDirective,
    MyhighlighterDirective,
    MyTestPipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    // BackendServiceService
    HttpClient,
    {
      provide: "MyToken",
      useValue: 123
    },
    {
      provide: "MyTest",
      useValue: TestClass
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
