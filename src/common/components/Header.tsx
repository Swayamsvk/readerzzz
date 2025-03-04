import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface HeaderProps {
  headerTitle: String;
}

//Main Component Logic
const Header: FC<HeaderProps> = ({headerTitle}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{headerTitle}</Text>
    </View>
  );
};

//Styling Implementation
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  title: {fontSize: 24, fontWeight: 'bold', fontFamily: 'Lora-SemiBold'},
});

export {Header};
