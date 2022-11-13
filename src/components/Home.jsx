import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <Text
      color={"whiteAlpha.800"}
      fontWeight={"bold"}
      fontSize={"2rem"}
      textAlign={"center"}>
      24x7 Check Cryptocurrency Prices by Market Cap
      </Text>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"50%"}
          h={"50%"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
          margin={"auto"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-60"}
      >
        Xcrypto
      </Text>
    </Box>
  );
};

export default Home;
