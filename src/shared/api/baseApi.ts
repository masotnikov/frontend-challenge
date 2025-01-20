import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {CatCard} from "@/shared/types/CatCard";

const API_KEY = 'live_Nayevro7oPdntffCgh60mQbkdjf5fI7jMY4KA819anTQpPDKKrSqHoPCXj7OulI4'
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('x-api-key', API_KEY || '');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCats: builder.query<CatCard[], number | void>({
      query: (limit = 10) => `?limit=${limit}`,
    }),
  }),
});

export const { useGetCatsQuery } = baseApi;
