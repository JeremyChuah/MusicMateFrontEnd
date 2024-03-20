import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FeedElement = (props) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.pfp}>
            <Image
            source={props.pfpPath}
            style={styles.pfpImage}
            >
            </Image>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{props.name}</Text>
            {props.daysLastActive == 0 &&
                  <Text style={styles.activeTodayText}>Active Today</Text>
            }
            {props.daysLastActive != 0 &&
                  <Text style={styles.activeStatusText}>Active {props.daysLastActive} Days Ago</Text>
            }
          </View>
        </View>
        <View style={styles.answerContainer}>
            <View style={styles.labelContainer}>
              {props.daysLastActive == 0 &&
                <Text style={styles.labelText}>Go-To Upbeat Song:</Text>
              }
              {props.daysLastActive != 0 &&
                <Text style={styles.labelText}>Favorite Song:</Text>
              }
            </View>
            <View style={styles.songBannerContainer}>
              <Image 
                source={require('../songs/taylorswift.png')}
                style={styles.songImage}
              />

            </View>
        </View>
    </SafeAreaView>
  )
}

export default FeedElement

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        marginHorizontal: 64,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: 'black',
        padding: 8,
        backgroundColor: '#ADD8E6',
    }, 
    profileContainer: {
      flexDirection: 'row',
      flex: 2,
    }, 
    answerContainer: {
      flexDirection: 'row',
      flex: 3,
      marginTop: 24,
      paddingBottom: 16,
    }, 
    name: {
      color: 'black',
      fontSize: 24,
      textAlign: 'center',
    },
    activeStatusText: {
      textAlign: 'center',
      color: 'yellow',
    },
    activeTodayText: {
      color: 'green',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    pfp: {
      flex: 1,
    }, 
    pfpImage: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
      borderRadius: 100,
    }, 
    labelContainer: {
      flex: 1,
      paddingLeft: 24,
      marginRight: 8,
      justifyContent: 'center',
    }, 
    labelText: {
      color: 'black',
      fontSize: 24,
      textAlign: 'center',
    },
    nameContainer: {
      flex: 2,
      justifyContent: 'center',
    },
    songBannerContainer: {
      flex: 1,
      marginLeft: 8,
    }, 
    songImage: {
      height: 80,
      width: 80,
    },
})