import React, { useEffect, useState, useContext } from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text
} from "react-native";
import StarRating from "react-native-star-rating";

import {
  Thumbnail,
  Card,
  Left,
  Body,
  Spinner,
  List,
  ListItem,
  Icon
} from "native-base";
import Modal from "react-native-modal";

import { height } from "../../constants/Layout";
import colors from "../../constants/Colors";
import { CartContext } from "../../context/CartContext";
import { UserProfileContext } from "../../context/UserProfileContext";
import { TitleText, ContentLightText, ContentBoldText } from "../StyledText";
import SimpleButton from "../Buttons/SimpleButton";

export default (ProductInfoModal = ({
  openProductCommentsModal,
  setProductCommentsModalOpen,
  productId
}) => {
  const {} = useContext(CartContext);
  const {} = useContext(UserProfileContext);
  const [productComments, setProductComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // console.log(productId);
    setTimeout(() => {
      setProductComments([
        {
          id: 1,
          name: "Joe Johnes",
          text: "Great products",
          rating: 5,
          avatar: "https://api.adorable.io/avatars/285/joe.james@gmail.com.png",
          timeStamp: Date.now()
        },
        {
          id: 2,
          name: "Terry Johnes",
          text:
            "Shit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit productShit product",
          rating: 1,
          avatar: "https://api.adorable.io/avatars/285/joe.es@gmail.com.png",
          timeStamp: Date.now()
        },
        {
          id: 3,
          name: "Some One Else",
          text: "Okay Quality",
          rating: 3,
          avatar: "https://api.adorable.io/avatars/285/joe.jam@mail.com.png",
          timeStamp: Date.now()
        }
      ]);
      setLoading(false);
    }, 500);
    return () => {
      // Clean up the subscription
    };
  }, []);

  const formatDate = date => {
    const newDate = new Date(date).toUTCString();
    const localDate = new Date(newDate).toLocaleDateString();

    return `${localDate}`;
  };

  return (
    <Modal
      isVisible={openProductCommentsModal}
      useNativeDriver={true}
      backdropOpacity={0.8}
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      animationInTiming={600}
      animationOutTiming={1000}
      backdropTransitionInTiming={2000}
      backdropTransitionOutTiming={2000}
    >
      {loading ? (
        <Spinner />
      ) : (
        <Card>
          {/* Image */}
          <ScrollView>
            {/* Closing button */}
            <View
              style={{
                alignItems: "flex-end",
                position: "relative"
              }}
            >
              <SimpleButton
                onPress={() => setProductCommentsModalOpen(false)}
                text="CLOSE"
                textStyle={{ padding: 2, fontSize: 20 }}
                style={{
                  borderColor: colors.danger,
                  justifyContent: "flex-end"
                }}
              />
            </View>
            {/* ClosingButton */}
            {productComments.map((comment, i) => (
              <List key={comment.id} style={styles.listContainer}>
                <View style={styles.commentContainer}>
                  <StarRating
                    starSize={20}
                    disabled={true}
                    maxStars={5}
                    rating={comment.rating}
                  />
                  <ContentLightText note>
                    {formatDate(comment.timeStamp)}
                  </ContentLightText>
                </View>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={{ uri: comment.avatar }} />
                  </Left>
                  <Body style={{ borderColor: "transparent" }}>
                    <ContentBoldText style={{ fontSize: 20 }}>
                      {comment.name}
                    </ContentBoldText>
                    <ContentLightText style={{ fontSize: 20 }}>
                      {comment.text}
                    </ContentLightText>
                  </Body>
                </ListItem>
              </List>
            ))}
          </ScrollView>
        </Card>
      )}
    </Modal>
  );
});

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 10,
    //     borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    borderTopColor: "#ccc"
  },
  commentContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 5
  }
});
