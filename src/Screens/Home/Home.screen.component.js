//@flow

import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {Styles} from './Home.screen.style';
import {IMAGES} from '../../Themes';
import {NavigationProp} from '@react-navigation/native';
import {keyExtractor, renderScreen} from '../../Utils/Helpers.util';
import {Routes} from '../../Navigations/Routes';

type Props = {
  navigation: NavigationProp,
  count: number,
  increaseCount: Function,
  decreaseCount: Function,
};

const HomeScreen = ({
  navigation,
  count,
  increaseCount,
  decreaseCount,
}: Props) => {
  const renderHeader = () => {
    return (
      <View style={Styles.header}>
        <Image style={Styles.banner} source={IMAGES.banner} />
      </View>
    );
  };

  const renderContent = () => {
    const data = [
      {
        title: 'Kartu 1',
        imageUrl:
          'https://storage.googleapis.com/fastwork-static/5dac4749-0e32-4e99-8f2e-4ec60651c418.jpg',
      },
      {
        title: 'Kartu 2',
        imageUrl:
          'https://storage.googleapis.com/fastwork-static/5dac4749-0e32-4e99-8f2e-4ec60651c418.jpg',
      },
      {
        title: 'Kartu 3',
        imageUrl:
          'https://storage.googleapis.com/fastwork-static/5dac4749-0e32-4e99-8f2e-4ec60651c418.jpg',
      },
    ];

    return (
      <View style={Styles.content}>
        <View style={Styles.products}>
          <FlatList
            data={data}
            renderItem={renderCardItem}
            keyExtractor={keyExtractor}
            horizontal
          />
        </View>
        <View style={Styles.textSection}>
          <Text
            onPress={() => increaseCount()}
            onLongPress={() => decreaseCount()}
            style={Styles.text}>
            {'count: ' + count}
          </Text>
        </View>
      </View>
    );
  };

  const renderCardItem = ({item}) => {
    const imageCard = {uri: item.imageUrl};

    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate(Routes.DetailScreen)}>
        <View style={Styles.card}>
          <Image style={Styles.imageCard} source={imageCard} />
          <Text style={Styles.textCard}>{item.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderData = [renderHeader, renderContent];

  return (
    <View style={Styles.container}>
      <FlatList
        data={renderData}
        renderItem={renderScreen}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default HomeScreen;
