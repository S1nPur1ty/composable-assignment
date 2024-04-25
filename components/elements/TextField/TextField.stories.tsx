import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";
import { IoSearchOutline } from "react-icons/io5";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "email", "password"],
      },
    },
    prependIcon: {},
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    placeholder: "Enter some text",
  },
};

export const Email: Story = {
  args: {
    placeholder: "Enter your email",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter your password",
    type: "password",
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Search...",
    prependIcon: <IoSearchOutline />,
  },
};
