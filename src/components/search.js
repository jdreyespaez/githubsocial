import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native';

var api = require('../utils/api');

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }
  handleChange(event){
      this.setState({
        username: event.nativeEvent.text
      });
    }
  handleSubmit(){
    this.setState({
      isLoading: true
    });
    console.log('SUBMIT', this.state.username);
    api.getBio(this.state.username)
      .then((res) => {
        if(res.message === 'Not Found'){
          this.setState({
            error: 'Usuario no encontrado',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            // El title no está funcionando
            title: res.name || "Seleccionar Opción",
            name: 'dashboard',
            passProps: {userInfo: res}
          });
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
      });
  }
  render(){
    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );
    return (
      <View style={styles.container}>
        <View style={[styles.toolbar]}>
          <Text style={[styles.textToolbar]}>Github Social App</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Buscar un usuario de Github</Text>
          <TextInput
            style={styles.searchInput}
            value={this.state.username}
            onChange={this.handleChange.bind(this)} />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white">
            <Text style={styles.buttonText}> BUSCAR </Text>
          </TouchableHighlight>
          <ActivityIndicatorIOS
            animating={this.state.isLoading}
            color="#111"
            size="large"></ActivityIndicatorIOS>
          {showErr}
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
    flex: 1,
  },
  toolbar: {
    flex: 2,
    flexDirection: 'row',

  },
  textToolbar: {
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
    fontSize: 28
  },
  mainContainer: {
    flex: 12,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#01c0aa'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
