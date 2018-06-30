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
  TouchableOpacity

} from 'react-native';

const width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
     super(props)
     this.state = { count: 0 }
   }

   onPress = () => {
     this.setState({
       count: this.state.count+1
     })
   }


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
           <Image source={require('./resources/img/iconeF.png')}
                style={styles.fotoDePerfil} />
            <Text>{item.usuario}</Text>
          </View>
           <Image source={require ('./resources/img/conteudo.png')}
              style={styles.foto} />

            <View style={styles.rodape}>

            <TouchableOpacity onPress={(this.onPress) => console.warn('Foto curtida com Sucesso <3 !')}>
                <Image style={styles.botaoDeLike} source={require('./resources/img/like.png')} />
              </TouchableOpacity>
            </View>

            <View style={[styles.countContainer]}>
              <Text style={[styles.countText]}>
                { this.state.count !== 0 ? this.state.count: null}
              </Text>
            </View>

            <Text style=(styles.likes)> Curtidas </Text>
        </View>
      }
    />
    );
  }
}

/*
            <TouchableOpacity onPress={this._onPressButton}>
                <Image style={styles.button} source={require('./resources/img/like.png')} />
          </TouchableOpacity>
*/


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
  marginBottom: 10,
    width: 60,
    height: 60
  },
  likes: {
    fontWeight: 'bold'
}
  rodape: {
    margin: 10,
    alignItems: 'center'
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});
