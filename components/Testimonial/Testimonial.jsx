import {Flex,Text} from '@chakra-ui/react';
import CSS from '../../pages/assets/css.png'
import Figma from '../../pages/assets/figma.png'
import Flutter from '../../pages/assets/flutter.png'
import HTML5 from '../../pages/assets/html.png'
import JavaScript from '../../pages/assets/javascript.png'
import Cpp from '../../pages/assets/cpp.png'
import Git from '../../pages/assets/git.png'
import GraphQL from '../../pages/assets/graphql.png'
import {Bounce,Fade} from 'react-reveal';
import Next from '../../pages/assets/next.svg.png'
import Redux from '../../pages/assets/redux.png'
import Sass from '../../pages/assets/sass.png'
import MU from '../../pages/assets/mu5.png'
import Node from '../../pages/assets/node.png'
import Python from '../../pages/assets/python.png'
import Vue from '../../pages/assets/vue.png'
import TS from '../../pages/assets/typescript.png'

import Image from 'next/image';

export default function Testimonial(){
    return(
       <div> 
       <Flex
       id="Testimonials"
       mt={10}
       mb={5}
       justifyContent={'center'}
       alignItems={'center'}
       >
        <Text fontSize={45}
            fontFamily={'cursive'}
            fontWeight={900} id='Skills'>
                    Skilled Gathered on :
            </Text>
       </Flex>
       
       <Flex
            width={'full'}
            flexDirection={'column'}
            maxWidth={'90vw'}
            margin={'auto'}
            mt={20}
            mb={0}
            borderRadius={'18px'}
            justifyContent={'center'}
            
            >
            <Flex
                width={'full'}
                margin={'auto'}
                justifyContent={'space-evenly'}
                className={'animation'}
                >
                <Bounce>
                    <Fade top left>
                    <Image src={CSS}
                    alt=""
                        height={120}
                        width={120} />
                    </Fade>
                </Bounce>
                <Bounce>
                    <Fade top>
                    <Image src={Figma}
                        height={120}
                        width={120} 
                        alt="" />
                    </Fade>
                </Bounce>
                <Bounce>
                    <Fade top right>
                    <Image src={Flutter}
                        height={120}
                        width={120}
                        alt="" />
                    </Fade>
                </Bounce>
            </Flex>
            <Flex 
                width={'full'}
                margin={'auto'}
                justifyContent={'space-evenly'}>
            <Bounce>
                <Fade left>
                <Image src={HTML5}
                    height={120}
                    width={120} />
                </Fade>
            </Bounce>
            <Bounce>
                <Fade>
                <Image src={JavaScript}
                alt=""
                    height={120}
                    width={120} />
                </Fade>
            </Bounce>
            <Bounce>
            <Fade right>
                <Image src={Git}
                alt=""
                    height={120}
                    width={120} />
                </Fade>
            </Bounce>
        </Flex>
        <Flex
            width={'full'}
            margin={'auto'}
            justifyContent={'space-evenly'}>
                <Bounce>
                <Fade buttom left>
                    <Image src={Cpp}
                        height={120}
                        width={120}
                        alt="" />
                    </Fade>
                </Bounce>
                <Bounce>
                    <Fade>
                    <Image src={Python}
                        height={120}
                        width={120}
                        alt="" />
                    </Fade>
                </Bounce>
                <Bounce>
                    <Fade bottom right>
                    <Image src={Next}
                        height={120}
                        width={120} 
                        alt=""
                        />
                    </Fade>
                </Bounce>
            </Flex>
            <Flex
            width={'full'}
            margin={'auto'}
            justifyContent={'space-evenly'}>
                <Bounce>
                <Fade buttom left>
                    <Image src={Redux}
                        height={120}
                        width={120}
                        alt="" />
                    </Fade>
                </Bounce>
                <Bounce>
                    <Fade bottom >
                    <Image src={Sass}
                        height={120}
                        width={120}
                        alt="" />
                    </Fade>
                </Bounce>
                <Bounce>
                    <Fade bottom right>
                    <Image src={MU}
                        height={120}
                        width={120}
                        alt="" />
                    </Fade>
                </Bounce>
            </Flex>
            <Flex
            width={'full'}
            margin={'auto'}
            justifyContent={'space-evenly'}>
                <Bounce>
                <Fade buttom left>
                <Image src={GraphQL}
                        height={120}
                        width={120}
                        alt="" />
                        
                    </Fade>
                </Bounce>
                <Bounce>
                <Fade buttom >
                <Image src={Node}
                        height={120}
                        width={120}
                        alt=""
                         />
                    </Fade>
                </Bounce>
                <Bounce>
                <Fade buttom right>
                <Image src={Vue}
                        height={120}
                        width={120}
                        alt="" />
                    </Fade>
                </Bounce>
            </Flex>
            <Flex
            width={'full'}
            margin={'auto'}
            justifyContent={'space-evenly'}>
                <Bounce>
                <Fade buttom>
                <Image src={TS}
                        height={100}
                        width={100}
                        alt="" />
                    </Fade>
                </Bounce>
            </Flex>
        </Flex>
        <br />
        <hr />
        </div>
    );
}