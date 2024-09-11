import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons' ;

import Register from '../pages/Register'
import Regis from '../pages/Regis'

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        
            <Tab.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Tab.Screen    
                    name="register"
                    component={Register}
                    options={{
                        tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color}/>,
                        tabBarLabel: 'Init'
                        }}
                />
                <Tab.Screen
                    name="regis"
                    component={Regis}
                    options={{
                        tabBarIcon: ({ color, size }) => <Feather name="settings" size={size} color={color}/>
                    }}
                />
                
            </Tab.Navigator>
        
    )
}