import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import TextInput from '../../Components/TextInput';
import RateBox from '../../Components/RateBox';
import Button from '../../Components/Button';
import { getRates } from '../../Utils/api';
import styles from './style';

const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type CurrencyRate = {
    code: string;
    rate: number;
};

type Rates = {
    amount: number;
    rates: CurrencyRate[];
};

const Rates = () => {
    const [userInput, setInput] = useState<string>('');
    const [rates, setRates] = useState<Rates>();

    const onInputChange = (value: string) => {
        setInput(value);
    };

    const renderList = () => (
        <FlatList
            data={rates?.rates}
            renderItem={({item}) => (
                <RateBox
                    currencyCode={item.code}
                    amount={(rates?.amount || 0) * item.rate}
                    conversionRate={item.rate}
                />
            )}
        />
    );

    const onConvert = async () => {
        const res = await getRates();
        const rates = Object.keys(res.conversion_rates).map(item => ({
            code: item,
            rate: res.conversion_rates[item]
        }))
        const payload = {
            amount: Number(userInput),
            rates: rates
        }
        setRates(payload);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.pageTitle}>Rates</Text>
                <TextInput value={userInput} onChangeText={onInputChange} />
                <View style={{ alignItems: 'flex-end' }}>
                    <Button text="Convert" onPress={onConvert} />
                </View>
            </View>
            <View style={styles.conversionListBox}>{renderList()}</View>
        </View>
    );
};

export default Rates;
