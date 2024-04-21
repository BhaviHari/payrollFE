import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module'
import { DatePipe, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './common/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CookieService } from 'ngx-cookie-service';
import { MemoService } from './service/memo.service';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSliderModule} from '@angular/material/slider';
import {  NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from './safe.pipe';
import { LogoutComponent } from './logout/logout.component';
import { LoginLogoComponent } from './login-logo/login-logo.component';
import { JwtUnAuthorizedInterceptorServiceService } from './jwt-un-authorized-interceptor-service.service'; 


const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    AppComponent, LoginComponent, FooterComponent,
    SidebarComponent, AboutComponent, TestComponent, SafePipe, LogoutComponent, LoginLogoComponent
  ],
  imports: [
    NgIdleKeepaliveModule.forRoot(),
    ToastrModule.forRoot(),
    SharedModule,MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatAutocompleteModule,
    MatSliderModule, ReactiveFormsModule,
    // TQModule,
    // TQRoutingModule,
     NgbModule, PdfViewerModule,NgxSpinnerModule
     
    //  AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    //   apiKey:'AIzaSyDzR2M-IsC07ZP1vwiLKgvhIKZhqSMngC8'
    // })
    // ReportsRoutingModule, ReportsModule, 
  ],
  providers: [MemoService,CookieService,DatePipe, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtUnAuthorizedInterceptorServiceService,
      multi: true
    },
    {provide: LocationStrategy, useClass: PathLocationStrategy}
    ,{
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
      // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }