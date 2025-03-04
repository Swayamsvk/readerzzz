import React, {Dispatch, FC, SetStateAction} from 'react';
import {StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';

interface TabSelectionProps {
  categories: String[];
  selectedCategory: String;
  setSelectedCategory: Dispatch<SetStateAction<String>>;
}

//Main Component Logic
const TabSelection: FC<TabSelectionProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  //------>Explain What every function does in detail<-----

  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item: String) => item}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[
            styles.category,
            selectedCategory === item && styles.activeCategory,
          ]}
          onPress={() => {
            setSelectedCategory(item);
          }}>
          <Text
            style={
              selectedCategory === item
                ? styles.activeCategoryText
                : styles.categoryText
            }>
            {item}
          </Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
      style={styles.categoryContainer}
    />
  );
};

//Styling Implementation
const styles = StyleSheet.create({
  category: {
    padding: 8,
    marginHorizontal: 5,
    width: 93,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCategory: {borderBottomColor: '#7C67E5', borderBottomWidth: 3},
  categoryText: {color: '#888', fontFamily: 'Lora-Regular', fontSize: 14},
  activeCategoryText: {
    color: '#7C67E5',
    fontFamily: 'Lora-SemiBold',
    fontSize: 14,
  },
  categoryContainer: {marginTop: 21},
});

export {TabSelection};
