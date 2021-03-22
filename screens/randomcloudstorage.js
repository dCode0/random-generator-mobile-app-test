import React, { FC, useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { StyledView } from "../common/styles";
import { numbers } from "../App.js";
import firestore from "../storage/firestore";
import { StackNavigationProp } from "@react-navigation/stack";


const StyledTitle = styled.Text`
  font-size: 32px;
  color: white;
  font-weight: bold;
`;

const StyledText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  margin-left: 15px;
  font-weight: bold;
  color: orange;
`;

const StyledContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 15px 15px 0;
  margin-top: 25px;
  align-items: center;
`;

const StyledHistoryItem = styled.View`
  margin: 10px;
  background-color: #262626;
  padding: 8px;
`;

const RandomCloudView: FC<{ navigation: StackNavigationProp<any> }> = ({navigation}) => {
  const [numbers, setRandomGeneratorHistory] = useState<
  RandomGeneratorHistory[]
  >([]);

  console.log(calculatorHistory)

  useEffect(() => {
    const onFocus = () => {
      firestore.getItem().then((querySnapshot) => {
        const historyObjects: RandomGeneratorHistory[] = [];
        querySnapshot.forEach((doc) => {
          historyObjects.push(doc.data() as RandomGeneratorHistory);
        });

        setRandomGeneratorHistory(historyObjects);
      });
    };

    navigation.addListener("focus", onFocus);

    return () => {
      navigation.removeListener("focus", onFocus);
    };
  }, []);

  return (
    <StyledView>
      <StyledContainer>
        <StyledTitle>History</StyledTitle>

        <FlatList
          style={styles.flatList}
          keyExtractor={(_, index) => String(index)}
          data={calculatorHistory}
          renderItem={({ item, index }) => (
            <StyledHistoryItem key={index}>
              <StyledText>Calculation: {item.equation}</StyledText>
              <StyledText>Time Stamp: {item.timestamp}</StyledText>
            </StyledHistoryItem>
          )}
        />
      </StyledContainer>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    padding: 5,
    borderRadius: 5,
    width: "100%",
  },
});

export default RandomCloudView;