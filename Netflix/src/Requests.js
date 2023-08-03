const key="f4ab656b09ed2b4cd2f43f15675a22bf";

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
    requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
    requestSerious: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=18`,
    requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
    requestMarvel: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_keywords=180547`,
    requestDC: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_keywords=849`
};

export default requests
