import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {NavigationParams, NavigationRoute} from 'react-navigation';

// eslint-disable-next-line no-undef

interface Props {
  navigation: NavigationStackProp<NavigationRoute, NavigationParams>;
}

// const DATA = ['HomePage', 'Props', 'Home'];

export default class HomePage extends React.Component<Props> {
  _renderItem = (item: {item: string; index: number}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.item}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title={'Go To MainPage Screen'}
          onPress={() => {
            console.log('Go To MainPage Screen');
            this.props.navigation.push('MainPage', {userId: '333999'});
          }}
        />
        <Button
          title={'Go To Profile Screen'}
          onPress={() => {
            console.log('Go To Profile Screen');
            this.props.navigation.push('ProfileScreen', {userId: '333999'});
          }}
        />
        <Button
          title={'Go To MobxPage Screen'}
          onPress={() => {
            this.props.navigation.push('MobxApp');
          }}
        />
        <Button
          title={'Go To OrientationPage Screen'}
          onPress={() => {
            this.props.navigation.push('OrientationPage', {userId: '333999'});
          }}
        />
        <Button
          title={'Go To VideoPage Screen'}
          onPress={() => {
            this.props.navigation.push('VideoPage');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    padding: 15,
    backgroundColor: 'gray',
  },
  slide: {
    height: 375,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 375,
    flex: 1,
  },
});
