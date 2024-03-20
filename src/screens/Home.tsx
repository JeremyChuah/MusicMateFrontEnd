import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
//react native elements
import { FAB } from '@rneui/themed'
//Snackbar
import Snackbar from 'react-native-snackbar'

//context API
import {AppwriteContext} from '../appwrite/AppwriteContext'

// components
import FeedElement from '../components/FeedElement'

type UserObj = {
  name: String;
  email: String;
}



const Home = () => {
  const [userData, setUserData] = useState<UserObj>()
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext)

  const handleLogout = () => {
    appwrite.logout()
    .then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: 'Logout Successful',
        duration: Snackbar.LENGTH_SHORT
      })
    })
  }

  useEffect(() => {
    appwrite.getCurrentUser()
    .then(response => {
      if (response) {
        const user: UserObj = {
          name: response.name,
          email: response.email
        }
        setUserData(user)
      }
    })
  }, [appwrite])
  

  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topLogoBubble}>
          <Text style={styles.topLogoText}>
            MusicMate
          </Text>
        </View>
        <View style={styles.qotd}> 
          <Text style={styles.qotdText}>
            What's your go-to upbeat song?
          </Text>
        </View>
        <ScrollView style={styles.feedContainer}>
          <FeedElement 
            name="Lisa Smith"
            daysLastActive={0}
            pfpPath={require('../pfps/lisa.png')}
          />
          <FeedElement 
            name="Stu Hicks"
            daysLastActive={2}
            pfpPath={require('../pfps/stu.png')}
          />
          <FeedElement 
            name="Brene Lox"
            daysLastActive={3}
            pfpPath={require('../pfps/brene.png')}
          />
        </ScrollView>
        
        <FAB
          placement="right"
          color="#f02e65"
          size="large"
          title="Logout"
          icon={{name: 'logout', color: '#FFFFFF'}}
          onPress={handleLogout}
        />
      </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  }, 
  topLogoBubble: {
    backgroundColor: '#ADD8E6',
    borderRadius: 24,
    padding: 8,
    margin: 8,
    width: '30%',
    borderWidth: 2,
    borderColor: 'black',
    
  }, 
  topLogoText: {
    color: 'black',
    textAlign: 'center'
  },
  qotd: {
    backgroundColor: '#e3b0e9',
    marginHorizontal: 64,
    borderRadius: 24,
    padding: 8,
    marginVertical: 24,


  },
  qotdText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',

  }, 
  feedContainer: {
    marginBottom: 96,
  }
});

export default Home