import React from 'react'
import { hot } from 'react-hot-loader' 
import imageUrl from "../src/assets/images/logo.svg";
import './App.css'

const App = () => (
    <div>
        <img src={imageUrl} />
        <h1>Webpack React Setup.</h1>
    </div>
) 
export default hot(module)(App)