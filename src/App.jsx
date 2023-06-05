import React from "react";
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import data from './data.jsx'
import './main.css'
const App = ()=>{
    /*
    Where using a map function it takes a call back function 
    which a return for every element and assign it to a 
    new Array
    */
    const personData = data.map((e)=>{
       return <Card 
        key={e.id}  
        {...e}
        />
    }) ;
    console.log(personData)
    return(
        <div>
            <Header />
            <div className="card-row">
                {personData}
            </div>
        </div>
    );
};

export default App;