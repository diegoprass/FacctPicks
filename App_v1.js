/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity

} from 'react-native';

const width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {
  render() {
    const fotos = [
      {id: 1, usuario: 'Leao'},
      {id: 2, usuario: 'Tigre'},
      {id: 3, usuario: 'Pantera'}];

    return (

      <FlatList style={styles.container}
      data={fotos}
      keyExtractor={item => String(item.id)}
      renderItem={ ({item}) =>
        <View>
          <View style={styles.cabecalho}>
           <Image source={require('./resources/img/lion.jpg')}
                style={styles.fotoDePerfil} />
            <Text>{item.usuario}</Text>
          </View>
           <Image source={require('./resources/img/lion.jpg')}
              style={styles.foto} />

            <View style={styles.rodape}>
            <TouchableOpacity onPress={() => console.warn('Foto curtida com Sucesso <3 !')}>
                <Image style={styles.botaoDeLike} source={require('./resources/img/like.png')} />
              </TouchableOpacity>
            </View>
        </View>
      }
    />
    );
  }
}

/*   <Image source={require('./resources/img/lion.jpg')}
      keyExtractor={item => String(item.id)}
*/

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width:40, height:40
  },
  foto: {
    width:width,
    height:width
  },
  botaoDeLike: {
    width: 60,
    height: 60
  },
  rodape: {
    margin: 10,
    alignItems: 'center'
  },
});
