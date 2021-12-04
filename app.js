import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create(
  {
    standard: {
      fontSize: 25,
      color: 'black',
    },
    negrita: {
      fontSize: 25,
      fontWeight: 'bold'
    },
    view: {
      padding: 10
    },
    info: {
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
      fontSize: 25,
      color: 'black',
    }
  }
)

function ListadoStackScreen() { 
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Listado" component={ListadoPantalla}
        options={{
          title: 'Listado de usuarios',
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
      <HomeStack.Screen name="Detalles" component={DetalleUsuarioPantalla} 
        options={{
          title: 'Detalle de usuario',
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
    </HomeStack.Navigator>
  );
}

function InformacionPantalla() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.info}> Esta App te permite conocer en más profundidad las personas </Text>
    </View >
  );
}

function DetalleUsuarioPantalla({ route }) {
  const { nombre, edad, sexo } = route.params;
  return (
    <View style={styles.view}>
      <Text style={styles.standard}><Text style={styles.negrita}>Nombre: </Text>{nombre}</Text>
      <Text style={styles.standard}><Text style={styles.negrita}>Edad: </Text>{edad}</Text>
      <Text style={styles.standard}><Text style={styles.negrita}>Sexo: </Text>{sexo}</Text>
    </View>
  );
}

function ListadoPantalla({ navigation }) {
  return (

    <View style={styles.view}>
      <Text style={styles.standard}
        onPress={() => navigation.navigate('Detalles', { nombre: 'Julia Vera Santos', edad: 22, sexo: 'Mujer' })}>Julia Vera Santos</Text>
      <Text style={styles.standard}
        onPress={() => navigation.navigate('Detalles', { nombre: 'Juan Carlos Tena Cabeza', edad: 25, sexo: 'Hombre' })}>Juan Carlos Tena Cabeza</Text>
      <Text style={styles.standard}
        onPress={() => navigation.navigate('Detalles', { nombre: 'Maria Exposito Jimenez', edad: 23, sexo: 'Mujer' })}>Maria Exposito Jimenez</Text>
    </View>
  );
}

function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Informacion') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Listado') {
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        })}
      >
  
      <Tab.Screen options={{ headerShown: false }} name="Listado" component={ListadoStackScreen}/>
      <Tab.Screen options={{ headerShown: false }} name="Informacion" component={InformacionPantalla}
          
          options={{
            title: 'Información',
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
      }} />

      </Tab.Navigator>
    </NavigationContainer>

  )
}
export default App;