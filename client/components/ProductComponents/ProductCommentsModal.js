import React, { useEffect, useState, useContext } from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput
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
import { ShopContext } from "../../context/ShopContext";
import { formatDate } from "../../util/formatDate";
import CommentInput from "./CommentInput";

export default (ProductInfoModal = ({
  openProductCommentsModal,
  setProductCommentsModalOpen,
  productId
}) => {
  const {} = useContext(CartContext);
  const { signedIn } = useContext(UserProfileContext);
  const { products } = useContext(ShopContext);

  const [productComments, setProductComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log(productId);
    setTimeout(() => {
      products.forEach(prod => {
        if (prod.id === productId) {
          setProductComments(prod.comments);
        }
      });
      setLoading(false);
    }, 500);

    return () => {
      // Clean up the subscription
    };
  }, []);

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
          {/* Add form to post comment */}

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
                textStyle={{
                  fontSize: height * 0.025,
                  padding: height * 0.005
                }}
                style={{
                  borderColor: colors.danger,
                  justifyContent: "flex-end"
                }}
              />
            </View>

            {/* Comment Input */}
            {signedIn && <CommentInput productId={productId} />}
            {/* Comment Input */}

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
                    <ContentBoldText style={{ fontSize: height * 0.025 }}>
                      {comment.name}
                    </ContentBoldText>
                    <ContentLightText style={{ fontSize: height * 0.025 }}>
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
    paddingVertical: height * 0.025,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    borderTopColor: "#ccc"
  },
  commentContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: height * 0.025,
    paddingTop: 5
  }
});
