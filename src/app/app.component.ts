
import { DemoPage } from '../pages/demo-page/demo-page';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = DemoPage;
  constructor(private diagnostic: Diagnostic,public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();

      this.diagnostic.isLocationEnabled().then(
        (isAvailable) => {
          console.log('Is available? ', isAvailable);
          // alert('Is available? ' + isAvailable);
        }).catch( (e) => {
          console.log("Error", e);
          // alert(JSON.stringify(e));
        });

      });

  }


}