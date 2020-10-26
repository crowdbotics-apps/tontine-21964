import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps1161801Navigator from '../features/Maps1161801/navigator';
import Feed2161800Navigator from '../features/Feed2161800/navigator';
import NotificationList3161799Navigator from '../features/NotificationList3161799/navigator';
import Messaging4161798Navigator from '../features/Messaging4161798/navigator';
import SignIn15161797Navigator from '../features/SignIn15161797/navigator';
import UserProfile6161796Navigator from '../features/UserProfile6161796/navigator';
import Camera8161794Navigator from '../features/Camera8161794/navigator';
import Maps161776Navigator from '../features/Maps161776/navigator';
import Add-Item161775Navigator from '../features/Add-Item161775/navigator';
import Maps161771Navigator from '../features/Maps161771/navigator';
import UserProfile161767Navigator from '../features/UserProfile161767/navigator';
import Maps161691Navigator from '../features/Maps161691/navigator';
import Add-Item161690Navigator from '../features/Add-Item161690/navigator';
import Maps161686Navigator from '../features/Maps161686/navigator';
import UserProfile161682Navigator from '../features/UserProfile161682/navigator';
import ArticleList161628Navigator from '../features/ArticleList161628/navigator';
import ArticleList161627Navigator from '../features/ArticleList161627/navigator';
import ArticleList161626Navigator from '../features/ArticleList161626/navigator';
import CopyOfBlankScreen3161624Navigator from '../features/CopyOfBlankScreen3161624/navigator';
import CopyOfBlankScreen3161623Navigator from '../features/CopyOfBlankScreen3161623/navigator';
import CopyOfBlankScreen3161622Navigator from '../features/CopyOfBlankScreen3161622/navigator';
import CopyOfBlankScreen3161621Navigator from '../features/CopyOfBlankScreen3161621/navigator';
import CopyOfBlankScreen3161620Navigator from '../features/CopyOfBlankScreen3161620/navigator';
import CopyOfBlankScreen3161619Navigator from '../features/CopyOfBlankScreen3161619/navigator';
import CopyOfBlankScreen3161618Navigator from '../features/CopyOfBlankScreen3161618/navigator';
import BlankScreen4161617Navigator from '../features/BlankScreen4161617/navigator';
import SignIn11161615Navigator from '../features/SignIn11161615/navigator';
import UserProfile3161613Navigator from '../features/UserProfile3161613/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps1161801: { screen: Maps1161801Navigator },
Feed2161800: { screen: Feed2161800Navigator },
NotificationList3161799: { screen: NotificationList3161799Navigator },
Messaging4161798: { screen: Messaging4161798Navigator },
SignIn15161797: { screen: SignIn15161797Navigator },
UserProfile6161796: { screen: UserProfile6161796Navigator },
Camera8161794: { screen: Camera8161794Navigator },
Maps161776: { screen: Maps161776Navigator },
Add-Item161775: { screen: Add-Item161775Navigator },
Maps161771: { screen: Maps161771Navigator },
UserProfile161767: { screen: UserProfile161767Navigator },
Maps161691: { screen: Maps161691Navigator },
Add-Item161690: { screen: Add-Item161690Navigator },
Maps161686: { screen: Maps161686Navigator },
UserProfile161682: { screen: UserProfile161682Navigator },
ArticleList161628: { screen: ArticleList161628Navigator },
ArticleList161627: { screen: ArticleList161627Navigator },
ArticleList161626: { screen: ArticleList161626Navigator },
CopyOfBlankScreen3161624: { screen: CopyOfBlankScreen3161624Navigator },
CopyOfBlankScreen3161623: { screen: CopyOfBlankScreen3161623Navigator },
CopyOfBlankScreen3161622: { screen: CopyOfBlankScreen3161622Navigator },
CopyOfBlankScreen3161621: { screen: CopyOfBlankScreen3161621Navigator },
CopyOfBlankScreen3161620: { screen: CopyOfBlankScreen3161620Navigator },
CopyOfBlankScreen3161619: { screen: CopyOfBlankScreen3161619Navigator },
CopyOfBlankScreen3161618: { screen: CopyOfBlankScreen3161618Navigator },
BlankScreen4161617: { screen: BlankScreen4161617Navigator },
SignIn11161615: { screen: SignIn11161615Navigator },
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
