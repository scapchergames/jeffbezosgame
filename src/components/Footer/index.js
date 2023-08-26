import { Box,Text,Button } from '@chakra-ui/react';
import React from 'react';
import { SiLinkedin,SiGithub, SiInstagram  } from 'react-icons/si';

function Footer() {
  return (
    <Box height={100}  alignItems='center' backgroundColor='Black' m='auto'>
    <Text mt={5} mb={5} color='white' >Melih Bahri</Text>
    <Button me={5} type='linkedin'  leftIcon={<SiLinkedin />} >
    <a href='https://www.linkedin.com/in/melihbahri/' target='_blank'>Linkedin</a>
  </Button>
  <Button  colorScheme='gray' leftIcon={<SiInstagram />} >
    <a href='https://instagram.com/in/melihbahri' target='_blank'>Instagram</a>
  </Button>

    </Box>
  )
}

export default Footer;
