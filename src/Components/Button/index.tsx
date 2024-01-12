import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'

import styles from './style'

interface ButtonProps {
    text: string,
    onPress: TouchableOpacityProps['onPress']
}

const Button = ({
    text,
    onPress
}: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button