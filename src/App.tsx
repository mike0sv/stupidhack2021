import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { square, triangle, images } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Details from './pages/Details';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global CSS */
import './global.css';
import { Provider } from 'react-redux';
import { store } from './app/store';

const App: React.FC = () => (
  <IonApp>
    <Provider store={store}>
    <IonReactRouter>
      {/*<IonTabs>*/}
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        {/*<IonTabBar slot="bottom">*/}
        {/*  <IonTabButton tab="tab1" href="/tab1">*/}
        {/*    <IonIcon icon={triangle} />*/}
        {/*    <IonLabel>Tab One</IonLabel>*/}
        {/*  </IonTabButton>*/}
        {/*  <IonTabButton tab="tab2" href="/tab2">*/}
        {/*    <IonIcon icon={images} />*/}
        {/*    <IonLabel>Photos</IonLabel>*/}
        {/*  </IonTabButton>*/}
        {/*  <IonTabButton tab="tab3" href="/tab3">*/}
        {/*    <IonIcon icon={square} />*/}
        {/*    <IonLabel>Tab Three</IonLabel>*/}
        {/*  </IonTabButton>*/}
        {/*</IonTabBar>*/}
      {/*</IonTabs>*/}
    </IonReactRouter>
    </Provider>
  </IonApp>
);

export default App;
