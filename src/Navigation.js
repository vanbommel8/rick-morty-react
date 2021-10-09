import React from "react";
import { Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Badge from "@mui/material/Badge";

export default function Navigation({ page, setPage, maxPage }) {
  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button
            onClick={() => page <= 1 ? setPage(maxPage) : setPage((prevState) => prevState - 1)}
            variant='contained'
            // disabled={page <= 1}
            startIcon={<NavigateBeforeIcon />}>
            Previous
          </Button>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex" }}>
          <Badge badgeContent={page} sx={{ mx: "auto" }} color='primary'>
            <InsertDriveFileIcon color='action' />
          </Badge>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex" }}>
          <Button
            onClick={() => page === maxPage ? setPage(1) : setPage((prevState) => prevState + 1)}
            variant='contained'
            // disabled={page === maxPage}
            endIcon={<NavigateNextIcon />}
            sx={{ ml: "auto" }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}