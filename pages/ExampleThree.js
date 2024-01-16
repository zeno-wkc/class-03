import {useEffect, useState} from "react"
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function ExampleThree() {
  const [number, setNumber] = useState(0);
  const colors = ["red", "orange", "yellow", "green", "blue", "violet"]

  useEffect(() => {
    // number > colors.length - 1 : 6 - 1
    if (number >= colors.length) {
      setNumber(0);
      console.log("changing number value: " + colors[0]);
    } else {
      console.log("changing number value: " + number);
    }
  }, [number])

  return (
    <>
      <Header/>
      <main>
        <h1>Example 3</h1>
        <button style={{backgroundColor: colors[number]}} onClick={()=>{ setNumber(number + 1)}}> Increment button</button>
      </main>
      <Footer/>
    </>
  )
}