import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Keyboard, Text } from 'react-native';
import PrevisaoItem from './Components/PrevisaoItem'

export default function App() {
  const endPoint = "https://api.openweathermap.org/data/2.5/weather?lang=pt&units=metric&q=";
  const apiKey = "745ee7efd98a4dc192f00a849d60f2ba";

  const[cidade, setCidade] = useState('');
  const[previsoes, setPrevisoes] = useState([]);

  const obtemPrevisoes =()=>{
    setPrevisoes();
    const target = endPoint + cidade + "&appid=" + apiKey;
    fetch(target)
    .then((dados)=>dados.json())
    .then((dados)=>{
      setPrevisoes([dados])
      Keyboard.dismiss()
    });
  }

  const capturarCidade = (cidade) =>{
    setCidade(cidade);
  }

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button
          title="Ok"
          onPress={obtemPrevisoes}
        />
      </View>
      <FlatList
        data={previsoes}
        renderItem={
          previsao=>(
          <PrevisaoItem previsao={previsao}/>
          //<Text>{JSON.stringify(previsao)}</Text>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:40,
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
  },
  nomeCidade:{
    padding:10,
    borderBottomColor:'#BB96F3',
    borderBottomWidth:2,
    textAlign:'left',
    flexGrow:0.9
  },
  entrada:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:8
  }
});
