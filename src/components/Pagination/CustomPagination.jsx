import React from "react";
import Pagination from "@mui/material/Pagination";

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  const handleChange = (num) => {
    setPage(num);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <Pagination
        hideNextButton
        hidePrevButton
        count={numOfPages > 500 ? 500 : numOfPages}
        variant="outlined"
        shape="rounded"
        onChange={(e) => {
          handleChange(e.target.textContent);
        }}
      />
    </div>
  );
}
