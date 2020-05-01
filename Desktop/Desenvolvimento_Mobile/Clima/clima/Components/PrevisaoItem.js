import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Cartao from './Cartao';

const PrevisaoItem=(props)=>{
  return (
    <Cartao estilos={estilos.cartao}>
        <View style={estilos.tela}>
            <Image
                style={estilos.imagem}
                source={{uri:"https://openweathermap.org/img/wn/"+
                props.previsao.item.weather[0].icon+".png"}}
            />
            <View>
                <View style={estilos.primeiraLinha}>
                    <Text style={estilos.valor}>Nascer do sol:
                    {new Date(props.previsao.item.sys.sunrise * 1000).toLocaleTimeString()}</Text>
                </View>
                <View style={estilos.primeiraLinha}>
                    <Text style={estilos.valor}>Por do sol:
                    {new Date(props.previsao.item.sys.sunset * 1000).toLocaleTimeString()}</Text>
                </View>
                <View style={estilos.segundaLinha}>
                    <Text style={estilos.valor}>Sensação térmica:
                    {props.previsao.item.main.feels_like+"\u00B0"}</Text>
                </View>
                
            </View>
        </View>
    </Cartao>
  );
}
const estilos = StyleSheet.create({
    cartao:{
        marginBottom:5
    },
    tela:{
        flexDirection:'row'
    },
    imagem:{
        width:50,
        height:50
    },segundaLinha:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:4,
        borderTopWidth:1,
        borderTopColor:'#DDD'
    },
    primeiraLinha:{
        justifyContent:'center',
        flexDirection:'row'
    },
    valor:{
        marginHorizontal:2
    }
});

export default PrevisaoItem;
