import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { carregaTopo } from '../../../servicos/carregaDados';
import logo from '../../../../assets/logo.png';

export default function Topo () {
    const [headerInfo, setheaderInfo] = useState({});

    useEffect(() => {
        // Chamando a função para popular o estado:
        setheaderInfo(carregaTopo());
    });

    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{headerInfo.boasVindas}</Text>
        <Text style={estilos.legenda}>{headerInfo.legenda}</Text>
      </View>
    );
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: "#F6F6F6",
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
    color: '#464646'
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3'
  },
});
