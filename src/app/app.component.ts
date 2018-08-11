import { LoginPage } from './../pages/login/login';
import { WildlifePage } from './../pages/wildlife/wildlife';
import { EntertainmentPage } from './../pages/entertainment/entertainment';
import { GeneralPage } from './../pages/general/general';
import { HealthPage } from './../pages/health/health';
import { TechnologyPage } from './../pages/technology/technology';
import { SciencePage } from './../pages/science/science';
import { SportsPage } from './../pages/sports/sports';
import { BusinessPage } from './../pages/business/business';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InterestsPage } from '../pages/interests/interests';
import { SuperTabs } from 'ionic2-super-tabs';
import { ForYouPage } from '../pages/for-you/for-you';
import { TrendingPage } from '../pages/trending/trending';
import { AboutPage } from '../pages/about/about';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})

var config = {
 apiKey: "AIzaSyBwWQVwNPAza-Jnuc5yYbS4iyy7iTbEalo",
  authDomain: "newsdb-a2b21.firebaseapp.com",
  databaseURL: "https://newsdb-a2b21.firebaseio.com",
  projectId: "newsdb-a2b21",
   storageBucket: "newsdb-a2b21.appspot.com",
  messagingSenderId: "301147156320",
 };
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AboutPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    firebase.initializeApp({
    apiKey: "AIzaSyBwWQVwNPAza-Jnuc5yYbS4iyy7iTbEalo",
      authDomain: "newsdb-a2b21.firebaseapp.com",
        databaseURL: "https://newsdb-a2b21.firebaseio.com",
          projectId: "newsdb-a2b21",
            storageBucket: "newsdb-a2b21.appspot.com",
              messagingSenderId: "301147156320",
    })
                // used for an example of ngFor and navigation
                this.pages = [
                  { title: 'Home', component: HomePage },
                  { title: 'Business', component: BusinessPage },
                  { title: 'Entertainment', component: EntertainmentPage },
                  { title: 'General', component: GeneralPage },
                  { title: 'Health', component: HealthPage },
                  { title: 'Sports', component: SportsPage },
                  { title: 'Science', component: SciencePage },
                  { title: 'Technology', component: TechnologyPage },
                  { title: 'Wildlife', component: WildlifePage },
                  { title: 'Interests', component: InterestsPage },
                  { title: 'Login', component: LoginPage }
                ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
