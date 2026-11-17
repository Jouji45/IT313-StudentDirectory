import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    scrollView,
} from 'react-native';

import studentCard from './StudentCard';

const initialStudents = [
    {
        id: "s1",
        name: "Ana Cruz",
        year: "3rd Year",
        photoURL: "https://i.pravatar.cc/100?img=1",
        flagged: false
    },
    {
        id: "s2",
        name: "Bea Santos",
        year: "2nd Year",
        photoURL: "https://i.pravatar.cc/100?img=2",
        flagged: false
    },
    {
        id: "s3",
        name: "Cid Ramos",
        year: "4th Year",
        photoURL: "https://i.pravatar.cc/100?img=3",
        flagged: false
    },
    {
        id: "s4",
        name: "Dex Alonzo",
        year: "1st Year",
        photoURL: "https://i.pravatar.cc/100?img=4",
        flagged: false
    },
    {
        id: "s5",
        name: "Eli Tan",
        year: "3rd Year",
        photoURL: "https://i.pravatar.cc/100?img=5",
        flagged: false
    }
];

function StudentDirectory() {

    const [students, setStudents] = React.useState(initialStudents);
    const [query, setQuery] = useState('');
    
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(query.toLowerCase())
    );

    const toggleflag = (id) => {
        setStudents(prevStudents =>
            previousStudents.map(student =>
                student.id === id
                ? { ...student, flagged: !student.flagged }
                : student
            )
        );
    }

    return (
        <View style={styles.container}>

            <Text Style={styles.title}>
                Student Directory
            </Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Search by student name..."
                value={query}
                onChangeText={setQuery}
            />

            <ScrollView>
                {filteredStudents.map(student => (
                    <StudentCard
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        year={student.year}
                        photoURL={student.photoURL}
                        flagged={student.flagged}
                        onFlagToggle={toggleflag}
                    />
                ))}
            </ScrollView>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
        paddingTop: 50,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    searchInput: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#dddddd',
    },
});

export default StudentDirectory;
