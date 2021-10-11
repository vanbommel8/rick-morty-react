import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";
import axios from "axios";

export default function Characters({ page, setMaxPage }) {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      if (response.status === 200) {
        setCharacters(response.data.results);
        setMaxPage(response.data.info.pages);
    }
  }
    fetchData();
  }, [page, setMaxPage]);

  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {characters.map((character) => {
          return (
            <Grid item xs={3} key={character.id}>
              <Character {...character} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
