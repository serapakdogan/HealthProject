import React, { Component } from 'react';
import { View, Text, ScrollView , Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';



const {width, height} = Dimensions.get('window');

class Diet extends Component {
    render() {
        return (
            <View style={{ flex:1 }}>
               
                <View style={{height: height * 0.07, backgroundColor:'white', elevation: 5
            }}>
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: 'center',
                    color: '#000',
                    marginTop: 11,
                    fontFamily: 'cochin',
                  }}>
                  
                Healthy Recipes
                </Text>
                <Icon
                  name="arrow-back-outline"
                  size={28}
                  color="#000"
                  style={{bottom: 30, paddingLeft: 10}}
                  onPress={() => Actions.push('main')}
                  
                />
              </View>
              <ScrollView style= {{ height: height}}>
              <View
            style={{
              justifyContent: 'space-between', backgroundColor: '#white'}}>
             
            
            <View
              style={{
                backgroundColor:'white',
                elevation:8,
                justifyContent: 'space-around',
                height: height*0.35, borderRadius:7, margin: 5
              }}>
        
                <Image 
                  style={{
                   height:" 58%", width:"100%", 
                     borderTopLeftRadius:7, borderTopRightRadius:7 }}         
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2019/08/20/09/10/breakfast-4418234_960_720.jpg', }} />
                  
                  <Text style ={{ fontSize: 18, textAlign: 'left', color: '#000', marginTop: 15 , paddingLeft: 10, fontWeight:'500'}} > Smoothie Bowl </Text>
                  <Text style={{ fontSize: 14, color: '#0006', marginTop: 10, paddingLeft:15}}>A healthy breakfast alternative enriched with oats, chia and fruits</Text>
                  <Icon 
                     name="arrow-forward-outline"
                     size={22}
                     color="#0004"
                     style={{ textAlign:'right', paddingRight:10}}
                     onPress={() =>  Actions.push('recipes')}
                  />

                  <Icon 
                     name="star"
                     size={14}
                     color="red"
                     style={{ textAlign:'left', paddingLeft: 18, bottom: 13}}
                  > 4.5 </Icon>
              </View>

              <View
              style={{
                backgroundColor:'white',
                elevation:10,
                justifyContent: 'space-around',
                height: height*0.35, borderRadius:7, margin: 5
              }}>
        
                <Image 
                  style={{
                   height:" 58%", width:"100%", 
                     borderTopLeftRadius:7, borderTopRightRadius:7 }}         
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_960_720.jpg', }} />
                  
                  <Text style ={{ fontSize: 18, textAlign: 'left', color: '#000', marginTop: 15 , paddingLeft: 10, fontWeight:'500'}} > Grilled Meat Balls </Text>
                  <Text style={{ fontSize: 14, color: '#0006', marginTop: 2, paddingLeft:15}}>Fat-free, delicious sports menu</Text>
                  <Icon 
                     name="arrow-forward-outline"
                     size={22}
                     color="#0004"
                     style={{ textAlign:'right', paddingRight:10}}
                     onPress={() =>  Actions.push('recipes1')}
                  />

                  <Icon 
                     name="star"
                     size={14}
                     color="red"
                     style={{ textAlign:'left', paddingLeft: 18, bottom: 13}}
                  > 4.5 </Icon>
              </View>

              <View
              style={{
                backgroundColor:'white',
                elevation:10,
                justifyContent: 'space-around',
                height: height*0.35, borderRadius:7, margin: 5
              }}>
        
                <Image 
                  style={{
                   height:" 58%", width:"100%", 
                     borderTopLeftRadius:7, borderTopRightRadius:7 }}         
                source={{
                  uri: 'https://img-global.cpcdn.com/recipes/f37978f898d327cf/680x482cq70/chicken-chickpea-salad-recipe-main-photo.jpg', }} />
                  
                  <Text style ={{ fontSize: 18, textAlign: 'left', color: '#000', marginTop: 15 , paddingLeft: 10, fontWeight:'500'}} > Chicken Chickpea Salad </Text>
                  <Text style={{ fontSize: 14, color: '#0006', marginTop:4 , paddingLeft:15}}> A protein store formed by the combination of chickpeas, chicken and vegetables</Text>
                  <Icon 
                     name="arrow-forward-outline"
                     size={22}
                     color="#0004"
                     style={{ textAlign:'right', paddingRight:10}}
                     onPress={() =>  Actions.push('recipes2')}
                  />
                  <Icon 
                     name="star"
                     size={14}
                     color="red"
                     style={{ textAlign:'left', paddingLeft: 18, bottom: 13}}
                  > 4.5 </Icon>
              </View>

              
              <View
              style={{
                backgroundColor:'white',
                elevation:10,
                justifyContent: 'space-around',
                height: height*0.35, borderRadius:7, margin: 5
              }}>
        
                <Image 
                  style={{
                   height:" 58%", width:"100%", 
                     borderTopLeftRadius:7, borderTopRightRadius:7 }}         
                source={{
                  uri: 'https://www.mealgarden.com/media/recipe/2021/04/bigstock-Avocado-Egg-Sandwiches-For-Hea-412612594.jpeg', }} />
                  
                  <Text style ={{ fontSize: 18, textAlign: 'left', color: '#000', marginTop: 15 , paddingLeft: 10, fontWeight:'500'}} > Avocado Toast with Egg </Text>
                  <Text style={{ fontSize: 14, color: '#0006', marginTop: 3, paddingLeft:15}}> Asunny-side upp egg on toast with avocado, just like grandma used to make </Text>
                  <Icon 
                     name="arrow-forward-outline"
                     size={22}
                     color="#0004"
                     style={{ textAlign:'right', paddingRight:10}}
                     onPress={() =>  Actions.push('recipes3')}
                  />
                  <Icon 
                     name="star"
                     size={14}
                     color="red"
                     style={{ textAlign:'left', paddingLeft: 18, bottom: 13}}
                  > 4.5 </Icon>
              </View>

              <View
              style={{
                backgroundColor:'white',
                elevation:10,
                justifyContent: 'space-around',
                height: height*0.35, borderRadius:7, margin: 5
              }}>
        
                <Image 
                  style={{
                   height:" 58%", width:"100%", 
                     borderTopLeftRadius:7, borderTopRightRadius:7 }}         
                source={{
                  uri: 'http://gourmetwithblakely.com/wp-content/uploads/2017/06/no-bake-energy-bites-1024x512.jpeg', }} />
                  
                  <Text style ={{ fontSize: 18, textAlign: 'left', color: '#000', marginTop: 15 , paddingLeft: 10, fontWeight:'500'}} > No Bake Energy Bıtes </Text>
                  <Text style={{ fontSize: 14, color: '#0006', marginTop: 3, paddingLeft:15}}> The perfect on-the-go healthy recipe that tastes like you’re eating cookie dough. </Text>
                  <Icon 
                     name="arrow-forward-outline"
                     size={22}
                     color="#0004"
                     style={{ textAlign:'right', paddingRight:10}}
                     onPress={() =>  Actions.push('recipes4')}
                  />
                  <Icon 
                     name="star"
                     size={14}
                     color="red"
                     style={{ textAlign:'left', paddingLeft: 18, bottom: 13}}
                  > 4.5 </Icon>
              </View>

              </View>

              


                    

                </ScrollView>

            </View>


        )

} }

export default Diet;