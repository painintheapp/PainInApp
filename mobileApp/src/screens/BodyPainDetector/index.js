
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, Platform, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import ImageMapper from 'react-native-image-mapper';
import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const setting = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')

const App = ({ navigation }) => {

  const [selectedAreaId, setSelectedAreaId] = useState([]);
  const [IsModalVisible, setIsModalVisible] = useState(false)
  const [SelectedTex, setSelectedTex] = useState('')


  const Oval = () => {
    return <View style={styles.oval} />;
  };

  const mapperAreaClickHandler = async (item, idx, event) => {
    const currentSelectedAreaId = selectedAreaId;
    if (Array.isArray(currentSelectedAreaId)) {
      const indexInState = currentSelectedAreaId.indexOf(item.id);
      if (indexInState !== -1) {

        console.log('Removing id', item.id);
        setSelectedAreaId([
          ...currentSelectedAreaId.slice(0, indexInState),
          ...currentSelectedAreaId.slice(indexInState + 1),
        ]);
      } else {

        console.log('Setting Id', item.id);
        // if (item.id == 7) {
        //   return (
        //     <View style={{
        //       justifyContent: 'space-between', alignItems: 'center',
        //     }}>
        //       <Text>Left Foot</Text>
        //       <View style={{ width: '20%', height: 40, backgroundColor: Color.White, justifyContent: 'center', alignItems: 'center', }}>
        //         <TextInput onChangeText={(text) => setSelectedTex(text)} />
        //       </View>

        //     </View>
        //   )
        // }
        setSelectedAreaId([...currentSelectedAreaId, item.id]);
      }
    } else {
      if (item.id === currentSelectedAreaId) {
        setSelectedAreaId(null);
      } else {
        setSelectedAreaId(item.id);
      }
    }
  };

  return (


    <View style={{ flex: 1, alignItems: 'center', backgroundColor: Color.backGround }}>
      <StatusBar />
      <HeaderView
        backgroundColor={Color.darkBlue}
        text='BODY LOCATOR'
        fontSize={30}
        textColor={Color.White}
        onPress={() => navigation.navigate('EmotionalAniexty')}
        onPress1={() => navigation.goBack()}
        image={backArrow}
        image2={setting}
      />
      {/* <ScrollView> */}
      <View style={{ flex: 1, flexDirection: 'row', }}>

        <ImageMapper
          imgHeight={450}
          imgWidth={244}
          imgSource={require('../../components/images/Front.png')}
          imgMap={RECTANGLE_MAP}
          onPress={
            (item, idx, event) =>
              mapperAreaClickHandler(item, idx, event)
          }
          containerStyle={{ top: 10 }}
          selectedAreaId={selectedAreaId}
          multiselect
        />
        <ImageMapper
          imgHeight={450}
          imgWidth={244}
          imgSource={require('../../components/images/Back.png')}
          imgMap={RECTANGLE_MAP}
          onPress={
            (item, idx, event) =>
              mapperAreaClickHandler(item, idx, event)
          }
          containerStyle={{ top: 10 }}
          selectedAreaId={selectedAreaId}
          multiselect
        />
      </View>


      {/* <ImageMapper
          imgHeight={551}
          imgWidth={244}
          imgSource={{
            uri:
              'https://raw.githubusercontent.com/msalo3/react-native-image-mapper/master/Examples/human.png',
          }}
          imgMap={RECTANGLE_MAP}
          onPress={
            (item, idx, event) =>
              mapperAreaClickHandler(item, idx, event)
          }
          containerStyle={{ top: 10 }}
          selectedAreaId={selectedAreaId}
          multiselect
        /> */}
      {/* </ScrollView> */}
      <View style={{ alignSelf: 'flex-end', right: 40, bottom: 30 }}>
        <TouchableOpacity activeOpacity={.7} onPress={() =>

          setIsModalVisible(true)
        } >
          <Text style={{ color: 'green' }}>Next</Text>
        </TouchableOpacity>
      </View>

      <Modal
        onRequestClose={() => setIsModalVisible(!IsModalVisible)}
        visible={IsModalVisible}
        transparent={true}
        animationType='slide'
        style={styles.buttonModal}>
        <TouchableOpacity activeOpacity={.7} onPress={() => setIsModalVisible(false)} style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', }}>
          <TouchableWithoutFeedback>
            <View style={styles.View}>
              <Text style={{ fontSize: 15 }}>MORE LOCATIONS OF PAIN IN THE</Text>
              <TouchableOpacity activeOpacity={.7} onPress={() => setIsModalVisible(false)} style={[styles.button, { marginTop: 20, }]}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>YES</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={.7} onPress={() => { }} style={styles.button}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>NO</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>

  );

};
const styles = StyleSheet.create({

  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonModal: {
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,.1)'

  },
  oval: {
    width: 20,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
    transform: [{ rotate: "-20deg" }],
  },
  View: {
    width: '100%',
    height: '20%',

    backgroundColor: 'white',
    alignItems: 'center',
    padding: 22,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  }
})

