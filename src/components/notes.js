import React from 'react';
import Api from '../utils/api';
import Separator from './helpers/separator';
import Badge from '/badge';

import {
  View,
  Text,
  ListView,
  TextInput,
  StyleSheet,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

class Notes extends React.Component{
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.notes),
      note: '',
      error: ''
    }
  }
  handleChange(e){
    this.setState({
      note: e.nativeEvent.text
    });
  }
  handleSubmit(){
    var note = this.state.note;
    this.setState({
      note: ''
    })

    Api.addNote(this.props.userInfo.login, note)
      .then((data) => {
        Api.getNotes(this.props.userInfo.login)
          .then((data) => {
            this.setState({
              dataSource: this.ds.cloneWithRows(data);
            })
          })
      }).catch((err) => {
        console.log('Falló el request', err);
        this.setState({error})
      });
  }
  renderRow(rowData){
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData} </Text>
        </View>
        <Separator />
      </View>
    )
  }
  footer(){
    return (
      <View style={styles.footContainer}>
        <TextInput
          style={styles.searchInput}
          value={this.state.note}
          onChange={this.handleChange.bind(this)}
          placeholder="Nueva Nota"
          />
        // S8.P4 Incluir el botón que maneja el evento touch
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> Enviar </Text>
        </TouchableHighlight>
      </View>
    )
  }
  render() {
    <View style={styles.container}>
      <ListView
        dataSource={this.state.dataSource}
        render={this.renderRow}
        renderHeader={() => <Badge userInfo={this.props.userInfo} /> }
        />
      {this.footer()}
    </View>
  }
}

Notes.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  notes: React.PropTypes.object.isRequired
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  button: {
    height: 60,
    backgroundColor: '#48BBEC',
    flex: 3,
    alignItems: 'center'
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 10
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

module.exports = Notes;
