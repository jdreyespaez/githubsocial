import React from 'react';
import Badge from './badge';
import Separator from './helpers/separator';
import ToolBar from './toolBar';

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

  onPress = () => {
    this.props.navigator.pop();
  }

  render(){
    var userInfo = this.props.userInfo;
    var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    var list = topicArr.map((item, index) => {
      if(!userInfo[item]){
        return (
          <View key={index} />
        )
      } else {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}> {this.getRowTitle(userInfo, item)} </Text>
              <Text style={styles.rowContent}> {userInfo[item]} </Text>
            </View>
            <Separator />
          </View>
          // S5.P9. Incluir el helper/separator como un View
        )
      }
    });
    return (
      <View style={styles.mainContainer}>
        <View style={styles.navBar}>
          <ToolBar backToPage={this.onPress} />
        </View>
        <ScrollView style={styles.container}>
          <Badge userInfo={this.props.userInfo} />
          {list}
        </ScrollView>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  navBar: {
    height: 50,
  },
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
