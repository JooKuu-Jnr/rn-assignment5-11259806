import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { useTheme } from '../ThemeContext';

const transactions = [
    { id: '1', description: 'Grocery Shopping', amount: '$50.00', date: '2024-06-20' },
    { id: '2', description: 'Online Subscription', amount: '$10.00', date: '2024-06-18' },
    { id: '3', description: 'Restaurant', amount: '$30.00', date: '2024-06-15' },
    { id: '4', description: 'Fuel', amount: '$40.00', date: '2024-06-12' },
    { id: '5', description: 'Electricity Bill', amount: '$100.00', date: '2024-06-10' },
];

const Statistics = () => {
    const { isDarkTheme } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkTheme ? '#161622' : 'white' }]}>
            <View style={styles.header}>
                <Text style={[styles.headerText, { color: isDarkTheme ? 'white' : 'black' }]}>Statistics</Text>
            </View>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.transactionItem, { backgroundColor: isDarkTheme ? '#27273A' : '#E8E8E8' }]}>
                        <Text style={[styles.transactionText, { color: isDarkTheme ? 'white' : 'black' }]}>{item.description}</Text>
                        <Text style={[styles.transactionText, { color: isDarkTheme ? 'white' : 'black' }]}>{item.amount}</Text>
                        <Text style={[styles.transactionText, { color: isDarkTheme ? 'white' : 'black' }]}>{item.date}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default Statistics;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    transactionItem: {
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    transactionText: {
        fontSize: 16,
    },
});
