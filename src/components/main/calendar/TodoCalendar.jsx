import React, { useEffect, useRef, useState } from "react"
import Calendar from "react-calendar"
import { useDispatch, useSelector } from "react-redux"
import { __getTodos } from "../../../redux/modules/todosSlice"
import "./Calendar.css"
import Checkbox from "../../element/Checkbox"
import { sendDate } from "../../../redux/modules/dateSlice"

const TodoCalendar = (props) => {
  const [currentDay, setCurrentDay] = useState("")
  const [currentMonth, setCurrentMonth] = useState("")
  // const chosenDate = useSelector((state) => state.todoDate)
  const [value, onChange] = useState(new Date())
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(__getTodos())
    dispatch(sendDate(currentDay))
  }, [dispatch])

  const datesValue = (target) => {
    const pickYear = target.getFullYear()
    const pickMonth = target.getMonth() + 1
    const pickDate = target.getDate()
    setCurrentDay({ pickYear, pickMonth, pickDate })
    setCurrentMonth({ pickYear, pickMonth })
  }
  return (
    <div>
      <Calendar
        onActiveStartDateChange={({ action, activeStartDate, value, view }) => {
          setCurrentMonth(
            activeStartDate.toLocaleString("ko", {
              year: "numeric",
              month: "numeric",
            })
          )
          datesValue(activeStartDate)
        }}
        // inputRef={calendarRef}
        onChange={onChange}
        showNeighboringMonth={null}
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
        onClick
        onClickDay={(value, event) => {
          datesValue(value)
          dispatch(sendDate(currentDay))
        }}
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
