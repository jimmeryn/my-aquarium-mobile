import { StyleSheet } from 'react-native';
import { Layout } from './Layout';
import { Colors } from './Colors'

export const styles = StyleSheet.create({
    title: {
        alignSelf: 'flex-end',
        textAlign: 'right',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 36,
        color: Colors.text,
        marginBottom: 12,
        marginHorizontal: Layout.window.width / 4,
    },
    subtitle: {
        alignSelf: 'flex-end',
        fontWeight: '200',
        fontSize: 18,
        lineHeight: 27,
        textAlign: 'right',
        color: Colors.text,
        marginRight: Layout.window.width / 4,
        marginLeft: Layout.window.width / 3 + 20,
    },
    page: {
        backgroundColor: Colors.background,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    modal: {
        backgroundColor: Colors.modalBackground,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        width: '100%',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 36,
        lineHeight: 54,
        color: Colors.text_negative,
        borderWidth: 1,
        borderColor: Colors.modalBackground,
        borderBottomColor: '#C4C4C4',
        paddingBottom: 20,
        paddingTop: 20,
    },
    modalSubminButton: {
        width: 205,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(196, 196, 196, 0.13)',
        borderRadius: 15,
        marginTop: 40,
    },
    modalSubminButtonText: {
        fontSize: 28,
        lineHeight: 54,
        fontWeight: 'normal',
        color: 'white',
    },
    modalInput: {
        width: '60%',
        height: 40,
        margin: 24,
        padding: 20,
        color: 'white',
        borderWidth: 1,
        borderColor: Colors.modalBackground,
        borderBottomColor: '#C4C4C4',
    },
});