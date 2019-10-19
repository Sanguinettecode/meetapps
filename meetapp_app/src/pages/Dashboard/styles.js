import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  ContentContainerStyle: {padding: 20},
})``;

export const DateNav = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const ButtonNav = styled.TouchableOpacity`
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;
export const DateText = styled.Text`
  width: auto;
  padding: 20px 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
