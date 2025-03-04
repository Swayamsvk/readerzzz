import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//Main Component Logic
const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8A67E5" />
      <LinearGradient colors={['#8A67E5', '#D4A1E8']} style={styles.gradient}>
        <View style={styles.content}>
          <Image
            source={require('../../../../assets/images/Splash/BookIcon/bookIcon.png')}
          />
          <Text style={styles.text}>Readerzz</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

//Main Styling Logic
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Splash;
