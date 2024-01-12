import React, { useState } from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'


import TextInput from '../../Components/TextInput'
import RateBox from '../../Components/RateBox'
import Button from '../../Components/Button'
import styles from './style'

const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const Rates = () => {
    const [amount, setAmount] = useState<string>('')

    const onInputChange = (value: string) => {
        setAmount(value)
    }

    const renderList = () => (
        <FlatList
            data={data}
            renderItem={() => <RateBox currencyCode='MXN' amount={200 * 21.8444} conversionRate={21.8444} />}
        />
    )

    const onConvert = () => {
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.pageTitle}>Rates</Text>
                <TextInput value={amount} onChangeText={onInputChange} />
                <View style={{ alignItems: 'flex-end' }}>
                    <Button text='Convert' onPress={onConvert} />
                </View>
            </View>
            <View style={styles.conversionListBox}>
                {renderList()}
            </View>
        </View>
    )
}

export default Rates
