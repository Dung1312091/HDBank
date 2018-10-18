import {
  LOAD_DATA_USER,
  LOAD_DATA_POST,
  LOAD_DATA_PHOTO,
  LOAD_DATA_ALBUMS,
  LOAD_DATA_SUCCESS,
  FAILURE
} from "../../constants/actionTypes";
export function loadFakeDataUsers() {
  return { type: LOAD_DATA_USER };
}
export function loadFakeDataPosts() {
  return { type: LOAD_DATA_POST };
}
export function loadFakeDataPhotos() {
  return { type: LOAD_DATA_PHOTO };
}
export function loadFakeDataAlbums() {
  return { type: LOAD_DATA_ALBUMS };
}
export function loadDataSuccess(data) {
  return {
    type: LOAD_DATA_SUCCESS,
    data
  };
}
export function failure(error) {
  return {
    type: FAILURE,
    error
  };
}
