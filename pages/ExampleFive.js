import {useEffect, useState} from "react"
import Footer from '@/components/Footer'
import Header from '@/components/Header'

// we want to setup a counter
// after every one second the number increases by 1
// we want to display that number on the screen as it increases 
// no button is needed it will up date automatically

export default function ExampleFive() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const currentNum = setInterval(() => {
      setNumber(number + 1);
    }, 1000);
    return () => clearInterval(currentNum);
}, [number]);

  return (
    <>
     <Header/>
      <main>
        <h1>Example 5</h1>
        <h3>Example using Interval</h3>
        <h2>{number}</h2>
      </main>
      <Footer/>
    </>
  )
}