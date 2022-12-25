import { instance } from "./axios"

export const mainApis = {
  getTodos: (year, month) =>
    instance
      // .get(`/api/todo/${year}/${month}`, {
      .get(`/data`)
      .then((res) => {
        console.log(res.data.msg)
      })
      .catch((err) => {
        console.log(err.response.data.msg)
      }),

  postTodo: (todoId, content) =>
    instance
      .post(`/api/todo/${todoId}`, content)
      .then((res) => {
        console.log(res.data.msg)
      })
      .catch((err) => {
        console.log(err.response.data.msg)
      }),

  updateTodo: (todoId, content) =>
    instance
      .put(`/api/todo/${todoId}`, content)
      .then((res) => {
        console.log(res.data.msg)
      })
      .catch((err) => {
        console.log(err.response.data.msg)
      }),

  delTodo: (todoId) =>
    instance
      .delete(`/api/todo/${todoId}`)
      .then((res) => {
        console.log(res.data.msg)
      })
      .catch((err) => {
        console.log(err.response.data.msg)
      }),
}
