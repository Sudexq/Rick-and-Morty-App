import React, { useState } from "react";
import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";
import filterStyles from "../styles/filterStyles"; // Stil dosyası

const FilterComponent = ({ setFilters }) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const applyFilters = () => {
    setFilters({ name, species, status, gender });
  };

  return (
    <Box sx={filterStyles.container}>
      {/* Başlık */}
      <Typography variant="h6" sx={filterStyles.title}>
        FİLTRELEME
      </Typography>

      {/* İsimle Filtreleme */}
      <TextField
        label="İsimle Filtrele"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={filterStyles.textField}
      />

      {/* Tür Filtreleme */}
      <TextField
        select
        label="Tür"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        sx={filterStyles.textField}
      >
        <MenuItem value="">Hepsi</MenuItem>
        <MenuItem value="Humanoid">Humanoid</MenuItem>
        <MenuItem value="Alien">Alien</MenuItem>
        <MenuItem value="Robot">Robot</MenuItem>
        <MenuItem value="Human">Human</MenuItem>
      </TextField>

      {/* Durum Filtreleme */}
      <TextField
        select
        label="Durum"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        sx={filterStyles.textField}
      >
        <MenuItem value="">Hepsi</MenuItem>
        <MenuItem value="Alive">Alive</MenuItem>
        <MenuItem value="Dead">Dead</MenuItem>
        <MenuItem value="unknown">Unknown</MenuItem>
      </TextField>

      {/* Cinsiyet Filtreleme */}
      <TextField
        select
        label="Cinsiyet"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        sx={filterStyles.textField}
      >
        <MenuItem value="">Hepsi</MenuItem>
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="Genderless">Cinsiyetsiz</MenuItem>
        <MenuItem value="unknown">Bilinmeyen</MenuItem>
      </TextField>

      {/* Filtrele Butonu */}
      <Button
        variant="contained"
        sx={filterStyles.button}
        onClick={applyFilters}
      >
        FİLTRELE
      </Button>
    </Box>
  );
};

export default FilterComponent;
