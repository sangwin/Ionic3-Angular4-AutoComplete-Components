
import {AutoCompletePage} from '../pages/auto-complete/auto-complete';
import { DemoPage } from '../pages/demo-page/demo-page';
import { MultipleFieldsPage } from '../pages/multiple-fields/multiple-fields';



@NgModule({
  declarations: [
    DemoPage,
    AutoCompletePage,
    MultipleFieldsPage
  ],
  entryComponents: [
    DemoPage,
    AutoCompletePage,
    MultipleFieldsPage
  ]
})
export class AppModule {}