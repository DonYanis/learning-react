import React from "react";
import { useTheme } from "../contexts/ThemeContext";


export default function ReactFacts(){

  const theme = useTheme()

  const className = theme ? "container" : "container light"

    return (
      <main className={className}>
        <h1 className='title'>Fun Facts About React</h1>
        <ul className='facts'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    )
}