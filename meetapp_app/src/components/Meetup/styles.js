import styled from 'styled-components/native';

export const Container = styled.View`
  width: 335px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
`;
export const Banner = styled.Image`
  height: 150px;
  width: 335px;
  border-radius: 4px;
`;
export const Content = styled.View`
  width: 100%;
  padding: 20px;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
export const ContainerInfo = styled.View`
  padding: 15px 0;
  flex: 1;
`;
export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
export const InfoText = styled.Text`
  color: #999;
  margin-left: 5px;
  font-size: 13px;
  line-height: 22px;
`;
export const ButtonSubscribe = styled.TouchableOpacity`
  background: #f94d6a;
  padding: 15px 0;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
