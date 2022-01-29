import React, { useEffect, useState } from "react";

import { Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import NavigationBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Character from "./Characters/Character";

export default function SingleCharacter() {
    const [character, setCharacter] = useState();
    const { id } = useParams();

    useEffect(() => {
        async function fetchCharacter() {
            const url = `https;//rickandmortyapi.com/api/character/${id}`;
            const response = await axios.get(url);
            if (response.status === 200) {
                setCharacter(response.data);
            }
        }

        id && fetchCharacter();
    }, []);

    return (
        <Container fixed sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: "flex" }}>
                    <Button
                        sx={{ mx: "auto" }}
                        variant='contained'
                        startIcon={<NavigationBeforeIcon />}
                    >
                        <Link to='/'>Go back characters</Link>
                    </Button>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex" }}>
                    {character ? (
                        <Character character={character} />
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}