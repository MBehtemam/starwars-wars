import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
type Response<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
  };
  
  type Person = {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
    url: string;
    created: string;
    edited: string;
  };
  
  type Film = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    species: string[];
    starships: string[];
    vehicles: string[];
    characters: string[];
    planets: string[];
    url: string;
    created: string;
    edited: string;
  };
  
  type Species = {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    homeworld: string;
    people: string[];
    films: string[];
    url: string;
    created: string;
    edited: string;
  };


export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getPeople: builder.query<Response<Person>, { page?: number; search?: string }>({
      query: ({ page = 1, search = '' }) => `people?page=${page}&search=${search}`,
    }),
    getFilms: builder.query<Response<Film>, { page?: number; search?: string }>({
      query: ({ page = 1, search = '' }) => `films?page=${page}&search=${search}`,
    }),
    getSpecies: builder.query<Response<Species>, { page?: number; search?: string }>({
      query: ({ page = 1, search = '' }) => `species?page=${page}&search=${search}`,
    }),
  }),
});

export const { useGetPeopleQuery, useGetFilmsQuery, useGetSpeciesQuery } = swApi;
