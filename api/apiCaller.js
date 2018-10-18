import axios from "axios";
import * as configAPI from "../env";
const METHOD_GET = "GET";
const METHOD_POST = "POST";
const METHOD_PUT = "PUT";
const METHOD_DELETE = "DELETE";
async function requestAPI(method, url, headers = {}, dataBody) {
  // headers["Content-Type"] = "application/json";
  // headers["accept"] = "application/json";
  const config = {
    baseURL: configAPI.baseUrl,
    url: url,
    headers: headers,
    method: method
  };

  if (method === METHOD_GET) {
    config.params = dataBody;
  } else {
    config.data = dataBody;
  }
  return axios(config)
    .then(async res => {
      return res.data;
    })
    .catch(err => {
      throw err;
    });
}
export default {
  get(url, dataBody, headers = {}) {
    return requestAPI(METHOD_GET, url, headers, dataBody);
  },

  post(url, dataBody, headers = {}) {
    return requestAPI(METHOD_POST, url, headers, dataBody);
  },

  put(url, dataBody, headers = {}) {
    return requestAPI(METHOD_PUT, url, headers, dataBody);
  },

  delete(url, dataBody, headers = {}) {
    return requestAPI(METHOD_DELETE, url, headers, dataBody);
  }
};
