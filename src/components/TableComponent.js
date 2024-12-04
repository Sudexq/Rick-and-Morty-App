import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";
import tableStyles from "../styles/tableStyles"

const TableComponent = ({ characters }) => {
  const [sortOrder, setSortOrder] = useState("asc"); // Sıralama düzeni (asc veya desc)

  // İsim alanı üzerinden sıralama işlemi
  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const handleSort = () => {
    // Sıralama düzenini tersine çevir
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  if (characters.length === 0) {
    return <div>Sonuç bulunamadı!</div>;
  }

  return (
    <TableContainer component={Paper} sx={tableStyles.container}>
      <Table>
        <TableHead>
          <TableRow>
            {/* Sıralama için İsim Başlığı */}
            <TableCell sx={tableStyles.textStyle}>
              <TableSortLabel active direction={sortOrder} onClick={handleSort}>
                İsim
              </TableSortLabel>
            </TableCell>
            <TableCell sx={tableStyles.textStyle}>Tür</TableCell>
            <TableCell sx={tableStyles.textStyle}>Durum</TableCell>
            <TableCell sx={tableStyles.textStyle}>Cinsiyet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedCharacters.map((character) => (
            <TableRow key={character.id}>
              <TableCell>{character.name}</TableCell>
              <TableCell>{character.species}</TableCell>
              <TableCell>{character.status}</TableCell>
              <TableCell>{character.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
