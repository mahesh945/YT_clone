import axios from 'axios';

export const BASE_URL='https://youtube-v3-alternative.p.rapidapi.com';

const options = {
    
    params: {maxResults: '50'},
    headers: {
      'X-RapidAPI-Key': '61ea1fd126msh6612cb1a80ca52bp14798ajsnef72fe167ede',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async(url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`, options);
   return data;
}