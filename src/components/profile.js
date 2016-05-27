import React from 'react';
import Badge from './badge';

import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

class Profile extends React.Component{
  // S5.P6 Formateando estilos para public_repos y Mayúsculas
  getRowTitle(user, item){
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }

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
            <Text style={styles.rowTitle}> {this.getRowTitle(userInfo, item)} </Text>
            <Text style={styles.rowContent}> {userInfo[item]} </Text>
          </View>
        </View>
      }
    });
    <ScrollView style={styles.container}>
      <Badge userInfo={this.props.userInfo} />
      {list}
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
