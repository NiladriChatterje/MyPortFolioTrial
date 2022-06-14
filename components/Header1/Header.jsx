import {Box,Flex,Text} from '@chakra-ui/react';

export default function Header1({styles}){
    return (
    <Flex
        id='Home'
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'90vw'}
        margin={'auto'}
        backgroundColor={'rgba(220,220,225,0.3)'}
        borderRadius={'30px'}>
      <h1 className={styles.title} style={{overflow:'hidden'}}>
    Welcome to <Box color={'blue.500'}>my Portfolio tour</Box>
  </h1>
  <p style={{textAlign:'center',fontFamily:'cursive'
  , fontWeight:'bolder'}}>This is a temporary phase of my grinding period.<br />
    A casual site is prepared as a practice purpose,<br />
    greasing my knowlegde so far.<br />
    Data Provided are not all true.<br />
    However, not false in all sense either.<br />
    Hope you will have a good time for instance..
  </p>
  <Text fontWeight={500} fontSize={45}
  fontFamily='cursive'>
    Enjoy
  </Text>
  </Flex>);
};