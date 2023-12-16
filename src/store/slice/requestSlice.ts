import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkVariables } from '../../utils/checkVariables';
import { toast } from 'react-toastify';
import {
  TOAST_REQUEST_PENDING,
  TOAST_REQUEST_SUCCESS,
} from '../../constants/toastsConst';
import { onRenderError } from '../../utils/renderError';

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

export const fetchQuery = createAsyncThunk(
  'request/fetchQuery',
  async ({
    api,
    variables,
    requestHeaders,
    query,
  }: {
    api: string;
    variables: string;
    requestHeaders: Headers;
    query: string;
  }) => {
    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: requestHeaders as Headers,
        body: JSON.stringify({ query, variables: checkVariables(variables) }),
      });
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      {
        throw new Error(`Error fetching data: ${error}`);
      }
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchQuery.pending, () => {
      toast.loading(TOAST_REQUEST_PENDING);
    });
    builder.addCase(fetchQuery.rejected, (state, action) => {
      const errorMessage = action.error.message || 'Unknown error';
      toast.dismiss();
      toast.error(onRenderError(errorMessage));
    });
    builder.addCase(fetchQuery.fulfilled, (state, action) => {
      toast.dismiss();
      toast.success(TOAST_REQUEST_SUCCESS);
      state.response = JSON.stringify(action.payload, null, 2);
    });
  },
});

export const { setApi, setQuery, setVariables, setResponse, setHeaders } =
  requestSlice.actions;

export default requestSlice.reducer;
