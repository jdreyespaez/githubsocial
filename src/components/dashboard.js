import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

class Dashboard extends React.Component{
  // S4.P3: Estructura de los botones y colores con función
  makeBackground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1,
    }

    if(btn === 0){
      obj.backgroundColor = '#533C70';
    } else if (btn === 1){
      obj.backgroundColor = '#6386D8';
    } else {
      obj.backgroundColor = '#56C4B7';
    }

    return obj;
  }
  goToProfile(){
    console.log('Accediendo a Perfil...');
  }
  goToRepos(){
    console.log('Accediendo a Repositorios...');
  }
  goToNotes(){
    console.log('Accediendo a Notas...');
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={[styles.photoContainer, this.border('blue')]}>
          <Image source={{uri: this.props.userInfo.avatar_url}}
            style={styles.image}/>
        </View>
        <View style={[styles.buttonsContainer, this.border('green')]}>
          <TouchableHighlight
            style={this.makeBackground(0)}
            onPress={this.goToProfile.bind(this)}
            underlayColor="#88D4F5">
            <Text style={styles.buttonText}> Ver Perfil </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={this.makeBackground(1)}
            onPress={this.goToRepos.bind(this)}
            underlayColor="#88D4F5">
            <Text style={styles.buttonText}> Ver Repositorios </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={this.makeBackground(2)}
            onPress={this.goToNotes.bind(this)}
            underlayColor="#88D4F5">
            <Text style={styles.buttonText}> Ver Notas </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
  border(color) {
    return {
      borderColor: color,
      borderWidth: 1,
    }
  }
};

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  photoContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

module.exports = Dashboard;
