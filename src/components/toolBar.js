import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class ToolBar extends React.Component{
  render (){
    console.log(this.props)
    return (
      <View style={styles.toolBar}>
        <View style={styles.backButton}>
          <TouchableHighlight
            underlayColor={'white'}
            style={[styles.buttonArea]}
            onPress={this.onBackPress.bind(this)}>
            <Text style={styles.textToolBar}>Atrás</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.title]}>
          <Text style={styles.textToolBarTitle}>Gitapp</Text>
        </View>
        <View style={[styles.backButton]}>
        </View>
      </View>
    )
  }
  onBackPress(){
      this.props.onPress();
  }
  border(color) {
    return {
      borderColor: color,
      borderWidth: 1,
    }
  }
};

var styles = StyleSheet.create({
  toolBar: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  textToolBar: {
    fontSize: 14
  },
  textToolBarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    flex: 5,
    alignItems: 'center'
  },
  buttonArea: {
    paddingBottom: 15,
    paddingRight: 10
  },
  backButton: {
    flex: 1,
    alignItems: 'center',
  },
});

module.exports = ToolBar;
