import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Stack, Button, TextField } from "@mui/material";

interface ISearchBarProps {
  value: string | undefined;
  onSearch: (value: string | undefined) => void;
}
export function SearchBar(props: ISearchBarProps) {
  const [value, setValue] = useState<string | undefined>(props.value);
  return (
    <Stack direction="row" height={55}>
      <TextField
        sx={{ width: 400 }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        onClick={() => props.onSearch(value)}
      >
        Search
      </Button>
    </Stack>
  );
}
