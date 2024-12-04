import React from "react";
import { Box, Pagination, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import PaginationStyles from "../styles/paginationStyles";

const PaginationComponent = ({ page, setPage, pageSize, setPageSize, totalRecords }) => {
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(totalRecords / pageSize);

  return (
    <Box sx={PaginationStyles.pageBox}>
      {/* Sayfa Boyutu Seçimi */}
      <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
        <InputLabel id="page-size-label">Sayfa Boyutu</InputLabel>
        <Select
          labelId="page-size-label"
          value={pageSize}
          onChange={(e) => {
            setPageSize(parseInt(e.target.value, 10));
            setPage(1); // Sayfa boyutu değiştiğinde ilk sayfaya dön
          }}
          label="Sayfa Boyutu"
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>

      {/* Sayfa Numaralandırma */}
      <Pagination
        count={totalPages} // Toplam sayfa sayısını dinamik olarak ayarla
        page={page}
        onChange={handlePageChange}
        color="primary"
        showFirstButton
        showLastButton
      />
    </Box>
  );
};

export default PaginationComponent;
