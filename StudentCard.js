import React from 'react';

import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
} from 'react-native';

function StudentCard({
    id,
    name,
    year,
    photoURL,
    flagged,
    onToggleFlagged
}) {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: photoURL }}
                style={styles.photo}
            />

            <View style={styles.studentinfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.year}>{year}</Text>

                <Pressable
                onPress={() => onToggleFlagged(id)}
                style={({ pressed }) => [
                    styles.flagButton,
                    flagged && styles.flaggedButton,
                    pressed && styles.flaggedButton
                ]}>

                    <Text style={styles.flagText}>
                        {flagged ? "Flagged for Advising" : "Flag for Advising"}
                    </Text>
                </Pressable>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 12,
        elevation: 3,
    },

    photo: {
        width: 75,
        height: 75,
        borderRadius: 40,
        marginRight: 15,
    },

    studentinfo: {
        flex: 1,
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    year: {
        fontSize: 14,
        color: '#777777',
        marginBottom: 8,
    },

    flagButton: {
        backgroundColor: '#2563eb',
        padding: 9,
        borderRadius: 8,
    },

    flaggedButton: {
        backgroundColor: '#16a34a',
    },

    pressedButton: {
        opacity: 0.6,
    },

    flagText: {
        color: '#fff',
        fontweight: 'bold',
        textAlign: 'center',
    },
});

export default StudentCard;