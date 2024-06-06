import axios from 'axios';
export const UserAxios = {
  get: async (url, pass, email, signal) => {
    try {
      let res = await axios.get(`${url}/${email}/${pass}`, { signal }),
        data = await res.data;
      return data;
    } catch (err) {
      let message = err.response.statusText || 'Ocurrió un error';
      return {
        status: false,
        err: `Error: ${err.response.status || 400} -- ${message}`,
      };
    }
  },
  getById: async (url, id, signal) => {
    try {
      let res = await axios.get(`${url}/${id}`, { signal }),
        data = await res.data;
      return data;
    } catch (err) {
      let message = err.response.statusText || 'Ocurrió un error';
      return {
        status: false,
        err: `Error: ${err.response.status || 400} -- ${message}`,
      };
    }
  },
  post: async (url, pass, email, full_name, grade, signal) => {
    try {
      let res = await axios.post(
          `${url}`,
          { full_name, email, pass, grade },
          { signal },
        ),
        data = await res.data;
      return data;
    } catch (err) {
      let message = err.response.statusText || 'Ocurrió un error';
      return {
        status: false,
        err: `Error: ${err.response.status || 400} -- ${message}`,
      };
    }
  },
};

export const CourseAxios = {
  getAll: async (url, grade, signal) => {
    try {
      let res = await axios.get(`${url}/${grade}`, { signal }),
        data = await res.data;
      return data;
    } catch (err) {
      let message = err.response.statusText || 'Ocurrió un error';
      return {
        status: false,
        err: `Error: ${err.response.status || 400} -- ${message}`,
      };
    }
  },
  get: async (url, id, signal) => {
    try {
      let res = await axios.get(`${url}/${id}`, { signal }),
        data = await res.data;
      return data;
    } catch (err) {
      let message = err.response.statusText || 'Ocurrió un error';
      return {
        status: false,
        err: `Error: ${err.response.status || 400} -- ${message}`,
      };
    }
  },
};
