import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const wearApi = createApi({
  reducerPath: 'wearApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getWear: build.query({
      query: () => `wear`,
    }),
  })
})

export const { useGetWearQuery } = wearApi