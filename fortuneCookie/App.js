import React,{useState} from "react";
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';


export default function App(){
  const [img,setImg] = useState(require('./src/biscoito.png'))
  const [text,setText] = useState('')
  const [boleano,setboeleano]=useState(false);
  let textFrases=[
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ]
  
  function quebrarBiscoit(){
    if(boleano === true){
      alert('clique em reiniciar o biscoito!!');
    } 
    else if(boleano === false){
      let numeroAleatorio = Math.floor(Math.random()* textFrases.length)
      setImg(require('./src/biscoitoAberto.png'))
      setText(''+textFrases[numeroAleatorio]+'');
      setboeleano(true); 
    }
   
  }

  function reiniciarBiscoito(){
    setImg(require('./src/biscoito.png'))
    setText('');
    setboeleano(false);
  }

  return(

    <View style={style.container}>
      <Image
      style={style.styleCookie} 
      source={img}/>
      <Text style={style.styleText}>{text}</Text>
      <TouchableOpacity  style={style.button} onPress={quebrarBiscoit} >
        <View style={style.btnArea}>
          <Text style={style.textButton}>Quebrar o Biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={reiniciarBiscoito} 
      style={[style.button,{marginTop:11,borderColor:'#dd7b22',backgroundColor:'#FFEFD5'}]}>
        <View style={style.btnArea}>
          <Text style={[style.textButton,{color:'#dd7b22'}]}>Reiniciar o Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
      

  );
}

const style = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#DCDCDC'
    
  },
  styleCookie:{
    height: 200,
    width: 200
  },

  styleText:{
    fontSize:30,
    margin: 20,
    textAlign:'center',
    color: '#dd7b22',
    fontStyle:'italic',
  },
  button:{
    width: 240,
    height: 50,
    borderColor:'#dd7b22',
    borderWidth:3,
    borderRadius:25,
    
  },
  btnArea:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  textButton:{
    fontSize:20,
    color:'#dd7b22',

  }

})

