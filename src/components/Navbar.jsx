import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// icons
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("trending");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (value === "trending") navigate("/");
    else if (value === "movies") navigate("/movies");
    else if (value === "series") navigate("/series");
    else if (value === "search") navigate("/search");
  }, [value]);
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#532d5a",
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Trending"
        value="trending"
        style={{ color: "white" }}
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        label="Movies"
        value="movies"
        style={{ color: "white" }}
        icon={<MovieCreationIcon />}
      />
      <BottomNavigationAction
        label="TV series"
        value="series"
        style={{ color: "white" }}
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        label="Search"
        value="search"
        style={{ color: "white" }}
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
