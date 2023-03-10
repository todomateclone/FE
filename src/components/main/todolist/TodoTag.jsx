import { useEffect, useState } from "react"
import styled from "styled-components"
import { feedAddBtn, pendingIcon } from "../../../styles/assets"
import Checkbox from "../../element/Checkbox"
import { __addTodo, __getTodos } from "../../../redux/modules/todosSlice"
import { useDispatch, useSelector } from "react-redux"
import { sendDate } from "../../../redux/modules/dateSlice"

const TodoTag = ({ tag }) => {
  const chosenDate = useSelector((state) => state.todoDate)
  const [inputHidden, setInputHidden] = useState(true)
  const date = {
    todoYear: chosenDate.todoDate.pickYear,
    todoMonth: chosenDate.todoDate.pickMonth,
    todoDay: chosenDate.todoDate.pickDate,
  }
  const [addTodo, setAddTodo] = useState({
    ...date,
    content: "",
  })
  const dispatch = useDispatch()
  const handleAddTodo = async (tagId) => {
    dispatch(__addTodo({ tagId, addTodo }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddTodo(tag.tagId)
    setAddTodo({ ...addTodo, content: "" })
    dispatch(__getTodos)
  }

  useEffect(() => {
    dispatch(__getTodos)
    dispatch(sendDate(chosenDate.todoDate))
  }, [dispatch])

  return (
    <>
      <StTagTitle
        style={{ color: tag.tagColor }}
        onClick={() => {
          setInputHidden(!inputHidden)
        }}
      >
        <span>
          {tag.tagName} <img src={feedAddBtn} alt="" />{" "}
        </span>
      </StTagTitle>
      <ElTodoInputWrap
        hidden={inputHidden}
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <Checkbox readOnly />
        <ElInput
          placeholder="입력"
          style={{ borderBottom: `0.09rem solid ${tag.tagColor}` }}
          onChange={(e) => {
            setAddTodo({
              ...date,
              content: e.target.value,
            })
          }}
          value={addTodo.content}
        />
        <StTodoIcon src={pendingIcon} alt="" />
      </ElTodoInputWrap>
    </>
  )
}

export default TodoTag

// 최소 컴포넌트에서 컬러값을 받지 못하는 문제로 임시 스타일링
const StTagTitle = styled.button`
  display: flex;
  border: none;
  border-radius: 0.3em;
  height: 2.5rem;
  width: fit-content;
  padding: 0.6rem;
  background-color: ${({ theme }) => theme.baseColor.btnGray};
  font-weight: 700;
  color: ${(props) => props.color};
  cursor: pointer;

  img {
    width: 1.2rem;
    margin-left: 0.2rem;
  }
`

const StTodoIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-top: 0.2rem;
`

const ElTodoInputWrap = styled.form`
  display: grid;
  grid-template-columns: 2rem 1fr 1rem;
  margin-top: 0.5rem;
`

const ElInput = styled.input`
  width: 98%;
  font-size: medium;
  outline: none;
  border: none;
  animation-name: underline;
  animation-duration: 0.5s;
  margin-left: 0.2rem;

  @keyframes underline {
    from {
      border-bottom: 0.09rem solid #c1bebe;
    }
    to {
      border-bottom: 0.09rem solid ${(tag) => tag.tagColor};
    }
  }
`
