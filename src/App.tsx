import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import Main from "./components/main/Main";
import {SkillsBlock} from "./components/SkillsBlock/SkillsBlock";

function App() {
  return (
   <div className={'wrapper'}>
       <div className={'container'}>
   <Header/>
   <Main/>
   <SkillsBlock/>
   </div>
   </div>
  );
}

export default App;


