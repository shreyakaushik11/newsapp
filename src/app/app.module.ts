import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {SuperTabsModule} from 'ionic2-super-tabs'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InterestsPage } from '../pages/interests/interests';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ForYouPage} from '../pages/for-you/for-you';
import {TrendingPage} from './../pages/trending/trending'
import {VideosPage} from './../pages/videos/videos'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InterestsPage,
    ForYouPage,
    TrendingPage,
    VideosPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InterestsPage,
    ForYouPage,
    TrendingPage,
    VideosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
