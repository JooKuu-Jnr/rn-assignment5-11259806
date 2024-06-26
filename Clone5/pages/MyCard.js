import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import React from 'react';
import { useTheme } from '../ThemeContext';

const MyCard = () => {
    const { isDarkTheme } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkTheme ? '#161622' : 'white' }]}>
            <View style={styles.form}>
                <Text style={[styles.label, { color: isDarkTheme ? 'white' : 'black' }]}>Card Number</Text>
                <TextInput
                    style={[styles.input, { backgroundColor: isDarkTheme ? '#27273A' : '#E8E8E8', color: isDarkTheme ? 'white' : 'black' }]}
                    placeholder="Enter Card Number"
                    placeholderTextColor={isDarkTheme ? 'white' : 'gray'}
                />
                <Text style={[styles.label, { color: isDarkTheme ? 'white' : 'black' }]}>Card Holder Name</Text>
                <TextInput
                    style={[styles.input, { backgroundColor: isDarkTheme ? '#27273A' : '#E8E8E8', color: isDarkTheme ? 'white' : 'black' }]}
                    placeholder="Enter Card Holder Name"
                    placeholderTextColor={isDarkTheme ? 'white' : 'gray'}
                />
                <Text style={[styles.label, { color: isDarkTheme ? 'white' : 'black' }]}>Expiry Date</Text>
                <TextInput
                    style={[styles.input, { backgroundColor: isDarkTheme ? '#27273A' : '#E8E8E8', color: isDarkTheme ? 'white' : 'black' }]}
                    placeholder="MM/YY"
                    placeholderTextColor={isDarkTheme ? 'white' : 'gray'}
                />
                <Text style={[styles.label, { color: isDarkTheme ? 'white' : 'black' }]}>CVV</Text>
                <TextInput
                    style={[styles.input, { backgroundColor: isDarkTheme ? '#27273A' : '#E8E8E8', color: isDarkTheme ? 'white' : 'black' }]}
                    placeholder="Enter CVV"
                    placeholderTextColor={isDarkTheme ? 'white' : 'gray'}
                    secureTextEntry={true}
                />
            </View>
        </SafeAreaView>
    );
};

export default MyCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    form: {
        marginTop: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
});
