import React from 'react';
import Badge from './badge';
import Separator from './helpers/separator';
import Web from './helpers/web';
import ToolBar from './toolBar';

import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class Repositories extends React.Component{
  // S6.P4.2 Incluir mensaje del URL que se muestra, por ahora
  openPage(url){
    // S7.P1 Crear la ruta en Navigator para mostrar el Web View
    this.props.navigator.push({
      name: 'web',
      passProps: {url}
    })
  }

  backToPage = () => {
    this.props.navigator.pop();
  }

  render(){
    // S6.P3 Vamos a mapear lo que viene de Repos
    // S6.P3.1 Mostrar vista vacía si no hay description
    var repos = this.props.repos;
    var list = repos.map((item, index) => {
      var desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View />
    return (
      <View key={index}>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            onPress={this.openPage.bind(this, repos[index].html_url)}
            underlayColor='transparent'>
            <Text style={styles.name}>{repos[index].name}</Text>
          </TouchableHighlight>
          <Text style={styles.stars}> Estrellas: {repos[index].stargazers_count} </Text>
          {desc}
        </View>
        <Separator />
      </View>
    )
  });
    // S6.P2 Incluimos el componente reusable Badge
    return (
      <View style={styles.mainContainer}>
        <View style={styles.navBar}>
          <ToolBar onPress={this.backToPage}/>
        </View>
        <ScrollView style={styles.container}>
          <Badge userInfo={this.props.userInfo} />
          {list}
        </ScrollView>
      </View>
    )
  }
};

  // S6.P5 Garantizamos con propTypes que se pase la info
  Repositories.propTypes = {
    userInfo: React.PropTypes.object.isRequired,
    repos: React.PropTypes.array.isRequired
  };

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
    flex: 1
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

module.exports = Repositories;
