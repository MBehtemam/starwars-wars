import { Skeleton, Stack } from "@mui/material";
interface ICardInfoSkeletonProps {
    repeat?: number;
}
export function CardInfoSkeleton({repeat = 1}: ICardInfoSkeletonProps) {
  return (
    Array.from({ length: repeat })
    .fill(0)
    .map((_, i: number) =>
    <Stack sx={{ m: 4,  width: {xs: '100%', md: 345} }} spacing={1} key={i}>
      <Skeleton variant="rectangular" width={"100%"} height={190} />
      <Skeleton
        variant="rectangular"
        width={50}
        height={10}
        sx={{ alignSelf: "center" }}
      />
      <Skeleton variant="rectangular" width={"100%"} height={10} />
      <Skeleton variant="rectangular" width={"100%"} height={20} />
        <Skeleton variant="rectangular" height={50} />
    </Stack>)
  );
}
