import { Image, StyleSheet } from "react-native";
import React from "react";

const Avatar = ({
  image = "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=1380&t=st=1691230426~exp=1691231026~hmac=66f93bb50df448e4583f7d7c088092312d67df6f365c926323f7c5efffb62371",
}) => {
  return (
    <Image source={{ uri: image }} style={styles.avatar} resizeMode="cover" />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    height: 75,
    width: 75,
    borderRadius: 18,
  },
});
