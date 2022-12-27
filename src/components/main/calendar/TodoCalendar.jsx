import React, { useEffect, useState } from "react"
import Calendar from "react-calendar"
import { useDispatch, useSelector } from "react-redux"
import { __getTodos } from "../../../redux/modules/todosSlice"
import "./Calendar.css"
import Checkbox from "../../element/Checkbox"

const TodoCalendar = () => {
  const test = React.useRef()
  const [value, onChange] = useState(new Date())
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(__getTodos())
    // console.log(test.current)
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
        ref={test}
        // onClickDay={(value, event) => console.log("Clicked day: ", value)}
        // onClickDay={(value, event) => dispatch(__getTodos())}
        tileContent={({ date, view }) => {
          // const html = []
          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
          // html.push(<Checkbox readOnly key={"check" + Math.random} />)

          // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
          return (
            <>
              <Checkbox checked={false} readOnly />
            </>
          )
        }}
        value={value}
      />
    </div>
  )
}

export default TodoCalendar
