import { Box } from '@chakra-ui/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomeButton } from '../components/start/HomeButton';

export default {
    title: "Landing/HomeButton",
    component: HomeButton,
    parameters: {
        layout: "fullscreen"
    }
} as ComponentMeta<typeof HomeButton>;

const Template: ComponentStory<typeof HomeButton> = (args) => {
    return <Box bg="#000" w={500} h={100} alignContent="center" >
        <HomeButton />
    </Box>
};

export const Default = Template.bind({});
