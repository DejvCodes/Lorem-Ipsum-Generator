import { useState } from "react"
import data from "./data"
  
const App = () => {
  const [count, setCount] = useState("")
  const [paragraphs, setParagraphs] = useState([])

  const submitForm = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    // console.log(typeof(amount))

    // Validace - kontrola krajních hodnot
    // if (amount < 0) {
    //   amount = 1
    // } else if (amount > 5) {
    //   amount = 5
    // }
    // setParagraphs(data.slice(0, amount) 

    const resultParagraphs = data.filter( (oneParagraph, index) => {
      return index < amount
    })
    setParagraphs(resultParagraphs)
  }

  return (
    <section className="form-section">
      <h1>Lorem Ipsum Generator</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="paragraphs">Odtavce:</label>

        <input 
          type="number" 
          min={0} 
          id="paragraphs"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        /> <br />

        <input type="submit" value="Vygenerovat" />
      </form>

      <article>
        {
          paragraphs.map((oneParagraphs, index) => {
            return <p key={index}>{oneParagraphs}</p>
          })
        }
      </article>
    </section>
  )
}

export default App