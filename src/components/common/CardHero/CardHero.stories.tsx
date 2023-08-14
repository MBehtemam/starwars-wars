import type { Meta, StoryObj } from "@storybook/react";
import { Typography, Button, ThemeProvider } from "@mui/material";
import { CardHero } from "./CardHero";
import theme from "../../../share/theme";

const meta: Meta<typeof CardHero> = {
  title: "Components/CardHero",
  component: CardHero,
};

export default meta;

type Story = StoryObj<typeof CardHero>;

export const Primary: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <CardHero
        image="https://lumiere-a.akamaihd.net/v1/images/sw-summer-games-sashsingle-hero-desktop_4780553e.jpeg?region=0,0,2048,878"
        content={
          <Typography color="common.white">
            The Star Wars galaxy teems with diverse species, from the wise
            Yoda's kind to the towering Wookiees, each adding unique
            characteristics and richness to the expansive universe.
          </Typography>
        }
        actions={[
          <Button
            size="large"
            variant="contained"
            onClick={() => console.log("click")}
          >
            Explore
          </Button>,
          <Button
            size="large"
            variant="outlined"
            onClick={() => console.log("click")}
          >
            Explore
          </Button>,
        ]}
      />
    </ThemeProvider>
  ),
};
