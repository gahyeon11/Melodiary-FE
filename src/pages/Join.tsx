import styled from 'styled-components';
import { motion } from 'framer-motion';
const Join = () => {
  return (
    <JoinWrapper
        initial={{ y: '90%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        
    >
      <h1>Join</h1>
    </JoinWrapper>
  )
};

const JoinWrapper = styled(motion.div)`
 margin:100px;
`;

export default Join;