export const actionTypes = {
  FAILURE: "FAILURE",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  LOAD_DATA_USER: "LOAD_DATA_USER",
  LOAD_DATA_POST: "LOAD_DATA_POST",
  LOAD_DATA_ALBUMS: "LOAD_DATA_ALBUMS",
  LOAD_DATA_PHOTO: "LOAD_DATA_PHOTO",
  LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
  START_CLOCK: "START_CLOCK",
  TICK_CLOCK: "TICK_CLOCK"
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

export function increment() {
  return { type: actionTypes.INCREMENT };
}

export function decrement() {
  return { type: actionTypes.DECREMENT };
}

export function reset() {
  return { type: actionTypes.RESET };
}

export function loadFakeDataUsers() {
  return { type: actionTypes.LOAD_DATA_USER };
}
export function loadFakeDataPosts() {
  return { type: actionTypes.LOAD_DATA_POST };
}
export function loadFakeDataPhotos() {
  return { type: actionTypes.LOAD_DATA_PHOTO };
}
export function loadFakeDataAlbums() {
  return { type: actionTypes.LOAD_DATA_ALBUMS };
}
export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  };
}

export function startClock() {
  return { type: actionTypes.START_CLOCK };
}

export function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  };
}
