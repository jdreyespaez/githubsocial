import React from 'react';
import ToolBar from '../toolBar';
import {
  View,
  WebView,
  StyleSheet,
} from 'react-native';

class Web extends React.Component{
  backToPage(){
    this.props.navigator.pop();
  }
  render(){
    return(
      <View style={styles.mainContainer}>
        <View style={styles.navBar}>
          <ToolBar onPress={this.backToPage.bind(this)} />
        </View>
        <View style={styles.container}>
          <WebView url={this.props.url} />
        </View>
      </View>
    )
  }
};

Web.propTypes = {
  url: React.PropTypes.string.isRequired
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  navBar: {
    height: 50,
    borderBottomColor: 'rgba(21, 21, 21, 0.3)',
    borderBottomWidth: 0.3,
  },
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  }
});

module.exports = Web;
