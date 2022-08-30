import {useState} from "react";
import {Button, Modal, TextInput, StyleSheet, View, Image} from "react-native";

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    const endGoalHandler = () => {
        props.onCancelModal();
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput
                    onChangeText={goalInputHandler}
                    placeholder='Enter a course goal'
                    style={styles.textInput}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={endGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title='Add Goal' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        backgroundColor: '#225656',
        // borderBottomColor: "#ccc",
        // borderBottomWidth: 1,
        flex: 1,
        justifyContent: "center",
        // marginBottom: 24,
        padding: 16
    },
    image: {
      width: 100,
      height: 100,
      margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#eef2f2',
        backgroundColor: '#eef2f2',
        borderRadius: 6,
        color: '#434c50',
        padding: 8,
        width: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8,
        color: '#434c50'
    }
})