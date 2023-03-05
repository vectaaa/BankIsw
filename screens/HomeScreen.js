import React from 'react';
import {View, Text, StyleSheet,SafeAreaView,Image, ScrollView, useState ,StatusBar, Button} from 'react-native';
import ISWLogo from "../assets/grafik2.png"

  import Category from "../component/Explore/Category";
  import CirlceCard from "../component/Explore/Circlecard";
  import Paybills from "../assets/paybills.png";
  import Transfers from "../assets/transfers.png";
  import Virtualcard from "../assets/virtualcard.png";
  import Qrpayments from "../assets/qrpayment.png";
  import Buyairtime from "../assets/buyairtime.png";
  import Loans from "../assets/loans.png";

const HomeScreen = ({ navigation }) => {
  // const displayYes = "flex";
  // const displayNo = "none";
  // const [home, setHome] = useState(displayYes);
  // const [settings, setSettings] = useState(displayNo);
    return (
      <SafeAreaView>
          <View style={styles.root}>
            <View style={styles.arrangeTop}>
            
              {/* <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Drawer");
                }}
              > 
                <Image source={Hamburger} />
              </TouchableOpacity> */}
  
              <Image source={ISWLogo} />
            </View>
            <View >
              <Text style={styles.macc}>My Accounts{}</Text>
  
              {/* Scroll View Cards */}
              <View style={{ height: 130 }}>
                <ScrollView scrollEventThrottle={16} horizontal>
                  <Category
                    account="Accounts: 123456789"
                    balance="Balance: ₦10,000"
                  />
                  <Category
                    account="Accounts: 123456789"
                    balance="Balance: ₦20,000"
                  />
                  <Category
                    account="Accounts: 123456789"
                    balance="Balance: ₦30,000"
                  />
                  <Category
                    account="Accounts: 123456789"
                    balance="Balance: ₦40,000"
                  />
                  <Category
                    account="Accounts: 123456789"
                    balance="Balance: ₦50,000"
                  />
                </ScrollView>
              </View>
  
              {/* Images with Icons */}
              <View style={styles.circlecardrow}>
                <CirlceCard textImage="Transfers">
                  <Image source={Transfers} />
                </CirlceCard>
  
                <CirlceCard textImage="Pay Bills">
                  <Image source={Paybills} />
                </CirlceCard>
                <CirlceCard textImage="Buy Airtime">
                  <Image source={Buyairtime} />
                </CirlceCard>
              </View>
              <View style={styles.circlecardrow1}>
                <CirlceCard textImage="QR Payment">
                  <Image source={Qrpayments} />
                </CirlceCard>
                <CirlceCard textImage="Loans">
                  <Image source={Loans} />
                </CirlceCard>
                <CirlceCard textImage="Virtual Cards">
                  <Image source={Virtualcard} />
                </CirlceCard>
              </View>
             
            </View>
  
           
          </View>
        </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    settings: {
    },
    circlecardrow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      paddingBottom: 20,
      paddingTop: 20,
    },
    circlecardrow1: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      paddingBottom: 20,
      paddingTop: 20,
    },
    root: {
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    arrangeTop: {
      justifyContent: "space-between",
      flexDirection: "row",
      padding: 10,
      marginTop: 40,
    },
    macc: {
      padding: 20,
      paddingLeft: 20,
      fontSize: 20,
    },
    card: {
      backgroundColor: "#f5f4f4",
      height: 40,
      with: 60,
    },
    bottomnav: {
      position: "absolute",
      flex: 0.1,
      left: 0,
      right: 0,
      bottom: -330,
      backgroundColor: "#dc2d2d",
      flexDirection: "row",
      height: 80,
      alignItems: "center",
    },
    arr: {
      flexDirection: "row",
      height: 60,
      width: "100%",
  
      alignItems: "center",
      padding: 20,
      paddingTop: 10.5,
      justifyContent: "space-between",
    },
  });


  export default HomeScreen;

 