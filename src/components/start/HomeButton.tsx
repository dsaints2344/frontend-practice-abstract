import { FC } from "react";
import { Flex, IconButton, Center, Text } from "@chakra-ui/react";

const HomeButton: FC = () => {
    return (
        <Flex direction="row">
            <Center width="5%">
                <IconButton aria-label="Start" color="white" variant="solid" />
            </Center>
            <Center width="5%">
                <Text fontWeight="bold" color="#fff">Abstract</Text>
            </Center>
        </Flex>
    );
}

export { HomeButton };