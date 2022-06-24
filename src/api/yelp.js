import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer mTWItgMV_6JjxczZl64k4moSvv3Nt2NhJgm1qcmgdUH5JofjDQOesoCK2Mj7Wj0qOhyq4OsjOb9oDAN2Uss9an8wCMqKrgCgdwRgkz2ZctB9eH0PP1eAia6EQPmpYnYx'
  }
});
