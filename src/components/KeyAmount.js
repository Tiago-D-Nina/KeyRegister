import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';

const objTest = {
    simpleKey: 2,
    tetraKey: 1,
    internKey: 5,
    tag: 2,
};



const arrayTest = [
    ['SIMPLE KEY', 2],
    ['TETRA  KEY', 1],
    ['INTERN KEY', 5],
    ['TAG', 2],
    ['CARD', 1]
];

let inOut = false;

export default function KeyAmount({ list, plus }) {

    

    const [selectedValue, setSelectedValue] = useState("java");
    const [modalVisible, setModalVisible] = useState(false);
    const [inputQtdModalValue, setInputQtdModalValue] = useState(0);

    const handleQtdInputModalPress = () => {
        let myVar = arrayTest[0]
        console.log(myVar)
        setInputQtdModalValue(inputQtdModalValue + 1);
    }

    const handleMinorQtdInputModalPress = () => {
        let myVar = arrayTest[0]
        console.log(myVar)
        if(inputQtdModalValue !== 0)
            
            setInputQtdModalValue(inputQtdModalValue - 1);
    }

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                {/*  Modal Amount Key  */}
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Text style={styles.title}>Selecione a chave</Text>
                        
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedValue}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Chave Simples" value="java" />
                                <Picker.Item label="Chave Tetra" value="javascript" />
                                <Picker.Item label="Tag" value="python" />
                                <Picker.Item label="Controle" value="csharp" />
                            </Picker>
                        </View>

                        <View style={styles.inputQtdModal}>

                            <TouchableOpacity 
                                onPress={handleMinorQtdInputModalPress}
                                style={styles.btnAmountQtd}>
                                <Text>-</Text>
                            </TouchableOpacity>

                            <TextInput 
                                value={String(inputQtdModalValue)} // Corrigido para string
                                onChangeText={(text) => setInputQtdModalValue(Number(text))} // Converte a entrada para número
                                keyboardType="numeric" // Define o teclado numérico
                                placeholderTextColor="black"
                                style={{textAlign: 'center'}}
                            />

                            <TouchableOpacity 
                                onPress={handleQtdInputModalPress}
                                style={styles.btnAmountQtd}>
                                <Text>+</Text>
                            </TouchableOpacity>
                            
                        </View>

                        <View style={styles.modalBtnRow}>
                            <TouchableOpacity style={styles.btnModal} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.btnModalText}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.addBtnModal} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.btnModalText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {list.map(item => (
                <View style={styles.btnRow} key={item[0]}>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.text}>{`${plus ? '' : '-'}${item[1]} ${item[0]}`}</Text>
                        <MaterialCommunityIcons name="pencil" size={20} color="black" />
                    </TouchableOpacity>

                    <View style={styles.remainingAmount}>
                        <Text style={styles.remainingAmountText}>{item[2]}</Text>
                    </View>    
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
    },
    inputQtdModal: {
        flexDirection: 'row',
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 12,
        paddingLeft: 17,
        borderRadius: 10,
        fontSize: 16,
        justifyContent: 'space-between',
        alignItems: 'center', // Alinhamento centralizado dos botões e input
    },
    pickerContainer: {
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
    },
    picker: {
        width: '100%',
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 25,
        paddingTop: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        gap: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    modalBtnRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
    },
    btnModal: {
        backgroundColor: '#CA2121',
        borderRadius: 10,
        padding: 13,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addBtnModal: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 13,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnModalText: {
        color: 'white',
        fontWeight: 'bold',
    },
    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    remainingAmountText: {
        backgroundColor: '#fff',
        height: 36,
        width: 36,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'

    },
    btn: {
        alignSelf: 'flex-start',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 7,
        borderColor: '#ccc',
        borderWidth: 1,
        gap: 6,
        alignItems: 'center',
    },
    btnAmountQtd: {
        alignSelf: 'flex-start',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 7,
        width:35,
        justifyContent:'center',
        borderColor: '#ccc',
        borderWidth: 1,
        gap: 6,
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
    },
});
