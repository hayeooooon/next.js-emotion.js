import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
});


export const apis = {
	// main
	getSuggestions: (data) => instance.get(`api/suggestion/${data.idx}`),
}

