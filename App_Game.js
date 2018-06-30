/**
 * Diego Prass
 * diego.prass@gmail.com
 * @diegoprass

modelo de teste de um app de jogo "pedea, papel e tesoura"
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Icone,
  Topo
} from 'react-native';

import Icone from './resources/img/like.png';
import Topo from './resources/img/likeOn.png';

type Props = {};
export default class App extends Component<Props> {


  render() {
    return (
      <View>

        <Topo />

        <View style={styles.painelAcoes}>

          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => { this.App('pedra'); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => { this.App('papel'); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={() => { this.App('tesoura'); }} />
          </View>

        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>

          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});
