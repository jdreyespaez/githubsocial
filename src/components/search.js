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
  // S2.P1: Incluir el constructor
  constructor(props){
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }
  // S2.P3: función que actualiza el TextInput
  handleChange(event){
      this.setState({
        username: event.nativeEvent.text
      });
    }
  // S2.P5: Función handleSubmit
  handleSubmit(){
    // (i) actualizar el spinner de indicatorIOS,
    this.setState({
      isLoading: true
    });
    console.log('SUBMIT', this.state.username);
    // (ii) pedir datos de Github,
    api.getBio(this.state.username)
      .then((res) => {
        if(res.message === 'Not Found'){
          this.setState({
            error: 'User not found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
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
    // (iii) Nos redirigirá a la siguiente vista con la información
    // que se pidió de Github.
  }
  // S2.P2: Modificar UI e incluir el cambio de state
  render(){
    return (
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
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 30,
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
