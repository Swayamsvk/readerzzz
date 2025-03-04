import React, {Dispatch, FC, SetStateAction} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface SegmentedControlProps {
  tabStatus: Boolean;
  leftSectionText: String;
  rightSectionText: String;
  leftSectionSubText: String;
  setLeftSection: Dispatch<SetStateAction<Boolean>>;
}

//Main Component Logic
const SegmentedControl: FC<SegmentedControlProps> = ({
  tabStatus,
  leftSectionText,
  leftSectionSubText,
  rightSectionText,
  setLeftSection,
}) => {
  //------>Explain What every function does in detail<-----

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabSubContainer}>
        <TouchableOpacity
          style={tabStatus ? styles.activeTab : styles.inactiveTab}
          onPress={() => setLeftSection(true)}>
          <Text
            style={tabStatus ? styles.activeTabText : styles.inactiveTabText}>
            {leftSectionText}
          </Text>
          <Text
            style={
              tabStatus ? styles.activeTabSubText : styles.inactiveTabSubText
            }>
            {leftSectionSubText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tabStatus ? styles.inactiveTab : styles.activeTab}
          onPress={() => setLeftSection(false)}>
          <Text
            style={tabStatus ? styles.inactiveTabText : styles.activeTabText}>
            {rightSectionText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Styling Implementation
const styles = StyleSheet.create({
  tabContainer: {justifyContent: 'center', alignItems: 'center'},
  tabSubContainer: {
    flexDirection: 'row',
    backgroundColor: '#F7F7FF',
    padding: 8,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 8,
    width: 141,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveTab: {
    padding: 8,
    width: 141,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabText: {color: '#7C67E5', fontFamily: 'Lora-Regular', fontSize: 15},
  activeTabSubText: {
    color: '#7C67E5',
    fontFamily: 'Lora-Regular',
    fontSize: 10,
  },
  inactiveTabSubText: {
    color: '#888',
    fontFamily: 'Lora-Regular',
    fontSize: 10,
  },
  inactiveTabText: {color: '#888', fontFamily: 'Lora-Regular', fontSize: 15},
});

export {SegmentedControl};
