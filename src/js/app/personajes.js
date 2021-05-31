import axios from "axios";
import { localStorageGet, localStorageSet } from "../tools/localstorage";

export const LoadPersonajes = async () => {
  const personajesSaved = localStorageGet("personajes");
  if (!!!personajesSaved) {
    const resp = await axios.get("https://breakingbadapi.com/api/characters");
    if (resp.status === 200) {
      const result = resp.data;
      localStorageSet("personajes", result);
      return result;
    }
  } else return personajesSaved;
};
