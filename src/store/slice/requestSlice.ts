import { createSlice } from '@reduxjs/toolkit';

interface DataType {
  api: string;
  query: string;
  variables: string;
  response: string;
  headers: object;
}

const tempQuery = `query {
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
location(id: 1) {
  id
}
episodesByIds(ids: [1, 2]) {
  id
}
}`;

const initialState: DataType = {
  api: 'https://rickandmortyapi.com/graphql',
  query: tempQuery,
  response: '',
  variables: '',
  headers: { 'Content-Type': 'application/json' },
};

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setApi: (state, action) => {
      state.api = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setVariables: (state, action) => {
      state.variables = action.payload;
    },
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    setHeaders: (state, action) => {
      state.headers = { 'Content-Type': 'application/json', ...action.payload };
    },
  },
});

export const { setApi, setQuery, setVariables, setResponse, setHeaders } =
  requestSlice.actions;

export default requestSlice.reducer;
