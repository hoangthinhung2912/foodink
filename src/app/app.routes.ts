import {HomeComponent} from './pages/home/home.component';
import {TestComponent} from './components/test/test.component';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];
