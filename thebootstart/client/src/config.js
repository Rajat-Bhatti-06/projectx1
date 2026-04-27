const API_BASE_URL = import.meta.env.PROD
    ? 'https://www.thebootstart.com/api'
    : 'http://localhost:5005/api';

export default API_BASE_URL;
