import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HeaderBox } from "../../components/HeaderBox";

export default {
    title: "Landing/Header",
    component: HeaderBox,
    parameters: {
        layout: "fullscreen"
    }
} as ComponentMeta<typeof HeaderBox>;

const Template: ComponentStory<typeof HeaderBox> = (args) => <HeaderBox {...args} />;

export const Empty = Template.bind({});
Empty.args = {};