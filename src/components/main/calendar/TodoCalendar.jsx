import React, { useEffect, useRef, useState } from "react"
import Calendar from "react-calendar"
import { useDispatch, useSelector } from "react-redux"
import { __getTodos } from "../../../redux/modules/todosSlice"
import "./Calendar.css"
import Checkbox from "../../element/Checkbox"

const TodoCalendar = () => {
  // const test = React.useRef()
  const calendarRef = useRef(null)
  const [value, onChange] = useState(new Date())
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(__getTodos())
  }, [dispatch])

  return (
    <div>
      <Calendar
        onActiveStartDateChange={({ action, activeStartDate, value, view }) =>
          console.log(
            activeStartDate.toLocaleString("ko", {
              year: "numeric",
              month: "numeric",
            })
          )
        }
        inputRef={calendarRef}
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
        tileContent={({ date, view }) => {
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
