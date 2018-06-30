/**
 * Diego Prass
 * diego.prass@gmail.com
 * @diegoprass
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
  TouchableOpacity,
  Input,
  Item,
  PlainInput,
  TextInput,
  AppRegistry,


} from 'react-native';

const width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {
  render() {


    const fotos = [
      {id: 1, usuario: 'Aluno 1'},
      {id: 2, usuario: 'Aluno 2'},
      {id: 3, usuario: 'Aluno 3'}];
    return (

      <FlatList style={styles.container}
      data={fotos}
      keyExtractor={item => String(item.id)}
      renderItem={ ({item}) =>
        <View>
          <View style={styles.cabecalho}>
           <Image source={require('./resources/img/logoF.png')}
                style={styles.fotoDePerfil} />
            <Text>{item.usuario}</Text>
          </View>
           <Image source={require('./resources/img/conteudo.png')}
              style={styles.foto} />

            <View style={styles.rodape}>
            <Text placeholder="Digite Comentario..."> 0 curtidas</Text>

            <TouchableOpacity onPress={() => console.warn('Foto curtida com Sucesso <3 !')}>
                <Image style={styles.botaoDeLike} source={require('./resources/img/likeOn.png')} />
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
  fotos: {
   fontWeight: 'bold'
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
