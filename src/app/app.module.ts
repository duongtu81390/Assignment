import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QnAComponent } from './qn-a/qn-a.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepwComponent } from './changepw/changepw.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { TestComponent } from './test/test.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    ContactComponent,
    FeedbackComponent,
    QnAComponent,
    LoginComponent,
    SignupComponent,
    ChangepwComponent,
    EditComponent,
    DetailComponent,
    TestComponent,
    TestDetailComponent,
    ForgotpwComponent,
    EditDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot([ 
      { path: '', 	component: HomeComponent },
      { path: 'intro', 	component: IntroComponent }, 
      {path: 'change', component:ChangepwComponent},
      {path: 'contact', component:ContactComponent},
      {path: 'edit', component:EditComponent},
      {path: 'edit/:username', component:EditDetailComponent},
      {path: 'feedback', component:FeedbackComponent},
      {path: 'login', component:LoginComponent},
      {path: 'qna', component:QnAComponent},
      {path: 'signup', component:SignupComponent},
      {path: 'test', component:TestComponent},
      {path: 'forgot', component:ForgotpwComponent},
      { path: 'test/:id', component: TestDetailComponent },
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
