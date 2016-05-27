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
    var userInfo = this.props.userInfo;
    var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    var list = topicArr.map((item, index) => {
      // Lo que está vacío. No todos lo completan igual su gitHub.
      if(!userInfo[item]){
        return <View key={index} />
      } else {
        <View key={index}>
          <View style={styles.rowContainer}>
            <Text style={styles.rowTitle}> /* Aquí irá Company o Location */ </Text>
            <Text style={styles.rowContent}> {userInfo[item]} </Text>
          </View>
        </View>
      }
    });
    <ScrollView style={styles.container}>
      <Badge userInfo={this.props.userInfo} />
    </ScrollView>
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
