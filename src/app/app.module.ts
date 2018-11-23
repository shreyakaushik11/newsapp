import { AllNewsPageModule } from './../pages/all-news/all-news.module';
import { TrendPageModule } from './../pages/trend/trend.module';
import { ForyouPageModule } from './../pages/foryou/foryou.module';
import { PrimaryTabsModulePage } from './../pages/primary-tabs-module/primary-tabs-module';
import { LoginPage } from './../pages/login/login';
import { WildlifePage } from './../pages/wildlife/wildlife';
import { TechnologyPage } from './../pages/technology/technology';
import { SportsPage } from './../pages/sports/sports';
import { SciencePage } from './../pages/science/science';
import { HealthPage } from './../pages/health/health';
import { GeneralPage } from './../pages/general/general';
import { EntertainmentPage } from './../pages/entertainment/entertainment';
import { BusinessPage } from './../pages/business/business';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {SuperTabsModule} from 'ionic2-super-tabs'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AboutPage} from '../pages/about/about';
import { InterestsPage } from '../pages/interests/interests';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ForYouPage} from '../pages/for-you/for-you';
import {TrendingPage} from './../pages/trending/trending';
import {VideosPage} from './../pages/videos/videos';
import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { Facebook } from '@ionic-native/facebook';
import { HttpClientModule } from '@angular/common/http';
import { DataProvider } from '../providers/data/data';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativeStorage } from '@ionic-native/native-storage'
import { UserProvider } from '../providers/user/user';
import { ForyouPage } from '../pages/foryou/foryou';
import { TrendPage } from '../pages/trend/trend';
import { AllNewsPage } from '../pages/all-news/all-news';

const config = {
  apiKey: "AIzaSyBwWQVwNPAza-Jnuc5yYbS4iyy7iTbEalo",
  authDomain: "newsdb-a2b21.firebaseapp.com",
  databaseURL: "https://newsdb-a2b21.firebaseio.com",
  projectId: "newsdb-a2b21",
  storageBucket: "newsdb-a2b21.appspot.com",
  messagingSenderId: "301147156320"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InterestsPage,
    ForYouPage,
    TrendingPage,
    VideosPage,
    AboutPage,
    WildlifePage,
    TechnologyPage,
    SportsPage,
    SciencePage,
    HealthPage,
    GeneralPage,
    EntertainmentPage,
    BusinessPage,
    InterestsPage,
    LoginPage,
    PrimaryTabsModulePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    AngularFireModule.initializeApp(config),
    HttpClientModule,
    AngularFirestoreModule,
    ForyouPageModule,
    TrendPageModule,
    AllNewsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    InterestsPage,
    ForYouPage,
    TrendingPage,
    VideosPage,
    WildlifePage,
    TechnologyPage,
    SportsPage,
    SciencePage,
    HealthPage,
    GeneralPage,
    EntertainmentPage,
    BusinessPage,
    InterestsPage,
    LoginPage,
    PrimaryTabsModulePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    InAppBrowser,
    NativeStorage,
    UserProvider
  ]
})
export class AppModule {}
