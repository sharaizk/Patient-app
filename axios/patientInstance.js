import axios from "axios";

const patientInstance = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_BASE_URL}/patients`,
});

export default patientInstance;
