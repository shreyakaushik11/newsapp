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

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { InterestsPage } from '../pages/interests/interests';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,

    WildlifePage,
    TechnologyPage,
    SportsPage,
    SciencePage,
    HealthPage,
    GeneralPage,
    EntertainmentPage,
    BusinessPage,

    InterestsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WildlifePage,
    TechnologyPage,
    SportsPage,
    SciencePage,
    HealthPage,
    GeneralPage,
    EntertainmentPage,
    BusinessPage,
    InterestsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
