import './App.css';
import NavBar from './components/NavBar';
import CharacterCard from './components/CharacterCard';
import TaskMenu from './components/TaskMenu';
import Boxes from './components/Boxes';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showTaskAdd, setShowTaskAdd] = useState(false);

  return (
    <div className="background">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
      </style>
      <NavBar/>
      <div className="App" id="container">

        <div className="leftMenu">
          <CharacterCard showTaskAdd={showTaskAdd} setAddTask={setShowTaskAdd}/>
          <TaskMenu tasks={tasks} showMenu={showTaskAdd} set={setShowTaskAdd} setTasks={setTasks}/>
        </div>

        <div className="rightMenu">
          <Boxes/>
          <Boxes/>
          <Boxes/>
        </div>

      </div>
    </div>
  );
}

export default App;
