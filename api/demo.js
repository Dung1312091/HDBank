import caller from "./apiCaller";
export const loadFakeDataUser = () => {
  return caller.get("/users");
};
export const loadFakeDataPost = () => {
  return caller.get("/posts");
};
