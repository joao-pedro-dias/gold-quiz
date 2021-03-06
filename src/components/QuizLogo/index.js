import styled from 'styled-components';
import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

function Logo() {
  return (
    <Image
      src="/Logo2.png"
      alt="Quiz - GoldSystem"
      width={350}
      height={210}
    />
  );
}

Logo.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
