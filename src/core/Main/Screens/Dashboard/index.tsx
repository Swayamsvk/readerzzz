import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import realm from '../../../../RealmDB/services/Database';
import {
  clearAllBooks,
  saveBooksToRealm,
} from '../../../../RealmDB/services/utils';
import {
  Header,
  SegmentedControl,
  TabSelection,
} from '../../../../common/components';

//Categories Data
const categories = ['All', 'Fantasy', 'Historical', 'Non-fiction '];

const Dashboard = () => {
  const [books, setBooks] = useState(realm.objects<String>('Book'));
  const [selectedCategory, setSelectedCategory] = useState<String>('All');
  const [recommended, setRecommended] = useState<Boolean>(false);

  useEffect(() => {
    //Select Category Logic
    if (selectedCategory === 'All') {
      clearAllBooks();
      saveBooksToRealm('all');
    } else if (selectedCategory === 'Fantasy') {
      clearAllBooks();
      saveBooksToRealm('fantasy');
    } else if (selectedCategory === 'Historical') {
      clearAllBooks();
      saveBooksToRealm('history');
    } else if (selectedCategory === 'Non-fiction') {
      clearAllBooks();
      saveBooksToRealm('nonfiction');
    }

    //Saving The books to realm db
    const booksListener = realm.objects('Book').addListener(() => {
      console.log('THESE ARE THE BOOKS', [...realm.objects('Book')]);
      setBooks([...realm.objects('Book')]);
    });
    return () => booksListener?.remove();
  }, [selectedCategory]);

  //Scroll Functionality for Book Selection ScrollView
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header headerTitle={'Discover'} />

      {/* Tab Selection */}
      <SegmentedControl
        tabStatus={recommended}
        leftSectionText={'Recommended'}
        leftSectionSubText={'based on your intrests'}
        rightSectionText={'Interests'}
        setLeftSection={setRecommended}
      />

      {recommended ? (
        <View>
          <View>
            {/* Category Filters */}
            <TabSelection
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.bookScrollViewSontainer}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}>
            {books.map((item, index) => (
              <View>
                <Image
                  source={{uri: item.coverImage}}
                  style={{width: 200, height: 300}}
                />
                <Text>{item.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View>
          <Text>Coming Soon</Text>
          <Ionicons name="search-outline" size={25} color="black" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  bookCard: {marginRight: 10, width: 200},
  bookImage: {width: '100%', height: 200, borderRadius: 10},
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  navItem: {alignItems: 'center'},
  navText: {fontSize: 12, marginTop: 5, color: '#888'},
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bookAuthor: {
    fontSize: 14,
    color: 'gray',
  },
  bookScrollViewSontainer: {
    marginTop: 21,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default Dashboard;
