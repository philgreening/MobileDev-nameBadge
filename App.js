import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  return (
    /* Adds gradient background colour */
    <LinearGradient
    colors={['red', 'orange', 'yellow', 'green', 'indigo', 'violet']}
    start={{x: 0,y: 0}}
    end={{x: 1,y: 1}}
    style={styles.container} >

    <SafeAreaView style={styles.safeArea}>
        <Text style={styles.welcomeText}>Hello</Text>
        <Text style={styles.subtitleText}>my name is</Text>
        <View style={styles.box}>
          <Text style={styles.nameText}>Phil 🧛 (he/him) </Text>
        </View>
      </SafeAreaView >
    <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 75
  },
  welcomeText: {
    fontSize: 90,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
  },
  subtitleText: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
  },
  box: {
    width: '100%',
    height: '55%',
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    height: '100%',

  }
});
