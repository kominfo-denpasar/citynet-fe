import axios from "axios";
import { useEventStore } from "@/store/useEventStore";

const api = axios.create({
  baseURL: "https://event.denpasarkota.go.id/api",
});

api.interceptors.request.use((config) => {
  const eventStore = useEventStore();
  const token = eventStore.token; // ambil token dari Pinia
  console.log("Token from interceptor:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
