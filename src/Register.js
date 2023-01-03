import React, { Component } from 'react';
import { Text,  View, TextInput, Dimensions, ImageBackground, TouchableOpacity, } from 'react-native';
import {Button} from './Component/Button';


const { width, height } = Dimensions.get("window");

class Register extends Component {
    render () {
        const { inputStyle } = styles;
        const image = { uri:'https://cdn.pixabay.com/photo/2020/06/10/07/05/yoga-5281457_960_720.jpg' }
        return ( 
            <View style ={{ flex:1 }}>
            <ImageBackground source={image} resizeMode="cover" style={{ flex:1}}>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.3)', flex: 1}}>
            <View style ={{ height: height*0.1, justifyContent: 'flex-start' , marginTop: 170, bottom: 80}}>
                <Text style={{ textAlign: 'center', color: "black", fontSize:  22, fontFamily:'Helvetica', fontWeight:'700'}}> Sign Up </Text>
                <Text style ={{ textAlign: 'center', color: '#012a', fontSize: 14, marginTop: 7, fontWeight:'500'}}> Create an account to start doing more </Text>
            </View> 
            <View style={{ height: height*0.5, justifyContent:'space-around' , bottom: 80}}>
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor= '#544'
                        style={inputStyle}
                    />
                    <TextInput 
                        placeholder="E-mail"
                        placeholderTextColor= '#544'
                        style={inputStyle}
                    />
                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor= '#544'
                        style={inputStyle}
                    />
                    <TextInput 
                        placeholder="Weight- Kg"
                        placeholderTextColor= '#544'
                        style={inputStyle}
                    />
                                        <TextInput 
                        placeholder="Age"
                        placeholderTextColor= '#544'
                        style={inputStyle}
                    />
                    <TextInput 
                        placeholder="Allergies"
                        placeholderTextColor= '#544'
                        style={inputStyle}
                    />
                    </View>
                    <View style ={{  width: "87%",  alignSelf:'center',  backgroundColor:'#000', borderRadius: 30,
                        borderWidth: 1, borderColor:'#000', bottom:50 }}>
                        <Button 
                        onPress={() =>  Actions.push("") }
                            > REGİSTER </Button>
                    </View>

                    <View style ={{ height: height*0.05,  flexDirection: 'row',paddingHorizontal: width * 0.10, alignItems: 'center', justifyContent: 'center', left: 30}} >
                    <Text style ={{ width: width * 0.60, textAlign: 'right', alignItems:'center', color: '#d3d3d3'}} > Already have an account ? </Text>
                    <TouchableOpacity onPress={() => Actions.push('')}>
                    <Text style ={{ width: width* 0.50, textAlign: 'left', color: 'gray', alignItems:'center', fontWeight:'bold' }}>  Log In </Text>
                    </TouchableOpacity>
                </View>
















            </View>
            </ImageBackground>
            </View>

        ) 
    }
};

const styles = {
    inputStyle: {
        borderColor: "grey",
        borderWidth: width* 0.004,
        paddingLeft: 20,
        width: "87%",
        marginTop: 5,
        fontSize: 15,
        borderRadius: 30,
        height:"10.5%",
        backgroundColor: '#fff' , 
        marginLeft: 28, 
        justifyContent:'space-between', 
        
    }
}

export default Register;