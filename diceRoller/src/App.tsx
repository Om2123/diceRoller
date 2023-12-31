import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import diceOne from '../assets/dice-six-faces-one.png';
import dice2 from '../assets/dice-six-faces-two.png';
import dice3 from '../assets/dice-six-faces-three.png';
import dice4 from '../assets/dice-six-faces-four.png';
import dice5 from '../assets/dice-six-faces-five.png';
import dice6 from '../assets/dice-six-faces-six.png';

type diceprop = PropsWithChildren<{imageUrl:ImageSourcePropType}>;

const Dice = (props:diceprop): JSX.Element => {
  // console.log(u);
  // console.log(sou);

  return (
    <View>
      <Image source={props.imageUrl} style={styles.diceImage} />
    </View>
  );
};

function App(): JSX.Element {
  const [imageUri, setImageUrl] = useState<ImageSourcePropType>(dice3);
  const handleDiceRoll = () => {
    let random = Math.floor(Math.random() * 6) + 1;

    switch (random) {
      case 1:
        setImageUrl(diceOne);
        break;
      case 2:
        setImageUrl(dice2);
        break;
      case 3:
        setImageUrl(dice3);
        break;
      case 4:
        setImageUrl(dice4);
        break;
      case 5:
        setImageUrl(dice5);
        break;
      case 6:
        setImageUrl(dice6);
        break;

      default:
        break;
    }
    const options = {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    };
    
    ReactNativeHapticFeedback.trigger("impactHard", options);
  };
  console.log(imageUri);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View >
          <Dice imageUrl={imageUri} />
          <Pressable onPress={handleDiceRoll}>
            <Text style={styles.btn}>Roll the dice ..</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  diceImage: {
    marginHorizontal:50,
    marginVertical:30,
    width: 200,
    height: 200,
  },
  container: {
    // flex:1,
      margin:50,
    // flex: 1,
    // flexDirection:"row",
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  btn: {
    
    fontSize:22,
    backgroundColor:"grey",
    paddingHorizontal:80,
    elevation:9,
    paddingVertical:8,
    color:"white",
    fontWeight:"900",
    margin:5,
  },
});

export default App;
