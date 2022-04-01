import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
})

export const hackerAPI = {
  allNews() {
    return instance
      .get(`newstories.json?print=pretty`)
      .then(res => res.data.slice(0,100))
  },
}
