import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
      modalView: {
        margin: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
      button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginTop: 10,
        width: 100,
    },
    buttonAdd: {
        backgroundColor: '#043D9C',
        marginVertical: 10,
    },
      buttonClose: {
        backgroundColor: '#f44336',
    },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    input:{
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        width: 220,
        borderRadius: 10,
        backgroundColor: "#fff",
        color: "#a4a4a4",
        borderColor: "#a4a4a4",
    }
});