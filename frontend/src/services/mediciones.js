import api from '@/services/axios'

export const getAnomaliasTemperatura = () =>
  api.get("/mediciones/anomalias");

export const getTopVariacionTemperatura = () =>
  api.get("/mediciones/top-variacion");
