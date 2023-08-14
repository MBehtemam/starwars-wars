import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  Stack,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const ActionItem = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "center",
  height: 64,
}));

type CardInfoAction = {
  title: string;
  value: string | number;
};

interface ICardInfoProps {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  actions?: CardInfoAction[];
}
export function CardInfo(props: ICardInfoProps) {
  return (
    <Card sx={{ width: { xs: "100%", md: 345 } }}>
      <CardMedia
        sx={{ height: 190 }}
        image={props.image}
        title={`${props.title} image`}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: 170,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 12,
            textTransform: "uppercase",
            color: "#EC9B3B",
            mb: 1,
          }}
        >
          {props.subtitle}
        </Typography>
        <Typography
          sx={{
            fontSize: 26,
            textAlign: "center",
            color: "black",
            fontWeight: 700,
            mb: 2,
            width: "80%",
          }}
        >
          {props.title}
        </Typography>
        <Typography sx={{ color: "#9E9E9E" }}>{props.description}</Typography>
      </CardContent>
      <CardActions sx={{ backgroundColor: "#EC9B3B", bottom: 0, flex: 1 }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ width: "100%", justifyContent: "center" }}
          divider={<Divider orientation="vertical" />}
        >
          {props.actions?.slice(0, 3).map((action, i) => (
            <ActionItem key={i}>
              <Typography
                sx={{ color: "white", fontWeight: "700", fontSize: 24 }}
              >
                {action.value}
              </Typography>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                {action.title}
              </Typography>
            </ActionItem>
          ))}
        </Stack>
      </CardActions>
    </Card>
  );
}
