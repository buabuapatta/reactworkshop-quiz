import './App.css';
import { createContext, useState } from 'react';
import Menu from './components/menu';
import Quiz from './components/quiz';
import Score from './components/score';


// เป็นการสร้างcontextเพื่อให้มีการเปลี่ยนแปลงค่าโดยสั่งการไปที่appStateเพื่อให้มีการเปลี่ยนแปลงหน้าmenu quiz score
// จากปกติในค่าที่แสดงเป็นแบบนี้จะเปลี่ยนไปใช้Datacontext
// โดยการใช้ event onclick on menu page and use by import DataContext
export const DataContext = createContext()

function App() {
  const [appState, setAppState] = useState("Menu")
  const [score, setScore,] = useState(0)
  return (
    <DataContext.Provider value={{ appState, setAppState, score, setScore }}>
      <div className='App'>
        <h1>Ask Aloud Quiz</h1>
        {appState === "Menu" && <Menu />}
        {appState === "Quiz" && <Quiz />}
        {appState === "Score" && <Score />}
      </div></DataContext.Provider>
  );
}

export default App;
