import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

const ResultDetail = (result) => {
    return(
        <View>
            <Image 
            source={{ uri: result.image_url }}
            style={styles.image}
            />
            <Text>
                {result.name}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    image:{
        width:250,
        height:120,
        borderRadius:4,
    }
});

export default ResultDetail;