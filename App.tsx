import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [anoNascimento, setAnoNascimento] = useState('');
  const [mesNascimento, setMesNascimento] = useState('');
  const [idade, setIdade] = useState({ anos: 0, meses: 0 });

  const calcularIdade = () => {
    const anoAtual = new Date().getFullYear();
    const mesAtual = new Date().getMonth() + 1;

    let anos = anoAtual - parseInt(anoNascimento, 10);
    let meses = mesAtual - parseInt(mesNascimento, 10);

    if (meses < 0) {
      anos--;
      meses = 12 + meses;
    }

    setIdade({ anos, meses });
  };

  return (
    <View style={styles.container}>
      <Text style={{marginBottom:10}}>Digite o ano e o mês de nascimento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ano de Nascimento"
        keyboardType="numeric"
        value={anoNascimento}
        onChangeText={text => setAnoNascimento(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mês de Nascimento"
        keyboardType="numeric"
        value={mesNascimento}
        onChangeText={text => setMesNascimento(text)}
      />
      <Button title="Calcular Idade" onPress={calcularIdade} />
      {idade.anos > 0 && (
        <Text style={{marginTop:10,fontSize:15, textAlign:'center',fontWeight:'bold'}}>
          Você tem {idade.anos} anos e {idade.meses} meses.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default App;
