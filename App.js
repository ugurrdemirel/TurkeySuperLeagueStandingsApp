import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator,StatusBar, ScrollView, SafeAreaView } from 'react-native';
import axios from 'react-native-axios';

export default class App extends Component {
  state = { jsonData: [], loading:false }
  componentDidMount(){
    let axiosConfig = {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    };
    this.setState({loading: true});
    axios.post(`https://mowesoft.com/api/cache.json`, axiosConfig)
    .then(response => {
        console.log(response.data);
        this.setState({jsonData: response.data});
        console.log(this.state);
        this.setState({loading: false});  
    })
  }
  renderStanding(){
    return this.state.jsonData.map((items, id) =>
      <View horizontal={true} style={{flexDirection:'row'}}>
        <View style={{...styles.TabloIcerigiMin, backgroundColor:items.position==1||items.position==2?"#2196F3":items.position==3||items.position==4?"#FF9800":'white'}}>
          <Text style={{textAlign:'center', color:items.position==1||items.position==2?"white":"black"}}>{items.position}</Text>
        </View>
        <View style={styles.TabloIcerigiTakimlar}>
          <Image style={{width: 32, height:32, marginRight:5}} source={{uri: items.logo}}></Image>
          <Text>{items.teamname}</Text>
        </View>
        <View style={styles.TabloIcerigiMin}>
          <Text>{items.played}</Text>
        </View>
        <View style={styles.TabloIcerigiMin}>
          <Text>{items.won}</Text>
        </View>
        <View style={styles.TabloIcerigiMin}>
          <Text>{(items.played)-(items.won+items.lost)}</Text>
        </View>
        <View style={styles.TabloIcerigiMin}>
          <Text>{items.lost}</Text>
        </View>
        <View style={styles.TabloIcerigiMin}>
          <Text>{items.against+items.average}</Text>
        </View>
        <View style={styles.TabloIcerigiMin}>
          <Text>{items.against}</Text>
        </View>
        <View style={styles.TabloIcerigiMin}>
          <Text>{items.average}</Text>
        </View>
        <View style={styles.TabloIcerigiMin}>
          <Text>{items.point}</Text>
        </View>
      </View>
    )
  }
  render() {
    if(this.state.loading == true)
    {
      return(
        <View style={{backgroundColor:'white', justifyContent:'center', alignItems:'center', flex:1}}>
          <ActivityIndicator size={"large"}></ActivityIndicator>
        </View>
      )
    }else{
      return(
        <SafeAreaView style={{backgroundColor:'#D32F2F'}}>
        <ScrollView style={{backgroundColor:'white'}} horizontal={true}>
          <ScrollView>
          <View style={styles.TitleView}>
              <Text style={{color:'white', fontSize: 20}}>Turkey Super League Standings</Text>
            </View>
          <StatusBar backgroundColor={"#D32F2F"}/>
            <ScrollView bounces={false} style={styles.TableView}>
                <View style={{flexDirection:'row', backgroundColor:'white'}}>
                  <View style={styles.TabloIcerigiMin}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}></Text>
                  </View>
                  <View style={{...styles.TabloIcerigiTakimlar, justifyContent:'center'}}>
                    <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>Teams</Text>
                  </View>
                  <View style={styles.TabloIcerigiMin}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>MP</Text>
                  </View>
                  <View style={styles.TabloIcerigiMin}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>W</Text>
                  </View>
                  <View style={styles.TabloIcerigiMin}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>D</Text>
                  </View>
                  <View style={styles.TabloIcerigiMin}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>L</Text>
                  </View>
                  <View style={styles.TabloIcerigiMin}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>GF</Text>
                  </View>
                  <View style={styles.TabloIcerigiMin}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>GA</Text>
                  </View>
                  <View style={styles.TabloIcerigiMin}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>GD</Text>
                  </View>
                  <View style={styles.TabloIcerigiMin}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>P</Text>
                  </View>
                </View>
                {this.renderStanding()}
            </ScrollView>
          </ScrollView>
        </ScrollView>
        </SafeAreaView>
      )
    }
  }
}

const styles = StyleSheet.create({
  MainView: {
    flex:1
  },
  TitleView: {
    flex:0.1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#D32F2F'
  },
  TableView:{
    flex:0.7
  },
  TabloIcerigiTakimlar:{
    width: 230,
    height: 40,
    justifyContent:'flex-start',
    alignItems:'center',
    borderRightWidth:1,
    borderBottomWidth:1,
    flexDirection:'row',
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor:'white'
  },
  TabloIcerigiMin:{
    width: 40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:1,
    borderBottomWidth:1,
    flexDirection:'row',
    backgroundColor:'white'
  }
})