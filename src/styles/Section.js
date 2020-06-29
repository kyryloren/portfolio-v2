import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Section = styled(motion.section)`
  margin: 0 auto;
  padding: ${(props) => (props.hero ? '150px 150px 0 0' : '70px 0')};
  max-width: 1000px;
  @media (max-width: 48em) {
    padding: ${(props) => (props.hero ? '100px 100px 0 0;' : '50px 0;')};
  }
`;

export default Section;
