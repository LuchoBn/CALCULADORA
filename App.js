<<<<<<< HEAD
//EXEMPLO react mobile 2
import React, { useState } from 'react'; //hooks, altera valores en tempo real
import { ScrollView, Text,TextInput, StyleSheet, Button } from 'react-native';


const App = () => {   //arrow function
  const [numero01, setNumero01] = useState('');
  const [numero02, setNumero02] = useState('');
  const [resultado, setResultado] = useState(null);


  const somar = () => {
    const soma = parseFloat(numero01) + parseFloat(numero02);
    setResultado(soma)
  }
  return (
    <ScrollView style={styles.corpo}>
    <Text style={styles.titulo}>CALCULADORA</Text>
    <TextInput style={styles.input} keyboardType="numeric" placeholder="Primero numero" value={numero01} onChangeText={setNumero01} />
    <TextInput style={styles.input} keyboardType="numeric" placeholder="Segundo numero" value={numero02} onChangeText={setNumero02} />


    <Button title="CALCULAR" onPress={somar} />
    {resultado !== null && <Text style={styles.resultado}>RESULTADO: {resultado} </Text>}
    </ScrollView>
  );
};
=======
import React, { useState } from 'react'; //hooks, altera valores en tempo real
import { Scrollview, Text,Textinput, StyleSheet, Button } from 'react-native';

const App = () => {   //arrow function
  const [numero01, setNumero01] = useState ('');
  const [numero02, setNumero02] = useState ('');
  const [resultado, setResultado] = useState (null);

  const somar = () => {
    const soma = parseFloat(numero01)+parseFloat(numero02);
    setResultado(soma)
  }
  return (
    <Scrollview style={styles.corpo}>
    <Text style={styles.titulo}>CALCULADORA</Text>
    <Textinput style={styles.imput} keyboardtype="numeric" placeholder="Primero numero" value={numero01} onChangeText = {setNumero01}/>
    <Textinput style={styles.imput} keyboardtype="numeric" placeholder="Segundo numero" value={numero02} onChangeText = {setNumero02}/>

    <Button title="CALCULAR" onPress={somar}/>
    {resultado !== null && <Text style={styles.resultado}>RESULTADO={resultado}</Text>}
    </Scrollview>
  );
}
>>>>>>> d5782e4b1587c998e1515999e883e049dc8c5c98
const styles = StyleSheet.create ({
  corpo:{
    flex:1,
    justifyContent: "center",
<<<<<<< HEAD
    alignItems: "center",
    padding:30
=======
    alingItems: "center",
    paddin:30
>>>>>>> d5782e4b1587c998e1515999e883e049dc8c5c98
  },
  titulo:{
    fontSize:32,
    fontWeight: "bold",
<<<<<<< HEAD
    marginBottom:20
  },
  input:{
    width: "250",
    borderColor:"#a9a9a9",
    borderWidth:2,
    marginBottom: 20,
    paddingHorizontal:20,
    borderRadius:50
=======
    margimbottom:20
  },
  imput:{
    width: 40,
    borderColor:"#a9a9a9",
    borderwidth:2,
    marginButtom: 20,
    paddingHorizontal:20,
    borderRadius:5
>>>>>>> d5782e4b1587c998e1515999e883e049dc8c5c98
  },
  resultado: {
    fontSize: 36,
    marginTop: 20,
    fontWeight: "bold"
  }
});
export default App;
