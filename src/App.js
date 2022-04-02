import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import React, {useEffect, useState} from "react";
import {csv} from "d3";

import datacsv from './data/data.csv'

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#e33521',
        },
    },
});

function App() {
    const [news,setNews] = useState([])
    useEffect(()=>{
        csv(datacsv).then((data)=>{
            data.forEach((d)=>{
                d.time=new Date(d.time);
                if (d.imageLanscape==="")
                    delete d.imageLanscape
            });
            data.sort((a,b)=>(+b.time)-(+a.time))
            setNews(data);
        })
    },[])
  return (
      <ThemeProvider theme={customTheme}>
        <div className="App">
          <Home data={news}/>
        </div>
      </ThemeProvider>
  );
}

export default App;
