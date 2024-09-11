import { StyleSheet, TextInput, View, ScrollView } from "react-native";
import KeyRegister from "../components/KeyRegister";

export default function Register(){

    const arrayTest = [
        ['SIMPLE KEY', 5, 0],
        ['TETRA  KEY', 1, 0],
        ['INTERN KEY', 5, 0],
        ['TAG', 2, 0],
        ['CARD', 1, 2]
    ]


    return(
        
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.scrollContainer}>

                    <TextInput 
                        style={styles.input} 
                        placeholder="Código do Imóvel" 
                        />
            
                    <KeyRegister list={arrayTest} plus={false}></KeyRegister>
                </View>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
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
        gap: 20
    }
    // title:{
    //     fontSize: 30,
    //     fontWeight: 'bold',
    // }
})