import React  from "react";
import { Text, TouchableOpacity} from 'react-native';

const Button = ({ onPress, children}) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}> { children }  </Text>
            </TouchableOpacity>
    );
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        
        alignSelf: 'stretch',
        borderRadius: 30,
        
      
    }
};

export { Button };