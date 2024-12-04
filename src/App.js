import React, { useState, useEffect, useCallback } from "react";
import { getCharacters } from "./api/api";
import FilterComponent from "./components/FilterComponent";
import TableComponent from "./components/TableComponent";
import PaginationComponent from "./components/PaginationComponent";
import {
  Container,
  Typography,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import appStyles from "../src/styles/appStyles";

const App = () => {
  const [characters, setCharacters] = useState([]); // Karakter listesi
  const [loading, setLoading] = useState(false); // Yüklenme durumu
  const [error, setError] = useState(null); // Hata durumu
  const [filters, setFilters] = useState({}); // Filtre parametreleri
  const [page, setPage] = useState(1); // Sayfa numarası
  const [pageSize, setPageSize] = useState(10); // Sayfa başına sonuç sayısı
  const [totalRecords, setTotalRecords] = useState(0); // Toplam kayıt sayısı

  // API'den karakterleri getiren fonksiyon
  const fetchCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCharacters({ ...filters, page });
      // Sayfa boyutuna göre veri kesiliyor
      const slicedData = data.results.slice(0, pageSize);
      setCharacters(slicedData || []);
      setTotalRecords(data.info.count); // API'den gelen toplam kayıt sayısını al
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [filters, page, pageSize]);

  // Sayfa ve filtre değiştikçe API çağrısı yap
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <Container sx={appStyles.container}>
      {/* Başlık */}
      <Typography variant="h3" component="h1" sx={appStyles.title}>
        Rick and Morty Karakterleri
      </Typography>

      {/* Filtreleme Bileşeni */}
      <FilterComponent setFilters={setFilters} />

      {/* Hata ve Yüklenme Durumları */}
      {error && (
        <Alert severity="error" sx={appStyles.error}>
          {error}
        </Alert>
      )}
      {loading && (
        <Box sx={appStyles.loading}>
          <CircularProgress />
        </Box>
      )}

      {/* Karakter Tablosu */}
      {!loading && !error && <TableComponent characters={characters} />}

      {/* Sayfalama */}
      <PaginationComponent
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        totalRecords={totalRecords} // Toplam kayıt sayısını geçir
      />
    </Container>
  );
};

export default App;
