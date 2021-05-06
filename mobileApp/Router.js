import  React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux'
import Splash from './src/screens/Splash'
import Login from './src/screens/login'
import SignUp from './src/screens/signUp'
import Profile from './src/screens/Profile'
import Frame1 from './src/screens/Frame1'
import MoreConditions from './src/screens/MoreConditions'
import MoreCondition2 from './src/screens/MoreCondition2'
import ConditionsSelect from './src/screens/ConditionsSelect'
import teamSearch from './src/screens/teamSearch'
import SpecialistDr from './src/screens/SpecialistDr'
import Frame41 from './src/screens/Frame41'
import Frame17 from './src/screens/Frame17'
import Frame18 from './src/screens/Frame18'
import Frame19 from './src/screens/Frame19'
import Frame21 from './src/screens/Frame21'
import Frame23 from './src/screens/Frame23'
import Frame24 from './src/screens/Frame24'
import Frame26 from './src/screens/Frame26'
import Frame27 from './src/screens/Frame27'
import Frame29 from './src/screens/Frame29'
import Frame30 from './src/screens/Frame30'
import Frame33 from './src/screens/Frame33'
import Frame34 from './src/screens/Frame34'
import Frame35 from './src/screens/Frame35'
import Frame32 from './src/screens/Frame32'
import Frame2 from './src/screens/Frame2'
import Frame3 from './src/screens/Frame3'
import Frame4 from './src/screens/Frame4'
import Frame15 from './src/screens/Frame15'
import Myjournal from './src/screens/MyJournals'
import Frame36 from './src/screens/Frame36'
import Frame38 from './src/screens/Frame38'
import PainEducation from './src/screens/Education1'
import Frame39 from './src/screens/Frame39'
import SideMenu from './src/components/SideMenu'
import BodyPainDetector from './src/screens/BodyPainDetector'
import Education10 from "./src/screens/Education10";
import Education11 from "./src/screens/Education11";
import Education12 from "./src/screens/Education12";
import Education13 from "./src/screens/Education13";
import Education14 from "./src/screens/Education14";
import Education15 from "./src/screens/Education15";
import Education16 from "./src/screens/Education16";
import Education17 from "./src/screens/Education17";

import CommunityDiscussion1 from "./src/screens/CommunityDiscussion1";
import CommunityDiscussion7 from "./src/screens/CommunityDiscussion7";
import CommunityDiscussion3 from "./src/screens/CommunityDiscussion3";
import CommunityDiscussion4 from "./src/screens/CommunityDiscussion4";
import CommunityDiscussion5 from "./src/screens/CommunityDiscussion5";
import CommunityDiscussionSlider from "./src/screens/CommunityDiscussionSlider";
import SleepingHabits from "./src/screens/SleepingHabits";
import ExerciseTherapy from "./src/screens/ExerciseTherapy";
import Conditions from "./src/screens/Conditions";
import EmotionalAniexty from "./src/screens/EmotionalAniexty";
import TRIGGERS from "./src/screens/TRIGGERS";
import TriggerTrends from "./src/screens/TriggerTrends";
import TriggersStrongWinds from "./src/screens/TriggersStrongWinds";
import myJournals36 from "./src/screens/myJournals36";
import myJournals37 from "./src/screens/myjournal37";





