import React from "react";
import { FlatList } from "react-native";
import { AvatarCollection, Wrapper } from "../styles";

const Collection = () => {
  return (
    <FlatList
      data={[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ]}
      contentContainerStyle={{
        justifyContent: "space-evenly",
      }}
      numColumns={4}
      showsVerticalScrollIndicator={false}
      renderItem={() => <AvatarWrapper />}
    />
  );
};

export default Collection;

const AvatarWrapper = () => {
  return (
    <Wrapper>
      <AvatarCollection
        source={require("@/src/assets/images/avatars/avatar1.jpeg")}
      />
    </Wrapper>
  );
};
