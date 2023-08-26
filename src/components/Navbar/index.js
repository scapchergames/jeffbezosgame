import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

function Navbar() {
    return (
        <Box alignItems='center' mb={5}>
            <Image src='https://tr.web.img4.acsta.net/pictures/22/08/31/17/40/2573138.jpg' height={150} m='auto' borderRadius='full' />
            <Text fontSize={40} mt={2} mb={2} fontWeight={700}>Spend Jeff Bezos' Money</Text>
        </Box>
       
    );
}

export default Navbar;
