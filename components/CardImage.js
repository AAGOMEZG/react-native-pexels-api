import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Touchable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const CardImage = ({ image }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={styles.CardImage}
            onPress={() => navigation.navigate('ImageScreen', { image })}
        >
            <Image
                source={{
                    uri: image.src.portrait
                        ? image.src.portrait
                        : 'https://w7.pngwing.com/pngs/998/203/png-transparent-black-and-white-no-to-camera-logo-video-on-demand-retail-website-simple-no-miscellaneous-television-text.png',
                }}
                style={{ height: 180, width: "100%" }}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    CardImage: {
        display: 'flex',
        width: '49.5%',
        margin: 4,
        justifyContent: 'space-between',
        backgroundColor: '#2c292c',
        borderWidth: 0,
        borderRadius: 5,
    }
})

export default CardImage
