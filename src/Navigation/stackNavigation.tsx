import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../Types/navigationTypes';
import { stackNavigationList } from '../Constants/navigationConstants';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => (
    <Stack.Navigator>
        {stackNavigationList.map(item => (
            <Stack.Screen
                name={item.name}
                component={item.component}
                key={Date.now()}
                options={item.options}
            />
        ))}
    </Stack.Navigator>
)

export default StackNavigation