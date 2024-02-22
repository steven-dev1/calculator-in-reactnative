import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import Buttons from './components/Buttons';
import { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState('');
  const onPress = (e) => {
    const newScreen = screen.concat(e.state.value);
    setScreen(newScreen);
    console.log(e);
  }
  const deleteLastElement = () => {
    const newValue = screen.slice(0, screen.length - 1);
    setScreen(newValue)
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Calculadora</Text>
        <View style={styles.titleLine}></View>
      </View>
      <View style={styles.screenView}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#fff" }}>{screen}</Text>
      </View>
      <View style={styles.buttonsView}>
        <Buttons value="1" onPress={onPress}>1</Buttons>
        <Buttons value="1" onPress={onPress}>2</Buttons>
        <Buttons value="1" onPress={onPress}>3</Buttons>
        <Buttons value="1" onPress={onPress}>4</Buttons>
        <Buttons value="1" onPress={onPress}>5</Buttons>
        <Buttons value="1" onPress={onPress}>6</Buttons>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    textAlign: 'left',
    flex: 0.1,
    alignItems: 'start',
    width: '80%',
    height: 'auto',
    borderRadius: 4
  },
  titleText: {
    color: '#FF7629',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleLine: {
    width: 80,
    height: 3,
    backgroundColor: '#FF7629'
  },
  screenView: {
    height: 200,
    margin: 40,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
    // backgroundColor: '#FF7629',
    width: '80%',
  },
  buttonsView: {
    display: 'flex',
    flexDirection: 'row'
  },
  container: {
    color: 'red',
    flex: 3,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerView: {
    color: 'red',
    flex: 1,
    backgroundColor: '#222',
    maxHeight: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    padding: 30
  },
  innerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 30,
    minWidth: 200
  },
});
