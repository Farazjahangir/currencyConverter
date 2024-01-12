import React from "react";

import { 
    View,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    Text
} from 'react-native'

import styles from "./style";

interface TextInputProps {
    inputMode?: RNTextInputProps['inputMode']
    value: string,
    onChangeText: RNTextInputProps['onChangeText']
}

const TextInput = ({
    inputMode,
    value,
    onChangeText
}: TextInputProps) => {
    return (
        <View style={styles.container}>
            <RNTextInput inputMode={inputMode} onChangeText={onChangeText} style={styles.input} />
            <Text style={styles.postFix}>EUR</Text>
        </View>
    )
}

TextInput.defaultProps = {
    inputMode: 'numeric'
}
export default TextInput