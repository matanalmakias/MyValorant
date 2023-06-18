export const serverUrl = `http://localhost:3001`;

//export const serverUrl = `https://madigital-backend.herokuapp.com`;
export const homepageUrl = `https://valocoach.com`;
export const headers = {
  headers: { Authorization: localStorage.getItem("token") },
};

export const phoneRegex = /^05\d([-]{0,1})\d{7}$/;
export const webSiteRegex = `^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*\.(co\.il|com|net|org|edu|gov|mil|info|biz|me|io|tv|cc)$`;
