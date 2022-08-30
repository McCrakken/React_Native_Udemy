import {useState} from "react";
import {Button, FlatList, StyleSheet, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const startAddGoalHandler = () => {
        setIsModalVisible(true);
    };

    const endAddGoalHandler = () => {
        setIsModalVisible(false);
    }

    const addGoalHandler = (enteredGoalText) => {
        console.log(enteredGoalText);
        setCourseGoals(currentCourseGoals => [
            ...currentCourseGoals,
            {
                text: enteredGoalText,
                key: Math.random().toString(),  // Assigning key in an obj allows FlatList to use unique keys for items
                id: Math.random().toString(),   // keyExtractor prop pointing to the unique id not name key can work
            }
        ])
        endAddGoalHandler();
    };

    const deleteGoalHandler = (id) => {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        })
        console.log('Delete item!', id);
    }

    return (
        <>
            <StatusBar style='dark' />
            <View style={styles.appContainer}>
                <Button title='Add Goal' color={'#225656'} onPress={startAddGoalHandler} />
                <GoalInput onAddGoal={addGoalHandler} onCancelModal={endAddGoalHandler} visible={isModalVisible} />
                <View style={styles.goalsContainer}>
                    <FlatList data={courseGoals}
                              renderItem={itemData => (
                                  <GoalItem text={itemData.item.text} id={itemData.item.id} onDelete={deleteGoalHandler} />
                              )}
                              keyExtractor={(item, index) => {return item.id}}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 50
    },
    goalsContainer: {
        flex: 5,
    },
});
