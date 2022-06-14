import {Flex,Text} from '@chakra-ui/react';
import Image from 'next/image'
import Adidas from '../../pages/assets/adidas.png'
import Spotify from '../../pages/assets/spotify.png'
import Asus from '../../pages/assets/asus.png'
import Nb from '../../pages/assets/nb.png'
import Bolt from '../../pages/assets/bolt.png'
import {Roll} from 'react-reveal'

export default function company({styles}){
    return (
<Flex
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    borderRadius='20px'
    width={'95vw'}
    margin={'auto'}
    backgroundColor={'rgba(180,180,180,0.2)'}
    id='Company'>
        <br />
        <hr />
        <Text fontFamily={'cursive'}
        fontSize={45}
        fontWeight={700}
        textAlign={'center'}>Companies I served (internships)</Text>
      <Flex
      justifyContent={'center'}
        className={styles.flex}>
        <Flex maxW={600} justifyContent={'center'}
    alignItems={'center'} mb={10}
    mt={10}>
            <Roll left>
            <Image src={Adidas} width={2000} height={1500} alt=""/>
            </Roll>
        </Flex>
        <Flex maxW={600} justifyContent={'center'}
                    alignItems={'center'} mb={10}
                    mt={10}>
            <Roll right>
            <Image src ={Spotify} width={500} height={200} alt=""/>
            </Roll>
        </Flex>
    </Flex>
    <Flex justifyContent={'center'}
        alignItems = {'center'}
        className={styles.flex}>
            <Flex maxW={600} justifyContent={'center'}
                    alignItems={'center'}
                    mb={10}
                    mt={10}>
            <Roll left>
            <Image src ={Asus} width={500} height={100} alt=""/>
            </Roll>
            </Flex>
            <Flex maxW={600} justifyContent={'center'}
                    alignItems={'center'} mb={10}
                    mt={10}>
                        <Roll buttom>
            <Image src ={Nb} width={500} height={400} alt=""/>
            </Roll>
            </Flex>
            <Flex maxW={600} justifyContent={'center'}
                    alignItems={'center'} mb={10}
                    mt={10}>
            <Roll right>
            <Image src ={Bolt} width={400} height={200} alt=""/>
            </Roll>
            </Flex>
    
    </Flex>
</Flex>
    );
}