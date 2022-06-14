import Image from 'next/image';
import Link from 'next/link'
import {Box, Flex} from '@chakra-ui/react';
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import {Fade} from 'react-reveal'

export default function Footer({styles}){
    return(
        <Fade buttom>  
      <footer className={styles.footer} id = 'Contact Me'>
      <Flex>
        
        Contact Me on {' '}
        <Flex ml ={5}>
          <Link href={'https://www.facebook.com/souvick.dey.5454/'} target='_blank'>
          <FaFacebook size={40}/>
          </Link>
        </Flex>
        <Flex ml ={5}>
          <Link href={'https://www.instagram.com/clerk_maxw/'} target='_blank'>
          <FaInstagram size={40}/>
          </Link>
        </Flex>
        
      </Flex>
    </footer>
    </Fade>
    );
}