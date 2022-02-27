import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Card} from 'react-native-paper';

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = 'https://www.clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg',
    adress = ' 1000 street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        source={{
          uri: photos,
        }}
        style={styles.cover}
      />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {backgroundColor: 'white'},
  cover: {padding: 20, backgroundColor: 'white'},
  text: {padding: 16},
});
