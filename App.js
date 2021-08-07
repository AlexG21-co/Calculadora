/*O useState  verfica se a informação esta */
import  React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from'react-native';

export default function App(){
  /* Criando variavel para guardar o valor da variaveis, alem de ver os estado(vazio,chei)*/
  const[n1,setn1] = useState('');
  const[n2,setn2]= useState('');
  /*Função de soma*/
  function soma(){
    /*Convertando para número */
    const res = parseFloat(n1) + parseFloat(n2);
    /*Mostrar resultado */
    alert('O resultado da Soma foi:'+res);
  }
  function subtrair(){
    /*Convertando para número */
    const res = parseFloat(n1) - parseFloat(n2);
    /*Mostrar resultado */
    alert('O resultado da Subtração foi:'+res);
  }
  function mutiplicar(){
    /*Convertando para número */
    const res = parseFloat(n1) * parseFloat(n2);
    /*Mostrar resultado */
    alert('O resultado da Mutiplicação foi:'+res);
  }
  function dividir(){
    /*Convertando para número */
    const res = parseFloat(n1) / parseFloat(n2);
    /*Mostrar resultado */
    alert('O resultado da Divisão foi:'+res);
  }
  return(
    <View style={estilo.container}>
     <Text style={estilo.titulo}>Somando Valores</Text>

    <TextInput style={estilo.input} value={n1} keyboardType='numeric' onChangeText={(n1)=> setn1(n1)} placeholder="Digite um valor"/>
    <TextInput style={estilo.input} value={n2} keyboardType='numeric' onChangeText={(n2)=>setn2(n2)}  placeholder="Digite um valor"/>

    <TouchableOpacity style={estilo.btn} onPress={soma}>
    <Text style={estilo.txtbtn}>Somar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={estilo.btn} onPress={subtrair}>
    <Text style={estilo.txtbtn}>Subtrair</Text>
    </TouchableOpacity>

    <TouchableOpacity style={estilo.btn} onPress={mutiplicar}>
    <Text style={estilo.txtbtn}>Mutiplicar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={estilo.btn} onPress={dividir}>
    <Text style={estilo.txtbtn}>Dividir</Text>
    </TouchableOpacity>

    </View>   
  );
}


const estilo= StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  backgroundColor:'#DCDCDC',
},
input:{
backgroundColor:'#778899',
marginLeft:35,
marginRight:35,
marginBottom:15,
padding:10,
borderRadius:15,
fontSize:20,
},
titulo:{
fontSize:30,
marginTop:60,
marginBottom:30,
color:'#00FA9A',
textAlign:'center',
},
btn:{
justifyContent:'center',
backgroundColor:'#FF6347',
margin:20,
padding:10,
borderRadius:10,
textAlign:'center',
},
txtbtn:{
textAlign:'center',
}
});