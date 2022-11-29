import { FC } from "react";
import { Flex, IconButton, Center, Text, Icon } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const HomeButton: FC = () => {
    return (
        <Flex direction="row">
            <Center width="15%">
                <IconButton colorScheme="purple" isActive={false} h="65%" w="65%" size="lg" aria-label="Start" variant="solid" icon={<InfoIcon />} />
            </Center>
            <Center width="25%">
                <Text fontWeight="bold" color="#fff" fontSize={24}>Abstract</Text>
            </Center>
        </Flex >
    );
}

export { HomeButton };