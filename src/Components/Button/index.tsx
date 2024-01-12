import { TouchableOpacity, Text, TouchableOpacityProps, ActivityIndicator } from 'react-native'

import styles from './style'

interface ButtonProps {
    text: string;
    onPress?: TouchableOpacityProps['onPress'];
    loading?: boolean;
    disabled?: boolean;
}

const Button = ({
    text,
    onPress,
    loading,
    disabled
}: ButtonProps) => {

    return (
        <TouchableOpacity style={[styles.container, (loading || disabled) && styles.disable]} onPress={onPress} disabled={loading || disabled}>
            {loading ?
                <ActivityIndicator size='small' />
                :
                <Text style={styles.text}>{text}</Text>
            }
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    loading: false,
    onPress: () => {},
    disabled: false
}
export default Button