const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Router = () => {

  const dispatch = useDispatch();
  const authProps = useSelector(state => state.auth);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userInfo');
        if (userToken) {
          let userInfo = JSON.parse(userToken);
          dispatch({
            type: "User_Exit",
            payload: userInfo
          })
        } else {
          dispatch({
            type: "User_Not_Exit"
          })
        }
      } catch (e) {
        console.log("========== e =======", e);
      }
    };
    bootstrapAsync();
  }, []);

  const { isUserExit } = authProps;



  const useNotVerifyStack = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' headerMode='none'>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Drawer" component={Drawerfunc} />
          <Stack.Screen name="Frame1" component={Frame1} />
          <Stack.Screen name="Frame2" component={Frame2} />
          <Stack.Screen name="BodyPainDetector" component={BodyPainDetector} />
          <Stack.Screen name="Frame36" component={Frame36} />
          <Stack.Screen name="Education10" component={Education10} />
          <Stack.Screen name="Education11" component={Education11} />
          <Stack.Screen name="Education12" component={Education12} />
          <Stack.Screen name="Education13" component={Education13} />
          <Stack.Screen name="Education14" component={Education14} />
          <Stack.Screen name="Education15" component={Education15} />
          <Stack.Screen name="Education16" component={Education16} />
          <Stack.Screen name="Education17" component={Education17} />
          <Stack.Screen name="CommunityDiscussion3" component={CommunityDiscussion3} />
          <Stack.Screen name="CommunityDiscussion4" component={CommunityDiscussion4} />
          <Stack.Screen name="CommunityDiscussion5" component={CommunityDiscussion5} />
          <Stack.Screen name="CommunityDiscussion7" component={CommunityDiscussion7} />
          <Stack.Screen name="CommunityDiscussionSlider" component={CommunityDiscussionSlider} />
          <Stack.Screen name="SleepingHabits" component={SleepingHabits} />
          <Stack.Screen name="ExerciseTherapy" component={ExerciseTherapy} />
          <Stack.Screen name="Conditions" component={Conditions} />
          <Stack.Screen name="MoreCondition2" component={MoreCondition2} />
          <Stack.Screen name="EmotionalAniexty" component={EmotionalAniexty} />
          <Stack.Screen name="TRIGGERS" component={TRIGGERS} />
          <Stack.Screen name="TriggerTrends" component={TriggerTrends} />
          <Stack.Screen name="TriggersStrongWinds" component={TriggersStrongWinds} />
          <Stack.Screen name="myJournals36" component={myJournals36} />
          <Stack.Screen name="myJournals37" component={myJournals37} />

          <Stack.Screen name="Frame3" component={Frame3} />
          <Stack.Screen name="Frame4" component={Frame4} />
          <Stack.Screen name="Frame15" component={Frame15} />
          <Stack.Screen name="Frame17" component={Frame17} />
          <Stack.Screen name="Frame18" component={Frame18} />
          <Stack.Screen name="Frame19" component={Frame19} />
          <Stack.Screen name="Frame21" component={Frame21} />
          <Stack.Screen name="Frame23" component={Frame23} />
          <Stack.Screen name="Frame24" component={Frame24} />
          <Stack.Screen name="Frame26" component={Frame26} />
          <Stack.Screen name="Frame27" component={Frame27} />
          <Stack.Screen name="Frame29" component={Frame29} />
          <Stack.Screen name="Frame30" component={Frame30} />
          <Stack.Screen name="Frame32" component={Frame32} />
          <Stack.Screen name="Frame33" component={Frame33} />
          <Stack.Screen name="Frame34" component={Frame34} />
          <Stack.Screen name="Frame35" component={Frame35} />
          <Stack.Screen name="Frame38" component={Frame38} />
          <Stack.Screen name="Frame39" component={Frame39} />
          <Stack.Screen name="Frame41" component={Frame41} />
          <Stack.Screen name="teamSearch" component={teamSearch} />
          <Stack.Screen name="MoreConditions" component={MoreConditions} />
          <Stack.Screen name="ConditionsSelect" component={ConditionsSelect} />

        </Stack.Navigator>
      </NavigationContainer>
    );

  }
  const userVerifyStack = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Drawer'>
          <Stack.Screen name="Drawer" component={Drawerfunc} />
          <Stack.Screen name="Frame1" component={Frame1} />
          <Stack.Screen name="Frame2" component={Frame2} />
          <Stack.Screen name="BodyPainDetector" component={BodyPainDetector} />
          <Stack.Screen name="Frame36" component={Frame36} />
          <Stack.Screen name="Education10" component={Education10} />
          <Stack.Screen name="Education11" component={Education11} />
          <Stack.Screen name="Education12" component={Education12} />
          <Stack.Screen name="Education13" component={Education13} />
          <Stack.Screen name="Education14" component={Education14} />
          <Stack.Screen name="Education15" component={Education15} />
          <Stack.Screen name="Education16" component={Education16} />
          <Stack.Screen name="Education17" component={Education17} />
          <Stack.Screen name="CommunityDiscussion3" component={CommunityDiscussion3} />
          <Stack.Screen name="CommunityDiscussion4" component={CommunityDiscussion4} />
          <Stack.Screen name="CommunityDiscussion5" component={CommunityDiscussion5} />
          <Stack.Screen name="CommunityDiscussion7" component={CommunityDiscussion7} />
          <Stack.Screen name="CommunityDiscussionSlider" component={CommunityDiscussionSlider} />
          <Stack.Screen name="SleepingHabits" component={SleepingHabits} />
          <Stack.Screen name="ExerciseTherapy" component={ExerciseTherapy} />
          <Stack.Screen name="Conditions" component={Conditions} />
          <Stack.Screen name="MoreCondition2" component={MoreCondition2} />
          <Stack.Screen name="EmotionalAniexty" component={EmotionalAniexty} />
          <Stack.Screen name="TRIGGERS" component={TRIGGERS} />
          <Stack.Screen name="TriggerTrends" component={TriggerTrends} />
          <Stack.Screen name="TriggersStrongWinds" component={TriggersStrongWinds} />
          <Stack.Screen name="myJournals36" component={myJournals36} />
          <Stack.Screen name="myJournals37" component={myJournals37} />

          <Stack.Screen name="Frame3" component={Frame3} />
          <Stack.Screen name="Frame4" component={Frame4} />
          <Stack.Screen name="Frame15" component={Frame15} />
          <Stack.Screen name="Frame17" component={Frame17} />
          <Stack.Screen name="Frame18" component={Frame18} />
          <Stack.Screen name="Frame19" component={Frame19} />
          <Stack.Screen name="Frame21" component={Frame21} />
          <Stack.Screen name="Frame23" component={Frame23} />
          <Stack.Screen name="Frame24" component={Frame24} />
          <Stack.Screen name="Frame26" component={Frame26} />
          <Stack.Screen name="Frame27" component={Frame27} />
          <Stack.Screen name="Frame29" component={Frame29} />
          <Stack.Screen name="Frame30" component={Frame30} />
          <Stack.Screen name="Frame32" component={Frame32} />
          <Stack.Screen name="Frame33" component={Frame33} />
          <Stack.Screen name="Frame34" component={Frame34} />
          <Stack.Screen name="Frame35" component={Frame35} />
          <Stack.Screen name="Frame38" component={Frame38} />
          <Stack.Screen name="Frame39" component={Frame39} />
          <Stack.Screen name="Frame41" component={Frame41} />
          <Stack.Screen name="teamSearch" component={teamSearch} />
          <Stack.Screen name="MoreConditions" component={MoreConditions} />
          <Stack.Screen name="ConditionsSelect" component={ConditionsSelect} />

        </Stack.Navigator>
      </NavigationContainer>
    );

  }

  const renderNavigation = () => {

    if (isUserExit) {
      return userVerifyStack();
    }

    return useNotVerifyStack();
  }

  return renderNavigation();


}


function Drawerfunc() {
  return (

    <Drawer.Navigator initialRouteName="Profile" drawerContentOptions={{
      activeTintColor: 'red'
    }} drawerContent={props => <SideMenu  {...props} />} >
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="SpecialistDr" component={SpecialistDr} />

      <Drawer.Screen name="CommunityDiscussion1" component={CommunityDiscussion1} />
      <Drawer.Screen name="Myjournal" component={Myjournal} />
      <Drawer.Screen name="PainEducation" component={PainEducation} />

    </Drawer.Navigator>

  );
}






export default Router;