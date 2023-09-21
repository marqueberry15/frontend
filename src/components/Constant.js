// Constants.js
const prod = {
  API_URL: "/backend",
};

const dev = {
  API_URL: "http://localhost:8000",
};
//  export const config = process.env.NODE_ENV === 'development' ? prod : prod;

export const config = prod;
