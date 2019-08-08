/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <Header headerText={'Albums'}/>
                <AlbumList/>
            </View>
        );
    }
};

/*import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class App extends Component {
  state = {
      placeName: '',
      places: []
  };

placeAdderHandler = placeName => {
    this.setState(prevState => {
        return{
            places: prevState.places.concat(prevState.placeName)
        };
    });
};

  render() {

      return (
          <View style={styles.container}>
              <PlaceInput onPlaceAdded ={this.placeAdderHandler} />
              <PlaceList places={this.state.places} />
          </View>

      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});*/