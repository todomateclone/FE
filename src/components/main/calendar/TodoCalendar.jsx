import React, { useEffect, useState } from "react"
import Calendar from "react-calendar"
import { useDispatch, useSelector } from "react-redux"
import { __getTodos } from "../../../redux/modules/todosSlice"
import "./Calendar.css"

const TodoCalendar = () => {
  const [value, onChange] = useState(new Date())
  const { allTodos, isLoading, error } = useSelector((state) => state.allTodos)

  const dispatch = useDispatch()
  // const fetchTodos = () => {
  //   setTodos(allTodos)
  // }
  useEffect(() => {
    dispatch(__getTodos())
  }, [dispatch])
  return (
    <div>
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        minDetail="month"
        maxDetail="month"
        maxDate={new Date(2032, 12, 31)}
        minDate={new Date(2012, 1, 1)}
        defaultView="month"
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        // onClickDay={(value, event) => console.log("Clicked day: ", value)}
        onClickDay={(value, event) => dispatch(__getTodos())}
        tileContent={({ date, view }) => {
          const html = []
          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
          html.push(<div className="dot"></div>)

          // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
          return (
            <>
              <div>{html}</div>
            </>
          )
        }}
        value={value}
      />
    </div>
  )
}

export default TodoCalendar
