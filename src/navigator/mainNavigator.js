import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfSignIn11161625Navigator from '../features/CopyOfSignIn11161625/navigator';
import CopyOfBlankScreen3161624Navigator from '../features/CopyOfBlankScreen3161624/navigator';
import CopyOfBlankScreen3161623Navigator from '../features/CopyOfBlankScreen3161623/navigator';
import CopyOfBlankScreen3161622Navigator from '../features/CopyOfBlankScreen3161622/navigator';
import CopyOfBlankScreen3161621Navigator from '../features/CopyOfBlankScreen3161621/navigator';
import CopyOfBlankScreen3161620Navigator from '../features/CopyOfBlankScreen3161620/navigator';
import CopyOfBlankScreen3161619Navigator from '../features/CopyOfBlankScreen3161619/navigator';
import CopyOfBlankScreen3161618Navigator from '../features/CopyOfBlankScreen3161618/navigator';
import BlankScreen4161617Navigator from '../features/BlankScreen4161617/navigator';
import BlankScreen3161616Navigator from '../features/BlankScreen3161616/navigator';
import SignIn11161615Navigator from '../features/SignIn11161615/navigator';
import NotificationList2161614Navigator from '../features/NotificationList2161614/navigator';
import UserProfile3161613Navigator from '../features/UserProfile3161613/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfSignIn11161625: { screen: CopyOfSignIn11161625Navigator },
CopyOfBlankScreen3161624: { screen: CopyOfBlankScreen3161624Navigator },
CopyOfBlankScreen3161623: { screen: CopyOfBlankScreen3161623Navigator },
CopyOfBlankScreen3161622: { screen: CopyOfBlankScreen3161622Navigator },
CopyOfBlankScreen3161621: { screen: CopyOfBlankScreen3161621Navigator },
CopyOfBlankScreen3161620: { screen: CopyOfBlankScreen3161620Navigator },
CopyOfBlankScreen3161619: { screen: CopyOfBlankScreen3161619Navigator },
CopyOfBlankScreen3161618: { screen: CopyOfBlankScreen3161618Navigator },
BlankScreen4161617: { screen: BlankScreen4161617Navigator },
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
