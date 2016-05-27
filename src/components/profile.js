import React from 'react';
import Badge from './badge';

import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

class Profile extends React.Component{
  render(){
    
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

module.exports = Profile;
