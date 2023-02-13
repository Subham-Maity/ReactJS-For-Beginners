import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function AppPro():JSX.Element{

    const [mode, setMode] = useState<'light' | 'dark'>('light')
    const [bgColor, setBgColor] = useState('#fff')

    const switchMode = () => {
        if (mode === 'light') {
            setMode('dark')
            setBgColor('#333')
        } else {
            setMode('light')
            setBgColor('#fff')
        }
    }

    return(
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <Text style={mode === 'light' ? styles.blackText : styles.whiteText}>
                Hello World!
            </Text>
            <TouchableOpacity onPress={switchMode} style={styles.button}>
                <Text style={mode === 'light' ? styles.blackText : styles.whiteText}>
                    Switch Mode
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
        color:'#FFFFFF'
    },
    blackText:{
        color:'#000000'
    },
    button: {
        padding: 10,
        backgroundColor: '#ccc',
        marginTop: 20
    }
})

export default AppPro
