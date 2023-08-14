import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetFilmsQuery } from "../app/services/api";
import { Pagination, Box, Typography, Stack } from "@mui/material";
import { CardInfo } from "../components/common/CardInfo/CardInfo";
import { CardInfoSkeleton } from "../components/common/CardInfo/CardInfoSkeleton";
import { SearchBar } from "../components/common/SearchBar/SearchBar";
import { EmptyState } from "../components/common/EmptyState/EmptyState";
import { DoDisturb } from "@mui/icons-material";

export default function People() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const page = Number(params.get("page")) || 1;
  const search = params.get("search") || "";
  const { data, error, isFetching } = useGetFilmsQuery({ page, search });
  if (error)
    return (
      <EmptyState
        Icon={<DoDisturb sx={{ fontSize: "100px" }} />}
        title="Something went wrong."
        description="Try again later."
      />
    );
  return (
    <Stack
      sx={{
        m: 4,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        justifyContent="space-between"
        width="100%"
        mb={4}
      >
        <Typography variant="h2" component={"h2"} color="common.black">
          Films
        </Typography>
        <SearchBar
          value={search}
          onSearch={(val) =>
            val
              ? navigate(`/films?page=1&search=${val}`)
              : navigate(`/films?page=1`)
          }
        />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {isFetching ? (
          <CardInfoSkeleton repeat={10} />
        ) : data?.results.length === 0 ? (
          <EmptyState
            Icon={<DoDisturb sx={{ fontSize: "100px" }} />}
            title="No results found"
            description="Try searching for something else."
          />
        ) : (
          data?.results.map((film) => (
            <CardInfo
              key={film.title}
              image={`https://picsum.photos/500/600?random=${film.title}`}
              subtitle={film.release_date}
              title={film.title}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              actions={[
                { title: "Characters", value: film.characters.length },
                // { title: "Films", value: person.films.length },
                // { title: "Species", value: person.species.length },
              ]}
            />
          ))
        )}
      </Box>
      <Box sx={{ my: 2 }}>
        <Pagination
          count={data?.count ? Math.floor(data?.count / 10) + 1 : 1}
          page={page}
          onChange={(e, value) => navigate(`/people?page=${value}`)}
        />
      </Box>
    </Stack>
  );
}
