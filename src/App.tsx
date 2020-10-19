import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {SkillsBlock} from "./components/skills/SkillsBlock";
import {Options} from "./components/options/Options";
import {MyWorks} from "./components/my-works/MyWorks";
import {Main} from "./components/main/Main";
import {Contacts} from "./components/contacsts/Contacts";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div className={'wrapper'}>
            <div className={'container'}>
                <Header/>
                <Main/>
                <SkillsBlock/>
                <MyWorks/>
                <Options/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;


