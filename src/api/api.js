import axios from "axios";

// API'nin temel URL'sini belirliyoruz.
const BASE_URL = "https://rickandmortyapi.com/api";

// Genel bir API çağrı fonksiyonu oluşturuyoruz.
export const getCharacters = async (params) => {
  try {
    const response = await axios.get(`${BASE_URL}/character`, { params });
    return response.data;
  } catch (error) {
    throw new Error("Veri alınamadı!");
  }
};
