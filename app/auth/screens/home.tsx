import React, { useState } from 'react'
import { StyleSheet, Text,View, Dimensions,TouchableOpacity,ImageBackground } from 'react-native';
const img = require('../../images/ramadanback.jpg')
const {width: WIDTH}= Dimensions.get('window')

export function Home(){
    return (
        <ImageBackground source={img} style={styles.backgroundcontainer}>

            <View  style={styles.logoContainer}>

                <TouchableOpacity style={styles.btnLogin}>
                     <Text style={styles.text}  > Ajouter un aide place </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnLogin}>
                     <Text style={styles.text}  > Ajouter un futor place </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnLogin}>
                     <Text style={styles.text}  > Afficher les aides </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnLogin}>
                     <Text style={styles.text}  > Afficher les futors </Text>
                </TouchableOpacity>

            </View>

        </ImageBackground>
    
    );
};






const styles = StyleSheet.create({
    
    logoContainer: {
        alignItems: 'center',
    
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

        backgroundcontainer:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
           
           
          }

})