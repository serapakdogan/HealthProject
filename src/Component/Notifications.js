import React from "react";
import { StyleSheet, View, Switch, Text } from "react-native";

export default class Notifications extends React.Component {
     state = {
         toggled : false
     }

     toggleSwitch = (value) => {
         this.setState({toggled : value})
     }

     render(){
         return ( 
             <View style={styles.container}>
                 <Switch onValueChange={this.toggleSwitch}
                 value={this.state.toggled}/>
                
             </View>
         )
     }
}

const styles = StyleSheet.create({
    container: {
        width:"90%",
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center',
        

    },
});