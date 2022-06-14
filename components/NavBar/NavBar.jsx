import {Box,Flex,Text} from '@chakra-ui/react';
import Image from 'next/image';
import {Fade} from 'react-reveal';
import Profile from '../../pages/assets/profile.jpg'


export default function NavBar({styles}){
    return (<Flex
            width={'full'}
            justifyContent={'space-between'}
            bg={'gray.300'}
            overflow={'clip'}
            boxShadow={'5px 0 10px 0'}>
             <Fade left>
                <Flex 
                    ml={5}
                    justifyContent={'space-between'}
                    flexDirection={'column'}>
                    <Text fontWeight={1000} fontSize={45} fontFamily={'cursive'}>
                    Niladri&apos;s </Text>
                    <Text fontSize={25}>Here</Text>
                </Flex>
            
                </Fade>
                <Fade top>
                <Flex>
                <ul className={styles.ul}>
                {['Home','Skills','Testimonials','Achievements','Abouts','Company','Contact Me'].map((item,i)=>
                (
                    <li key={i}>
                        <a href={`#${item}`}>
                       <Text
                       fontWeight={700}>{item}</Text> 
                       </a>
                    </li>
                    )
                )}
            </ul>
            </Flex>
            </Fade>
             <Fade right>
            <Flex
            borderRadius={'50%'}
            overflow={'clip'}
            mr={5}>
            <Image 
            src={Profile} alt='MyPhoto'
            height={180}
            width={120}
            
            />
            </Flex>
        </Fade>
    </Flex>
    );
}