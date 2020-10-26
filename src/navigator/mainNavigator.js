import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3161616Navigator from '../features/BlankScreen3161616/navigator';
import SignIn11161615Navigator from '../features/SignIn11161615/navigator';
import NotificationList2161614Navigator from '../features/NotificationList2161614/navigator';
import UserProfile3161613Navigator from '../features/UserProfile3161613/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3161616: { screen: BlankScreen3161616Navigator },
SignIn11161615: { screen: SignIn11161615Navigator },
NotificationList2161614: { screen: NotificationList2161614Navigator },
UserProfile3161613: { screen: UserProfile3161613Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
