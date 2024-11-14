import { useEffect, useState } from "react"
import Nav from "./Nav"
import Article from "./Article"
import ArticleEntry from "./ArticleEntry"
import { SignIn, SignOut } from "./Auth"
import { useAuthentication } from "../services/authService"
import { fetchArticles, createArticle } from "../services/articleService"
import "./App.css"


export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const user = useAuthentication()

  const [final, setFinal] = useState(0);

  const [r1, setR1] = useState(0.5);
  const [p1, setP1] = useState(0.5);
  const [t1, setT1] = useState(0.5);
  const [c1, setC1] = useState(0.5);

  const [n1, setN1] = useState(1);

  function changeR1(e) {setR1(e.currentTarget.value); conflictCalculator()}
  function changeP1(e) {setP1(e.currentTarget.value); conflictCalculator()}
  function changeT1(e) {setT1(e.currentTarget.value); conflictCalculator()}
  function changeC1(e) {setC1(e.currentTarget.value); conflictCalculator()}

  const [r2, setR2] = useState(0.5);
  const [p2, setP2] = useState(0.5);
  const [t2, setT2] = useState(0.5);
  const [c2, setC2] = useState(0.5);

  const [n2, setN2] = useState(1);

  function changeR2(e) {setR2(e.currentTarget.value); conflictCalculator()}
  function changeP2(e) {setP2(e.currentTarget.value); conflictCalculator()}
  function changeT2(e) {setT2(e.currentTarget.value); conflictCalculator()}
  function changeC2(e) {setC2(e.currentTarget.value); conflictCalculator()}

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  function addArticle({ title, body, date, location }) {
    createArticle({ title, body, date, location }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }

  function conflictCalculator(){
    //multiply n1 and n2 by the resources?
    const normn1 = n1/(n1+n2)
    const normn2 = n2/(n1+n2)
    //add these later
    const a = 12.5
    const b = 12.5
    const g = 12.5
    const o = 12.5
    
    const conflict = normn1 * ((a*(1-r1)**2)+b*(p1**2)+g*(Math.max(0, 2*t1-1))+ o*(Math.cos(Math.PI*c1/2))) + normn2 * (a*(1-r2)**2+b*(p2**2)+g*(Math.max(0, 2*t2-1))+o*(Math.cos(Math.PI*c2/2)))

    setFinal(conflict)
    console.log(conflict)
  }

  return (
    <div className="App">
      <header>
        Intergroup Conflict Model
        {user && <button onClick={() => setWriting(true)}>Save Snapshot</button>}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      <div className="Group">
        <div className="sliderContainer">
          <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} />
        </div>
        <div className="SliderContainer">
          <input onChange={changeR1} type="range" min="0" max="1" value={r1} step="0.01"/>
          <input type="number" value={r1} onChange={(e) => setR1(e.target.value)} />
        </div>
        <div className="SliderContainer">
          <input onChange={changeP1} type="range" min="0" max="1" value={p1} step="0.01"/>
          <input type="number" value={p1} onChange={(e) => setP1(e.target.value)} />
        </div>
        <div className="SliderContainer">
          <input onChange={changeT1} type="range" min="0" max="1" value={t1} step="0.01"/>
          <input type="number" value={t1} onChange={(e) => setT1(e.target.value)} />
        </div>
        <div className="SliderContainer">
          <input onChange={changeC1} type="range" min="0" max="1" value={c1} step="0.01"/>
          <input type="number" value={c1} onChange={(e) => setC1(e.target.value)} />
        </div>
      </div>
      
      <div className="Group">
        <div className="sliderContainer">
          <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} />
        </div>
        <div className="SliderContainer">
          <input onChange={changeR2} type="range" min="0" max="1" value={r2} step="0.01"/>
          <input type="number" value={r2} onChange={(e) => setR2(e.target.value)} />
        </div>
        <div className="SliderContainer">
          <input onChange={changeP2} type="range" min="0" max="1" value={p2} step="0.01"/>
          <input type="number" value={p2} onChange={(e) => setP2(e.target.value)} />
        </div>
        <div className="SliderContainer">
          <input onChange={changeT2} type="range" min="0" max="1" value={t2} step="0.01"/>
          <input type="number" value={t2} onChange={(e) => setT2(e.target.value)} />
        </div>
        <div className="SliderContainer">
          <input onChange={changeC2} type="range" min="0" max="1" value={c2} step="0.01"/>
          <input type="number" value={c2} onChange={(e) => setC2(e.target.value)} />
        </div>
      </div>

      <div className="Results">
        the value is {final}
      </div>
  
      
      {/* this is where the snapshot button goes, snapshots can be saved on a tab on the left */}

      {!user ? "" : <Nav articles={articles} setArticle={setArticle} />}

      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} setWriting={setWriting} />
      ) : (
        <Article article={article} />
      )}


      <footer>

      </footer>
    </div>
  )
}