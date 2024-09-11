import { StyleSheet, TextInput, View, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons' ;
import KeyAmount from "../components/KeyAmount";

export default function Register(){
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.scrollContainer}>


                    <View style={styles.inputView}>
                        <Feather name="search" size={20} color={'#ccc'}/>

                        <TextInput 
                            style={styles.input} 
                            placeholder="Pesquisar" 
                            />
                    
                    </View>
                </View>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    inputView:{
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        width:'100%',
        alignItems: 'center',
        paddingLeft: 10,
    },
    input: {
        flex: 1,
        padding: 10 ,
      },
    container: {
        flex: 1,
        backgroundColor:'#FFF',
        paddingTop: 70,
        // alignItems: 'center',
        // justifyContent: 'center',
        },
    scroll:{
        backgroundColor: '#fff',
    },
    scrollContainer:{
        padding: 20,
    }
    // title:{
    //     fontSize: 30,
    //     fontWeight: 'bold',
    // }
})