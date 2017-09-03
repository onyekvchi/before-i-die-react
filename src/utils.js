import axios from "axios";
import jsonp from "jsonp";

const API = {
  baseURL: "http://localhost:8000"
}

const Instagram = {
  accessToken: "4336590343.238e480.be3f9e255a53488bb7a94dd6469f3af8",
  clientID: "238e480d69684022994e40e6da253fcc",
  userID: "4336590343",
  apiUrl: "https://api.instagram.com/v1",
  limit: 8
};

const fetchInstagramGallery = () => {
  const baseURL = `${Instagram.apiUrl}/users/${Instagram.userID}/media/recent?`;
  const params = `access_token=${Instagram.accessToken}&count=${Instagram.limit}`;

  return new Promise((resolve, reject) => {
    jsonp(baseURL + params, null, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

export const getGalleryImages = () => {
  return fetchInstagramGallery()
    .then(response => response.data)
    .then(data => data.map(d => d.images.standard_resolution.url));
};


export const postEntry = (data) => {
  const url = API.baseURL + "/quotes";
  return axios.post(url, data);
}
