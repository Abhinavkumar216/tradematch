import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import TopGainers from "./TopGainers";
import TopLosers from "./TopLosers";
import { PageButton, PageContainer, PageText } from "./styles";
import Trending from "./Trending";

const TabView = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      <PageContainer>
        <PageButton $isFirst={true} onPress={() => setSelectedTab(0)}>
          <PageText $isSelected={selectedTab === 0}>Gainers</PageText>
        </PageButton>
        <PageButton onPress={() => setSelectedTab(1)}>
          <PageText $isSelected={selectedTab === 1}>Losers</PageText>
        </PageButton>
        <PageButton onPress={() => setSelectedTab(2)}>
          <PageText $isSelected={selectedTab === 2}>Trending</PageText>
        </PageButton>
      </PageContainer>

      <PagerView
        style={styles.pagerView}
        initialPage={0}
        pageMargin={20}
        onPageSelected={(e) => {
          setSelectedTab(e.nativeEvent.position);
        }}
      >
        <View key="0">
          <TopGainers />
        </View>
        <View key="1">
          <TopLosers />
        </View>
        <View key="2">
          <Trending/>
        </View>
      </PagerView>
    </View>
  );
};

export default TabView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
  },
  pagerView: {
    flex: 1,
  },
});
