import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer Sy1HpffqiLGr0IaYIfRNQ9f5kahtfgRpP9pdDMnA7VUU87AWCMuxQDZsvbm5YuNQqfWTqpaNrgtQ3C0al-pcOy2xxUohaZ2O3bC5q3yZvdbohWCgEFs1eM1GZI2AX3Yx'
    }
})