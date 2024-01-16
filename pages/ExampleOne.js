import {useEffect, useState} from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleOne() {
  const [number, setNumber] = useState(0);

  /* usually this will cause an infinit loop so it is best to not do this 
   * incase your code break
   * code on pages will run two TimeRanges. Once to render what we want and another is to render 
   * strict mode to find my common bugs
   */ 
  useEffect(() => {
    console.log(number);
  })
  
  return(
    <>
      <Header/>
      <main>
        <h1>Example 1</h1>
        <div>Infinit loop</div>
        {number}
      </main>
      <Footer/>
    </>
  )
}