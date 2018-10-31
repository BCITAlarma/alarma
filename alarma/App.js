import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from 'react-redux';
import Thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import combine from './redux/combine';
import Nav from './comps/Nav';

const store = createStore(
  combine,
  applyMiddleware(
    Thunk
  )
)


export default class App extends React.Component {
  render() {
    return (
   
      <Provider store={store}>
        <View style={styles.container}>
          <Nav />
        </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
