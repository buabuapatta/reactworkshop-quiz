import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

const Score = () => {
  const restartApp = () => {
    setScore(0)
    setAppState("Menu")
  }
  const { score, setAppState, setScore } = useContext(DataContext)
  return (
    <div className="Score">
      <h1>Score Summary</h1>
      <h2>{score} / {QuestionsData.length}</h2>
      <button onClick={restartApp}>Redo a Quiz</button>
    </div>
  )
}
export default Score