import {Pressable, Text, StyleSheet, View} from "react-native";

export default function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable onPress={props.onDelete.bind(this, props.id)}
                       android_ripple={{color: '#335656'}}
                       style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalItemText}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 5,
        backgroundColor: '#eef2f2'
    },
    goalItemText: {
        color: '#212121',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5
    }
})

