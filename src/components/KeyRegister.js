import React, { useState } from 'react'; // Importa o React e o hook useState
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native'; // Importa componentes do React Native
import Octicons from '@expo/vector-icons/Octicons'; // Importa ícones da biblioteca Expo
import { Picker } from '@react-native-picker/picker'; // Importa o componente Picker para seleção

// Dados de teste para o objeto e array
const objTest = {
    simpleKey: 2,
    tetraKey: 1,
    internKey: 5,
    tag: 2,
};

// const arrayTest = [
//     ['SIMPLE KEY', 2],
//     ['TETRA  KEY', 1],
//     ['INTERN KEY', 5],
//     ['TAG', 2],
//     ['CARD', 1]
// ];


//id, codigo imovel, codigo da chave
// const arrayKeysd = [
//     [14555, 4552, 6574],
//     [14556, 4553, 58954],
//     [14557, 4552, 4895],
//     [14558, 4552, 48954],
//     [14559, 4553, 5687]
// ];

let inOut = false; // Variável de estado global de teste

// Componente principal de registro de chaves
export default function KeyRegister({ list, plus }) {
    // Estados para o componente
    const [arrayKeys, setArrayKeys] = useState([
        ['Codigo', 'obs', 'id'] //Apenas para visual
    ])
    const [selectedValue, setSelectedValue] = useState(); // Valor selecionado no inputModal
    const [modalVisible, setModalVisible] = useState(false); // Estado de visibilidade do modal
    const [inputModalValue, setInputModalValue] = useState(''); // Estado da quantidade no input do modal
    const [inputObsModalValue, setInputObsModalValue] = useState(''); // Estado da quantidade no input do modal
    

    //Função para atualizar usesate das infos de chave e obs
    const handleUpdateInfo = (info, input) => {
        if(input){
            console.log(info)
            setInputModalValue(info)
            console.log(inputModalValue)

        }else{
            setInputObsModalValue(info)
        }
    }
    // Função para inserir uma chave
    const handleInsertKey = () => {
        if(inputModalValue > 0){

            // Cria um novo array com o estado atual de arrayKeys e a nova chave
            const newArrayKeys = [...arrayKeys, [inputModalValue, inputObsModalValue]];
            setArrayKeys(newArrayKeys);
            setModalVisible(false); // Fecha o modal
            setInputModalValue(''); // Limpa o input do modal
            setInputObsModalValue(''); // Limpa o input do modal
        }
    };

    

    return (
        <View style={styles.container}>
            {/* Modal de seleção de quantidade de chaves */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible); // Fecha o modal ao solicitar fechamento
                }}
            >
                {/* Conteúdo do modal de quantidade de chaves */}
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Text style={styles.title}>Selecione a chave</Text>
                        
                        {/* Picker para selecionar o tipo de chave */}
                        <View style={styles.pickerContainer}>
                            <View style={styles.inputKeyModal}>


                                <TextInput 
                                    onChangeText={(text) => handleUpdateInfo(Number(text), true)} // Converte a entrada para número
                                    placeholder='Chave'
                                    keyboardType="numeric" // Define o teclado numérico
                                    //placeholderTextColor="black"
                                />

                            
                            </View>
                            

                        </View>

                        <View style={styles.inputQtdModal}>


                            <TextInput 
                                // value={String(inputModalValue)} // Corrigido para string
                                onChangeText={(text) => handleUpdateInfo(text, false)}
                                // placeholder='Observação'
                                //placeholderTextColor="black"
                            />

                            
                        </View>

                        {/* Botões de ações no modal */}
                        <View style={styles.modalBtnRow}>
                            <TouchableOpacity style={styles.btnModal} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.btnModalText}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.addBtnModal} onPress={() => handleInsertKey()}>
                                <Text style={styles.btnModalText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Mapeamento dos itens da lista para criar botões de chaves */}
            {/* Key posteriormente irá mudar para o id do supabase*/}
            {arrayKeys.map(item => (
                <View style={styles.btnRow} key={item[0]}> 
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => setModalVisible(true)} // Abre o modal ao clicar
                    >
                        {/* Exibição da chave selecionada */}
                        <Text style={styles.text}>{`${item[0]} ${item[1]}`}</Text>
                        
                    </TouchableOpacity>

                    {/* Excluir chave */}
                    
                    <View style={styles.remainingAmountText}>
                        <Octicons name="trash" size={20} color="#CA2121" />
                    </View>
                       
                </View>
            ))}
            <TouchableOpacity style={styles.addBtnModal} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.btnModalText}>Adicionar chave</Text>
            </TouchableOpacity>
        </View>
    );
}

// Estilos do componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
    },
    inputQtdModal: {
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 12,
        paddingLeft: 17,
        borderRadius: 10,
        fontSize: 16,
        justifyContent: 'space-between',
    },
    inputKeyModal: {
        width: '100%',
        padding: 12,
        paddingLeft: 17,
        borderRadius: 10,
        fontSize: 16,
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo semitransparente
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
        justifyContent: 'center',
        alignItems: 'center'
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
        width: 35,
        justifyContent: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        gap: 6,
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
    },
});
