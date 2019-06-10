import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
export default (ShopItem = ({ name }) => {
  return (
    <Card>
      <CardItem cardBody>
        <Image
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2013/04/07/21/30/croissant-101636_1280.jpg"
          }}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2018/05/10/00/37/leaves-3386570_1280.jpg"
            }}
          />
          <Body>
            <Text>{name}</Text>
            <Text note>GeekyAnts</Text>
          </Body>
        </Left>
      </CardItem>

      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 Likes</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>
        </Body>
        <Right>
          <Text>11h ago</Text>
        </Right>
      </CardItem>
    </Card>
  );
});
