import { Box, Typography, Button } from "@mui/material";
import { CardHero } from "../components/common/CardHero/CardHero";
import { useNavigate } from "react-router-dom";

export default function HopePage() {
  const navigate = useNavigate();
  return (
    <Box>
      <CardHero
        image="https://lumiere-a.akamaihd.net/v1/images/ahsoka-tentpolehero-desktop_9bd627d0.jpeg?region=0,0,1600,600"
        content={
          <Typography color="common.white">
            The Star Wars saga is inhabited by a rich and diverse array of
            characters, from the heroic Jedi and resilient Rebel fighters to the
            dark and enigmatic figures of the Sith and Imperial forces.
          </Typography>
        }
        actions={[
          <Button
            size="large"
            variant="contained"
            onClick={() => navigate("/people")}
          >
            Explore
          </Button>,
          <Button
            size="large"
            variant="outlined"
            sx={{ color: "common.white" }}
            onClick={() => navigate("/people")}
          >
            Explore
          </Button>,
        ]}
      />

      <CardHero
        image="https://assets-prd.ignimgs.com/2022/09/16/starwars-everyupcomingmovieshows-slideshow-1663359923375.jpg"
        content={
          <Typography color="common.white">
            Created by George Lucas, the Star Wars franchise revolutionized the
            science fiction genre with its iconic characters, groundbreaking
            special effects, and timeless tale of heroism and the struggle
            between good and evil.
          </Typography>
        }
        actions={[
          <Button size="large" variant="contained" onClick={() => navigate("/films")}>
            Explore
          </Button>,
        ]}
      />

      <CardHero
        image="https://lumiere-a.akamaihd.net/v1/images/sw-summer-games-sashsingle-hero-desktop_4780553e.jpeg?region=0,0,2048,878"
        content={
          <Typography color="common.white">
           The Star Wars galaxy teems with diverse species, from the wise Yoda's kind to the towering Wookiees, each adding unique characteristics and richness to the expansive universe.
          </Typography>
        }
        actions={[
          <Button size="large" variant="contained" onClick={() => navigate("/species")}>
            Explore
          </Button>,
        ]}
      />
    </Box>
  );
}
