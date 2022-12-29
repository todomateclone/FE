import { baseURL } from "./axios"

export const mainApis = {
  getTodos: (year, month) =>
    baseURL
      // .get(`/api/todo/${year}/${month}`, {
      .get(`/data`)
      .then((res) => {
        console.log(res.data.msg)
      })
      .catch((err) => {
        console.log(err.response.data.msg)
      }),

  postTodo: (tagId, content) =>
    baseURL
      // .post(`/todo/${tagId}`, content)
      .post(`/${tagId}/todo`, content)
      .then((res) => {
        console.log(res.data.msg)
      })
      .catch((err) => {
        console.log(err.response.data.msg)
      }),

  putTodo: (todoId, content) =>
    baseURL
      .put(`/todo/${todoId}`, content)
      .then((res) => {
        console.log(res.data.msg)
      })
      .catch((err) => {
        console.log(err.response.data.msg)
      }),

  delTodo: (todoId) =>
    baseURL
      .delete(`/todo/${todoId}`)
      .then((res) => {
        console.log(res.data.msg)
      })
      .catch((err) => {
        console.log(err.response.data.msg)
      }),
}
