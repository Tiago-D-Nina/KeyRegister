import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons' ;

import TabRoutes from './tab.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name="home"
                component={TabRoutes}
            />
        </Drawer.Navigator>
    )
}