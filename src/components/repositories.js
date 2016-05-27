import React from 'react';
import Badge from './badge';
import Separator from './helpers/separator';

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
    console.log('La URL es: ', url);
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
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
};

  // S6.P5 Garantizamos con propTypes que se pase la info
  Repositories.propTypes = {
    userInfo: React.PropTypes.object.isRequired,
    repos: React.PropTypes.array.isRequired
  };

var styles = StyleSheet.create({
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
