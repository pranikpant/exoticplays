import { AspectRatio, Box, Center, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import EnterButton from "../components/enterButton";
import { Dancing_Script } from "@next/font/google";
import { Inter } from '@next/font/google'

const dancingScript = Dancing_Script();
const inter = Inter();

const HomePage = () => {
    return (
        <Box height={'150vh'} width={'100%'} backgroundColor={'whiteAlpha.700'}>
        
            <Head>
                <title>Exotic Plays</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Flex height={'70vh'} alignItems={'center'} justifyContent={'center'}>
                <div style={{fontSize: '100px',  textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 25px #ff00de, 0 0 30px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de' }} 
                    className={dancingScript.className}>
                    <p>Exotic Plays</p>
                </div>
            </Flex>
            <Box height={"100vh"} width={'100%'} position={"relative"}>
                <AspectRatio position="absolute" height={"100vh"} width={'100%'} ratio={1.75} zIndex={1}>
                    <video
                        title='home'
                        autoPlay
                        muted
                        loop
                        style={{width:'100%', height:'100%', objectFit:'fill'}}
                    >
                        <source src="/videos/home.mp4" type="video/mp4"/> 
                    </video>
                </AspectRatio>
                <Box zIndex={2} style={{position:"absolute", top:'80%', left:'50%', transform: "translate(-50%, -50%)"}}> <EnterButton /> </Box>
            </Box>
        </Box>
    );
}

export default HomePage;