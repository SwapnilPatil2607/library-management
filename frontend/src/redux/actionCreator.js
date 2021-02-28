import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESSFUL,
} from "./actionType";
import axios from "axios";
export const get_books_request = () => ({
  type: GET_BOOKS_REQUEST,
});

export const get_books_failure = () => ({
  type: GET_BOOKS_FAILURE,
});

export const get_books_success = (payload) => ({
  type: GET_BOOKS_SUCCESSFUL,
  payload: payload,
});

export const get_books = () => (dispatch) => {
  dispatch(get_books_request());
  return axios({
    method: "get",
    url: "http://localhost:5000/api/library",
  })
    .then((res) => dispatch(get_books_success(res.data.slice(0, 20))))
    .catch((err) => dispatch(get_books_failure()));
};

export const sort_by = (query) => (dispatch) => {
  return axios({
    method: "get",
    url: "http://localhost:5000/api/library/sort",
    params: {
      query: query,
    },
  })
    .then((res) => dispatch(get_books_success(res.data.slice(0, 20))))
    .catch((err) => dispatch(get_books_failure()));
};

export const filter_by = (query) => (dispatch) => {
  return axios({
    method: "get",
    url: "http://localhost:5000/api/library/filter",
    params: {
      query: query,
    },
  })
    .then((res) => dispatch(get_books_success(res.data.slice(0, 20))))
    .catch((err) => dispatch(get_books_failure()));
};

export const search = (query) => (dispatch) => {
    return axios({
      method: "get",
      url: "http://localhost:5000/api/library/search",
      params: {
        query: query,
      },
    })
      .then((res) => dispatch(get_books_success(res.data.slice(0, 20))))
      .catch((err) => dispatch(get_books_failure()));
};

export const details_book=(id)=>(dispatch)=>{
  return axios({
    method: "get",
    url: "http://localhost:5000/api/library/details",
    params: {
     id,
    },
  })
    .then((res) => dispatch(get_books_success(res.data)))
    .catch((err) => dispatch(get_books_failure()));
}