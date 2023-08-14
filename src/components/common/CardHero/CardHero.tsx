import { Card, Box, CardContent, CardActions, CardMedia } from "@mui/material";

interface ICardHeroProps {
  image: string;
  content: React.ReactNode;
  actions: React.ReactNode[];
}
function CardHero(props: ICardHeroProps) {
  return (
    <Card sx={{ position: "relative", mt: 4 }}>
      <CardMedia sx={{ height: "400px" }} image={props.image} />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardContent sx={{ width: { md: "33%", xs: "66%" } }}>
          {props.content}
        </CardContent>
        <CardActions sx={{ pl: 2 }}>{props.actions}</CardActions>
      </Box>
    </Card>
  );
}
export { CardHero };
