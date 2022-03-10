import axios from "./axios";

export function get(url: string, data?: Record<string, unknown>) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, data)
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function post(url: string, data?: Record<string, unknown>) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function put(url: string, data?: Record<string, unknown>) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data)
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function del(url: string, data?: Record<string, unknown>) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, data)
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
