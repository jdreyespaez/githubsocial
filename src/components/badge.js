import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

class Badge extends React.Component{
// S5.P2 Organizar la información que viene del API
  render (){
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: this.props.userInfo.avatar_url}} />
        <Text style={styles.name}> {this.props.userInfo.name} </Text>
        <Text style={styles.handle}> {this.props.userInfo.login} </Text>
      </View>
    )
  }
};

// S5.P3 Usar propTypes como verficación de userInfo

Badge.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#01c0aa',
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  }
});

module.exports = Badge;
