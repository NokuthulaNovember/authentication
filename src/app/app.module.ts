import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import firebase from 'firebase'
import {Camera} from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { ProfileProvider } from '../providers/profile/profile';
import { ProfilePage } from '../pages/profile/profile';


export const config={
  apiKey: "AIzaSyDdDrMJlyxgDWadEy_GG7dxRxjSd3AjCnw",
  authDomain: "regapp-a4940.firebaseapp.com",
  databaseURL: "https://regapp-a4940.firebaseio.com",
  projectId: "regapp-a4940",
  storageBucket: "regapp-a4940.appspot.com",
  messagingSenderId: "379380194384"
}
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage

  
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage
    
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Camera,
    ProfileProvider,
  
  ]
})
export class AppModule {}
