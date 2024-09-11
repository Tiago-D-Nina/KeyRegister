import { StatusBar } from 'expo-status-bar';
import { ScrollView, TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { supabase } from "../../service/supabase";
import { useState } from "react";
//import { ScrollView } from 'react-native-web';


export default function Regis() {
  
  const [code, setCode] = useState('');
  const [resp, setResp] = useState('');
  const [date, setDate] = useState('');
  const [dateBack, setDateBack] = useState('');
  const [obs, setObs] = useState('');
  const [simpleKey, setSimpleKey] = useState('');
  const [tetraKey, setTetraKey] = useState('');
  const [remoteControl, setRemoteControl] = useState('');
  const [tag, setTag] = useState('');

  const handleCode = (info) => {
    setCode(info);
    console.log(info);
  };

  const handleResp = (info) => {
    setResp(info);
    console.log(info);
  };

  const handleDate = (info) => {
    setDate(info);
    console.log(info);
  };

  const handleDateBack = (info) => {
    setDateBack(info);
    console.log(info);
  };

  const handleObs = (info) => {
    setObs(info);
    console.log(info);
  };

  const handleSimpleKey = (info) => {
    setSimpleKey(info);
    console.log(info);
  };

  const handleTetraKey = (info) => {
    setTetraKey(info);
    console.log(info);
  };

  const handleRemoteControl = (info) => {
    setRemoteControl(info);
    console.log(info);
  };

  const handleTag = (info) => {
    setTag(info);
    console.log(info);
  };

  const handleInsertRecord = async (newKey) => {


    const { data, error } = await supabase
      //insert new key register
      .from('Registro_Chaves')
      .insert({ 
        codigo_imovel:code,
        corretor_responsavel: resp,
        saida: date,
        volta: dateBack,
        obs: obs,
        chaves_simples: simpleKey,
        chaves_tetra: tetraKey,
        controles: remoteControl,
        tags: tag
      })
      .select()
      
      //read
      // .from('Registro_Chaves')
      // .select('codigo_imovel')
      // .eq('codigo_imovel', newKey)
      // .single();
      //console.log(data);
    
      // update
      // .from('Corretores')
      // .update({ nome:"Joaozin", Telefone: newKey })
      // .eq('id', 1)


    if (error) {
      console.error(error);
    } else {
      console.log('Inserted:', data); 
    }
  }

  //deletar registro com base no id
  const handleDeleteRecord = async () => {

    const { data, error } = await supabase
      .from('Registro_Chaves')
      .delete()
      .eq('id', code)
      .select()

    if (error) {
      console.error(error);
    } else {
      console.log('Delete:', data); 
    }
  }

  //atualizar registro com base no id
  const handleUpdateRecord = async (id) => {

    if(code){

      const { data, error } = await supabase
      .from('Registro_Chaves')
      .update({ codigo_imovel:code })
      .eq('id', id)
      .select()
      
      if (error) {
        console.error(error);
      } else {
        console.log('Updated:', data); 
      }
    }

    if(resp){

      const { data, error } = await supabase
      .from('Registro_Chaves')
      .update({ corretor_responsavel: resp, })
      .eq('id', id)
      .select()
      
      if (error) {
        console.error(error);
      } else {
        console.log('Updated:', data); 
      }
    }

    if(date){

      const { data, error } = await supabase
      .from('Registro_Chaves')
      .update({ saida:date })
      .eq('id', id)
      .select()

      if (error) {
        console.error(error);
      } else {
        console.log('Updated:', data); 
      }
    }

    if(dateBack){

      const { data, error } = await supabase
      .from('Registro_Chaves')
      .update({ volta:dateBack })
      .eq('id', id)
      .select()

      if (error) {
        console.error(error);
      } else {
        console.log('Updated:', data); 
      }
    }

    if(obs){

      const { data, error } = await supabase
      .from('Registro_Chaves')
      .update({ obs:obs })
      .eq('id', 16)
      .select()

      if (error) {
        console.error(error);
      } else {
        console.log('Updated:', data); 
      }
    }

    if(simpleKey){

      const { data, error } = await supabase
      .from('Registro_Chaves')
      .update({ chaves_simples:simpleKey })
      .eq('id', id)
      .select()

      if (error) {
        console.error(error);
      } else {
        console.log('Updated:', data); 
      }
    }

    if(tetraKey){

      const { data, error } = await supabase
      .from('Registro_Chaves')
      .update({ chaves_tetra:tetraKey })
      .eq('id', id)
      .select()

      if (error) {
        console.error(error);
      } else {
        console.log('Updated:', data); 
      }
    }

    if(remoteControl){

      const { data, error } = await supabase
      .from('Registro_Chaves')
      .update({ controles:remoteControl })
      .eq('id', id)
      .select()

      if (error) {
        console.error(error);
      } else {
        console.log('Updated:', data); 
      }
    }

    if(tag){

      const { data, error } = await supabase
      .from('Registro_Chaves')
      .update({ tags:tag })
      .eq('id', id)
      .select()
      
      if (error) {
        console.error(error);
      } else {
        console.log('Updated:', data); 
      }
    }

  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.inputsScrollArea}>
        <View style={styles.inputsArea}>

          <Text style={styles.title}>Registrar saída</Text>

          <TextInput 
          style={styles.input} 
          placeholder="Código do imóvel"
          onChangeText={handleCode} />

          <TextInput 
          style={styles.input} 
          placeholder="Responsável" 
          onChangeText={handleResp} />

          <TextInput 
          style={styles.input} 
          placeholder="Data"
          onChangeText={handleDate} />

          <TextInput 
          style={styles.input} 
          placeholder="Data de volta" 
          onChangeText={handleDateBack} />

          <TextInput 
          style={styles.inputText} 
          placeholder="Observação"
          onChangeText={handleObs} />

          <TextInput 
          style={styles.input} 
          placeholder="Chave simples" 
          onChangeText={handleSimpleKey} />

          <TextInput 
          style={styles.input} 
          placeholder="Chave tetra" 
          onChangeText={handleTetraKey} />

          <TextInput 
          style={styles.input} 
          placeholder="Controle" 
          onChangeText={handleRemoteControl} />

          <TextInput 
          style={styles.input} 
          placeholder="Tag" 
          onChangeText={handleTag} />

          <TouchableOpacity 
          style={styles.button}
          onPress={() => /*handleInsertRecord()*/ /*handleDeleteRecord()*/ /*handleUpdateRecord(16)*/ handleInsertRecord() }>
            <Text>REGISTRAR</Text>
          </TouchableOpacity>
        
        </View>
      </ScrollView>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingBottom:24,
//    height: '100%',
  },
  inputsScrollArea: {
    width: '100%',
  },
  inputsArea: {
    paddingTop: 70,
    width: '100%',
    gap: 15,
    paddingLeft: 24,
    paddingRight: 24,
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'start',
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  inputText: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    paddingBottom: 50,
    borderRadius: 10,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    
  }
  
});
