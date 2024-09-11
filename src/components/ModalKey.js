import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useState } from 'react';

export default function ModalKey(){

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.container}>

        <View style={styles.modalContent}>
            <Text style={styles.title}>Selecione a chave</Text>
            <TextInput 
                    style={styles.input} 
                    placeholder="Código do Imóvel" 
                    />
                    <TextInput 
                    style={styles.input} 
                    placeholder="Código do Imóvel" 
                    />

            <View style={styles.modalBtnRow}>

                <TouchableOpacity style={styles.btnModal} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.btnModalText}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addBtnModal} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.btnModalText}>Adcionar</Text>
                </TouchableOpacity>
            
            </View>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:`rgba(0, 0, 0, 0.6)`,
        justifyContent: 'flex-end'
    },
    modalContent:{
        backgroundColor: 'white',
        padding: 25,
        paddingTop:30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        gap: 15,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
    },
    modalBtnRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15
    },
    btnModal:{
        backgroundColor: '#CA2121',
        borderRadius:10,
        padding:13,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    addBtnModal:{
        backgroundColor: 'black',
        borderRadius:10,
        padding:13,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btnModalText:{
        color:'white',
        fontWeight: 'bold'
    },
})