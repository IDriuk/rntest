/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}>
        <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, width: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}