import { StyleSheet } from "react-native";

export const taskStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginVertical: 8,
    },
    areaTaskTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#a4a4a4",
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    titleMarked: {
        fontSize: 24,
        fontWeight: 'bold',
        textDecorationLine: "line-through",
        color: "#a4a4a4",
    },
    description: {
        fontSize: 18,
        color: "#5b5b5b",
    },
    checkbox: {
        width: 64,
        height: 64
    },
    areaDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    areaDataDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 8,
    },
    trashButton: {
        padding: 8,
    },
    dayDetails: {
        fontSize: 16,
        color: "#5b5b5b",
        fontWeight: "bold",
    },
    hourDetails: {
        fontSize: 16,
        color: "#a4a4a4",
    },
    imageDetails: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
});