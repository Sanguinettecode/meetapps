import React from 'react';
import Proptypes from 'prop-types';
import {ActivityIndicator} from 'react-native';

import {Container, Text} from './styles';

export default function Button({children, loading, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: Proptypes.string.isRequired,
  loading: Proptypes.bool,
};

Button.defaultProps = {
  loading: false,
};
