import React,{useState} from 'react';
import { StyleSheet, Text, View,Dimensions,Image,ImageBackground, TextInput,Button,Alert,TouchableOpacity, } from 'react-native';
import firebase from '../../firebase/firebase'
const {width: WIDTH}= Dimensions.get('window')
const logo = require('../../images/logoram.png')
const img = require('../../images/ramadanback.jpg')



export function SignIn({navigation}:any) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
    
  const signIn = async () => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email, password);
        navigation.navigate('Home');
    } catch (err) {
        setError(err.message);
    }

}
    

  return (
    <ImageBackground source={img} style={styles.backgroundcontainer}>
  
    <View  style={styles.logoContainer}>
       
    <Image source={logo} style={styles.logo} /> 
    <Text style={styles.logoText}>Sign in </Text>  

    <TextInput
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor={'rgba(255,255,255, 0.7)'}
        underlineColorAndroid='transparent'
        value={email}
        onChangeText={setEmail}
        />

    <TextInput
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry={true}
        placeholderTextColor={'rgba(255,255,255, 0.7)'}
        underlineColorAndroid='transparent'
        value={password}
        onChangeText={setPassword}
        />
        {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }

        <TouchableOpacity style={styles.btnLogin} onPress={() => signIn()}>
         <Text style={styles.text}> Login </Text>
     </TouchableOpacity >

     <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
     <Text style={styles.sign} > Don't have an account? Sign Up</Text>
     </TouchableOpacity>
    </View>

    </ImageBackground>
      

  );
}

export function Test(){
    console.log('hola')
}

export default SignIn ;



const styles = StyleSheet.create({

 logoContainer: {
   alignItems: 'center',
 
},

 logo: {
   width: 120,
   height: 120,
   
 },
 logoText:{
    color: 'white',
    fontSize:30,
    fontWeight:'500',
    marginTop: 30,
    marginBottom: 40,
   
    },
    input:{
        width: WIDTH - 50,
        height: 45,
        marginTop: 10,
        borderRadius: 25,
        fontSize:16,
        paddingLeft: 45,
        backgroundColor:'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25
        },

    

btnLogin:{

    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor:'#471f51',
    justifyContent: 'center',
    marginTop: 30,

    shadowColor: "#471f51",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    
    },
    text:{
    
    color:'rgba(255,255,255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
    },

    sign: {
    color:'rgba(255,255,255, 0.7)',
    fontSize: 16,
   
    marginTop: 30
    },

    backgroundcontainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
     
    }
    


});

