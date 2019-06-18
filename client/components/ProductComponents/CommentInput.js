import React, { useContext, useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";
import SimpleButton from "../Buttons/SimpleButton";
import { UserProfileContext } from "../../context/UserProfileContext";
import { ShopContext } from "../../context/ShopContext";
import { height } from "../../constants/Layout";

export default (CommentInput = ({ productId }) => {
  const { userId, username, email } = useContext(UserProfileContext);
  const { addComment } = useContext(ShopContext);

  const [starCount, onStarRatingPress] = useState(1);
  const [commentText, setCommentText] = useState("");

  return (
    <View style={styles.commentInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Write your comment on this product..."
        onChangeText={text => setCommentText(text)}
        value={commentText}
        multiline={true}
        editable={true}
        maxLength={250}
        numberOfLines={4}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <View style={styles.bottomPanelContainer}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={starCount}
            selectedStar={rating => onStarRatingPress(rating)}
            starSize={30}
          />
        </View>

        <SimpleButton
          onPress={() =>
            addComment(
              productId,
              userId,
              username,
              commentText,
              starCount,
              email
            )
          }
          text="POST"
          textStyle={{ fontSize: height * 0.025, padding: height * 0.005 }}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  commentInputContainer: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 0.5
  },
  textInput: {
    flex: 1,
    paddingLeft: 15,
    minHeight: height * 0.1,
    maxHeight: height * 0.4,
    fontSize: height * 0.03,
    fontFamily: "sans-light"
  },
  bottomPanelContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15
  }
});
