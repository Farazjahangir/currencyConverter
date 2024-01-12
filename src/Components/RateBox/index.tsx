import React from 'react'
import {
    View,
    Text
} from 'react-native'

import styles from "./style"

type RateBoxType = {
    amount: number,
    currencyCode: string,
    conversionRate: number
}

const RateBox = ({
    amount,
    currencyCode,
    conversionRate
}: RateBoxType) => {
    return (
        <View style={styles.contentBox}>
            <Text style={styles.currencyCode}>{currencyCode}</Text>
            <View>
                <Text style={styles.totalAmount}>{amount.toFixed(2)}</Text>
                <Text style={styles.detailsText}>1 EUR = {(conversionRate).toFixed(2)} {currencyCode}</Text>
                <Text style={styles.detailsText}>1 {currencyCode} = {(1/conversionRate).toFixed(2)} EUR</Text>
            </View>
        </View>
    )
}

export default RateBox