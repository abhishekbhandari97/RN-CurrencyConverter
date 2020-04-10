import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,TextInput,TouchableOpacity,Alert,Image } from 'react-native';


const currencyPerRupee = {
  DOLLAR:   0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN:  1.54,
  DINAR: 0.0043,
  BITCOIN : 0.0000041

};



export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: "" ,
      resultValue: "0.0"
    };
  } 

  buttonPressed = currency => {
    if (this.state.inputValue === ""){
      Alert.alert("enter some value");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];
    this.setState({ resultValue: result.toFixed(2)});
  };

  render(){
  return (
    <SafeAreaView style={styles.container}>
      <View  style={styles.screenview}>
        <View style={styles.heading}>
          <Text style= {styles.title}>   CURRENCY CONVERTER</Text>
        </View>
        <View style={styles.resultcontainer}>
          <Text style={styles.resultValue}>
           {this.state.resultValue}
          </Text>
        </View>
        <View style={styles.inputContainer}>
           <TextInput 
           style={styles.input}
           selectionColor="FFF"
           keyboardType= "numeric"
           placeholder= "Enter Value"
           value={this.state.inputValue}
           onChangeText={ inputValue => 
              this.setState({
                inputValue
              })
          }
           />
        </View>
          <View style={styles.converterbuttoncontainer}>
           <TouchableOpacity 
              onPress={() => this.buttonPressed("DOLLAR")}
              style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>Dollar</Text>
           </TouchableOpacity>
           <TouchableOpacity 
              onPress={() => this.buttonPressed("POUND")}
              style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>Pound</Text>
           </TouchableOpacity>
           <TouchableOpacity 
              onPress={() => this.buttonPressed("EURO")}
              style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>Euro</Text>
           </TouchableOpacity>
           <TouchableOpacity 
              onPress={() => this.buttonPressed("YEN")}
              style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>Yen</Text>
           </TouchableOpacity><TouchableOpacity 
              onPress={() => this.buttonPressed("AUSDOLLAR")}
              style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>AusDollar</Text>
           </TouchableOpacity>
           <TouchableOpacity 
              onPress={() => this.buttonPressed("CANDOLLAR")}
              style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>CanDollar</Text>
           </TouchableOpacity>
           <TouchableOpacity 
              onPress={() => this.buttonPressed("DINAR")}
              style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>Dinar</Text>
           </TouchableOpacity>
           <TouchableOpacity 
              onPress={() => this.buttonPressed("RUBEL")}
              style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>Rubel</Text>
           </TouchableOpacity>
           <TouchableOpacity 
              onPress={() => this.buttonPressed("BITCOIN")}
              style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>Bitcoin</Text>
           </TouchableOpacity>
          </View>
        <View>
          <Image source = {require("./src/images/images.jpg")} />
        </View>
      </View>
    </SafeAreaView>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#67E6DC",
    marginTop: 20
  },

  screenview: {
    flex: 1   
  },

  heading: {
     marginTop: 20,   
  },

  title:{
    fontWeight:"bold",
    fontSize: 30,
    fontWeight: "bold",
    color: "#019031"
  },

  resultcontainer:{
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "#DAE0E2",
    backgroundColor: "#3C40C6",
    alignItems: "center",
    borderWidth: 2,
  },

  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  },

  inputContainer: {
    height: 70,
    borderWidth: 2,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#DAE0E2",
    backgroundColor: "#3C40C6"
  },
  input: {
    color: "white",
    fontSize: 30
  },

  converterbuttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderWidth:2,
    borderColor: "#DAE0E2"
  },

  converterbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF0F1",
    height: 100,
    borderColor: "white",
    borderWidth: 2,
    width:"33.3%"
  },

  converterbuttontext: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
