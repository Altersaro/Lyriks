import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RAPIDAPI-Key', '573f326016msh7b61631fbf0f873p1df14ajsnfb6e31d8acc8');

      return headers;
    },

  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}` }),
    getArtistDetails: builder.query({ query: (artistid) => `/artists/get-details?id=${artistid}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}&locale=it` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetSongsBySearchQuery,
} = shazamApi;
