import axios from "axios";

const authInstance = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_BASE_URL}/auth`,
});

export default authInstance;
