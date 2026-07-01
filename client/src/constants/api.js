import axios from "axios";
import { LANGUAGE_VERSIONS } from "./lecture-constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
  withCredentials: false, // override global default so public API isn't treated as credentialed
});

export const executeCode = async (language, sourceCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
