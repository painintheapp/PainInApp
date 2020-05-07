import {Animated, Easing} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';

import SignIn from '../screen/SignIn';
import Home from '../screen/Home';
import PainList from '../screen/PainList';
import Splash from '../screen/Splash';
import SignUp from '../screen/SignUp';
import LoginOption from '../screen/LoginOption';
import ForgotPassword from '../screen/ForgotPassword';
import Earn from '../screen/Earn';
import Profile from '../screen/Profile';
import MyJournal from '../screen/MyJournal';
import AddPain from '../screen/AddPain';

import { LIGHTBLUE } from '../helper/Color';


// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.linear,
  },
});

// const StoreTab = createStackNavigator(
//   {
//     History: {screen: Store},
//   },
//   {
//     headerMode: 'none',
//     cardStyle: {
//       backgroundColor: 'white',
//       opacity: 1,
//     },
//   },
// );
// const HomeTab = createStackNavigator(
//   {
//     Home: {screen: Home},
//   },
//   {
//     headerMode: 'none',
//     cardStyle: {
//       backgroundColor: 'white',
//       opacity: 1,
//     },
//   },
// );

// const ProfileTab = createStackNavigator(
//   {
//     ProfileTab: {screen: Profile},
//   },
//   {
//     headerMode: 'none',
//     cardStyle: {
//       backgroundColor: 'white',
//       opacity: 1,
//     },
//   },
// );

// const EarnTab = createStackNavigator(
//   {
//     EarnTab: {screen: Earn},
//   },
//   {
//     headerMode: 'none',
//     cardStyle: {
//       backgroundColor: 'white',
//       opacity: 1,
//     },
//   },
// );

// //Tab Navigation
// const TabNavigator = createBottomTabNavigator(
//   {
//     HomeTab: {screen: HomeTab},
//     StoreTab: {screen: StoreTab},
//     ProfileTab: {screen: ProfileTab},
//     EarnTab: {screen: EarnTab}
//   },
//   {
//     tabBarComponent: BottomNavContainer,
//     tabBarPosition: 'top',
//     swipeEnabled: false,
//     animationEnabled: false,
//   },
// );
const HomeStack = createStackNavigator(
  {
    home: Home,
    PainList: PainList,
    AddPain: AddPain,
  },
  {
    initialRouteName: 'home',
    headerMode: 'none',
  },
);

var AppDrawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: 'SPECILIST DIRECTORY',
      },
    },

    Earn: {
      screen: MyJournal,
      navigationOptions: {
        drawerLabel: 'MY JOURNAL',
      },
    },
    Education: {
      screen: Profile,
      navigationOptions: {
        drawerLabel: 'EDUCATION',
      },
    },
    Comunity: {
      screen: Earn,
      navigationOptions: {
        drawerLabel: 'COMUNITY DISCUSION',
      },
    },
  },
  {
    drawerType: 'front',
    //initialRouteName:'Merchants',
    drawerBackgroundColor: LIGHTBLUE.light,

    contentOptions: {
      activeTintColor: 'blue',
      activeBackgroundColor: '#e6e6e6',
    },
  },
);

// login stack
const LoginStack = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {header: null, gesturesEnabled: false},
  },
  LoginType: {
    screen: LoginOption,
    navigationOptions: {header: null, gesturesEnabled: false},
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {header: null, gesturesEnabled: false},
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {header: null, gesturesEnabled: false},
  },
  Forgot: {
    screen: ForgotPassword,
    navigationOptions: {header: null, gesturesEnabled: false},
  },
  Home: {
    screen: AppDrawer,
    navigationOptions: {header: null, gesturesEnabled: false},
  },
});

// eslint-disable-next-line no-undef
export default (SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AppDrawer,
    App: LoginStack,
    Auth: AppDrawer,
  },
  {
    initialRouteName: 'App',
    transitionConfig: noTransitionConfig,
  },
));