export default App;
const RECTANGLE_MAP = [

  {
    id: '0',
    name: 'Left Foot',
    shape: 'circle',
    radius: 25,
    x2: 110,
    y2: 540,
    x1: 85,
    y1: 520,
    fill: 'red',
  },
  {
    id: '1',
    name: 'Right Foot',
    shape: 'circle',
    x2: 155,
    y2: 540,
    radius: 25,
    x1: 125,
    y1: 520,
    fill: 'red',
  },
  {
    id: '2',
    name: 'Left Knee',
    shape: 'circle',
    x2: 110,
    y2: 400,
    x1: 80,
    radius: 25,
    y1: 370,
    fill: 'red',
  },
  {
    id: '3',
    name: 'Right Knee',
    shape: 'circle',
    x2: 155,
    radius: 25,
    y2: 400,
    x1: 125,
    y1: 370,
    fill: 'red',
  },
  {
    id: '4',
    name: 'Stomach',
    shape: 'circle',
    x2: 125,
    radius: 50,
    y2: 40,
    x1: 90,
    y1: 165,
    fill: 'red',
  },
  {
    id: '5',
    name: 'Left Hand',
    shape: 'circle',
    x2: 100,
    y2: 315,
    radius: 25,
    x1: 15,
    y1: 270,
    fill: 'red',
  },
  {
    id: '6',
    name: 'Right Hand',
    shape: 'circle',
    x2: 235,
    y2: 315,
    x1: 200,
    y1: 270,
    radius: 25,
    fill: 'red',
  },
  {
    id: '7',
    name: 'Face',
    shape: 'circle',
    x2: 145,
    y2: 70,
    x1: 105,
    y1: 40,
    radius: 25,
    fill: 'red',
  },
  {
    id: '8',
    name: 'Head',
    shape: 'circle',
    x2: 145,
    y2: 30,
    x1: 105,
    y1: 0,
    radius: 25,
    fill: 'red',
  },
  {
    id: '9',
    name: 'Left Arm',
    shape: 'circle',
    x2: 70,
    y2: 260,
    x1: 30,
    y1: 180,
    radius: 25,
    fill: 'red',
  },
  {
    id: '10',
    name: 'Right Arm',
    shape: 'circle',
    x2: 220,
    y2: 250,
    x1: 180,
    y1: 180,
    radius: 25,
    fill: 'red',
  },
  {
    id: '11',
    name: 'Right Thai',
    shape: 'circle',
    x2: 160,
    y2: 370,
    x1: 130,
    y1: 300,
    radius: 25,
    fill: 'red',
  },
  {
    id: '12',
    name: 'Left Thai',
    shape: 'circle',
    x2: 110,
    y2: 370,
    x1: 70,
    y1: 300,
    radius: 25,
    fill: 'red',
  },
  {
    id: '13',
    name: 'Left Knee Lower',
    shape: 'circle',
    x2: 155,
    y2: 500,
    x1: 130,
    y1: 450,
    radius: 25,
    fill: 'red',
  },
  {
    id: '14',
    name: 'Right Knee Lower',
    shape: 'circle',
    x2: 110,
    y2: 500,
    x1: 80,
    y1: 450,
    radius: 25,
    fill: 'red',
  },

  {
    id: '15',
    name: 'Left Chest',
    shape: 'circle',
    x2: 165,
    y2: 150,
    x1: 130,
    y1: 110,
    radius: 25,
    fill: 'red',
  },

  {
    id: '16',
    name: 'Right Chest',
    shape: 'circle',
    x2: 115,
    y2: 150,
    x1: 80,
    y1: 110,
    radius: 25,
    fill: 'red',
  },

];