import { useContext, useEffect, useState } from "react"
import QuestionData from "../data/QuestionsData"
import { DataContext } from "../App"

const Quiz = () => {
  const [current, setCurrent] = useState(0)
  const [selectChoice, setSalectChoice] = useState("")
  const { score, setScore, setAppState } = useContext(DataContext)

  //ใข้ UseEffect ในการตรวจสอบ State choice ว่าตรงกับ Answer ที่ตั้งไว้รึเปล่า
  useEffect(() => {
    checkAnswer()
    // eslint-disable-next-line
  }, [selectChoice])

  const checkAnswer = () => {
    if (selectChoice !== "") {
      if (selectChoice === QuestionData[current].answer) {
        setScore(score + 1)
        nextQuestion()
      } else {
        console.log("Wrong Answer")
        nextQuestion()
      }
    }
  }

  const nextQuestion = () => {
    setSalectChoice("")
    if (current === QuestionData.length - 1) {
      setAppState("Score")
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <div className="Quiz">
      <h1>{QuestionData[current].question}</h1>
      <div className="Choices">
        <button onClick={() => setSalectChoice("A")}>{QuestionData[current].A}</button>
        <button onClick={() => setSalectChoice("B")}>{QuestionData[current].B}</button>
        <button onClick={() => setSalectChoice("C")}>{QuestionData[current].C}</button>
        <button onClick={() => setSalectChoice("D")}>{QuestionData[current].D}</button>
      </div>
      <p>{`${current + 1} / ${QuestionData.length}`}</p>
    </div >
  )
}
export default Quiz