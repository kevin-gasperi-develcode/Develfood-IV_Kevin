import React from 'react'
import { Image, Text } from 'react-native'
import {
  Container,
  ImageFavorite,
  ImageRate,
  ImageRestaurant,
  RateContainer,
  TextCategories,
  TextInfo,
  TextRate,
  ViewFavorite,
  ViewInfo,
} from './styles'

interface RestaurantProps {
  id?: any
  dataImage?: string
  name: string
}
export function CardRestaurant({ id, dataImage, name }: RestaurantProps) {
  return (
    <Container>
      <ImageRestaurant
        source={require('../../assets/images/restaurant-image.png')}
      />
      <ViewFavorite>
        <ImageFavorite
          source={require('../../assets/icons/favorite-white.png')}
        />
      </ViewFavorite>
      <ViewInfo>
        <TextInfo>{name}</TextInfo>
        <TextCategories>Pizza</TextCategories>
        <RateContainer>
          <ImageRate source={require('../../assets/icons/star-rate.png')} />
          <TextRate>4.3</TextRate>
        </RateContainer>
      </ViewInfo>
      {/* <ViewMod>
        <TextMod></TextMod>
      </ViewMod> */}
    </Container>
  )
}