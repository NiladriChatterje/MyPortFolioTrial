import {Flex,Box,Text, textDecoration} from '@chakra-ui/react';
import Image from 'next/image';
import {Fade} from 'react-reveal';
import About01 from '../../pages/assets/about01.png';
import About02 from '../../pages/assets/about02.png';
import About03 from '../../pages/assets/about03.png';
import About04 from '../../pages/assets/about04.png';

export default function Achievement({styles}){
    return <Flex
            id='Achievements'
            mt={5}
            alignItems={'center'}
            margin={'auto'}
            borderRadius='20px'
            backgroundColor={'rgba(200,200,200,0.2)'}
            justifyContent={'center'}
            width={'95vw'}
            flexDirection={'column'}>
            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Fade top>
                <Text fontSize={'4.6rem'} fontFamily={'cursive'}
                    fontWeight={900}>Achievements!!</Text>
                </Fade>
                <Fade buttom>
                    <Text fontSize={50} fontFamily={'cursive'} color={'blue.300'}
                    fontWeight={900}>as Title</Text>
                </Fade>
            </Flex>
        <Flex
            justifyContent={'space-evenly'}
            width={'88vw'}
            className={styles.flex}>
                <Fade left>
                <Flex
                boxShadow={'-3px 5px 10px 0'}
                borderRadius={'15px'}
                justifyContent={'center'}
                width={'200px'}
                height={'200px'}
                flexDirection={'column'}
                bg={'purple.100'}
                mb={10}
                mt={5}
                >
                    <Image src={About01} height={1050} alt="prop"/>
                    <Text fontWeight={800}>TEAM COLLABORATION</Text>
                </Flex>
                </Fade>
                <Fade right>
                <Flex
                boxShadow={'3px 5px 10px 0'}
                borderRadius={'15px'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'200px'}
                height={'200px'}
                overflow={'clip'}
                flexDirection={'column'}
                bg={'purple.100'}
                mb={10}
                mt={5}
                >
                    <Image src={About02} width={500} alt=""/>
                    <Text fontWeight={800}>Practitioners</Text>
                </Flex>
                </Fade>

        </Flex>
        <Flex
        justifyContent={'space-evenly'}
        width={'88vw'}
        className={styles.flex}>
            <Fade left>
            <Flex
                boxShadow={'-3px 5px 10px 0'}
                borderRadius={'15px'}
                justifyContent={'center'}
                width={'200px'}
                height={'200px'}
                flexDirection={'column'}
                bg={'purple.100'}
                textAlign={'center'}
                mb={10}
                mt={5}
                >
                    <Image src={About03} height={1050} alt=""/>
                    <Text fontWeight={800}>Competitive Coding Winner</Text>
            </Flex>
                </Fade>
                <Fade right>
                <Flex
                boxShadow={'3px 5px 10px 0'}
                borderRadius={'15px'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'200px'}
                height={'200px'}
                overflow={'clip'}
                flexDirection={'column'}
                bg={'purple.100'}
                textAlign={'center'}
                mb={10}
                mt={5}
                >
                    <Image src={About04} width={500} alt="" />
                    <Text fontWeight={800}>Designer</Text>
                </Flex>
                </Fade>
        </Flex>
    </Flex>
}