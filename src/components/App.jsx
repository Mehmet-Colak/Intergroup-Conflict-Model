import { useEffect, useState } from "react"
import History from "./History"
import { Snapshot } from "./Snapshot"
import { SnapshotEntry } from "./SnapshotEntry"
import { SignIn, SignOut } from "./Auth"
import { useAuthentication } from "../services/authService"
import { fetchSnapshots, createSnapshot, emptySnapshots } from "../services/snapshotService"
import "./App.css"

import zeroPercent from "../images/0 percent.jpeg"
import tenPercent from "../images/10 percent.jpeg"
import twentyPercent from "../images/20 percent.jpeg"
import thirtyPercent from "../images/30 percent.jpeg"
import fortyPercent from "../images/40 percent.jpeg"
import fiftyPercent from "../images/50 percent.jpeg"
import sixtyPercent from "../images/60 percent.jpeg"
import seventyPercent from "../images/70 percent.jpeg"
import eightyPercent from "../images/80 percent.jpeg"
import ninetyPercent from "../images/90 percent.jpeg"
import hundredPercent from "../images/100 percent.jpeg"

export default function App() {
  const [writing, setWriting] = useState(false)

  const [snapshots, setSnapshots] = useState([])
  const [snapshot, setSnapshot] = useState(null)

  const user = useAuthentication()

  const[seeResult, setSeeResult] = useState(false)

  const [final, setFinal] = useState(0);

  const [r1, setR1] = useState(0.5);
  const [p1, setP1] = useState(0.5);
  const [t1, setT1] = useState(0.5);
  const [c1, setC1] = useState(0.5);

  const [n1, setN1] = useState(1);
  const [normn1, setNormN1] = useState(0.5);

  function changeR1(e) {setR1(e.currentTarget.value);}
  function changeP1(e) {setP1(e.currentTarget.value);}
  function changeT1(e) {setT1(e.currentTarget.value);}
  function changeC1(e) {setC1(e.currentTarget.value);}

  const [r2, setR2] = useState(0.5);
  const [p2, setP2] = useState(0.5);
  const [t2, setT2] = useState(0.5);
  const [c2, setC2] = useState(0.5);

  const [n2, setN2] = useState(1);
  const [normn2, setNormN2] = useState(0.5);

  function changeR2(e) {setR2(e.currentTarget.value);}
  function changeP2(e) {setP2(e.currentTarget.value);}
  function changeT2(e) {setT2(e.currentTarget.value);}
  function changeC2(e) {setC2(e.currentTarget.value);}

  useEffect(conflictCalculator, [n1,n2,r1,r2,p1,p2,t1,t2,c1,c2])

  //this is from the old code
  // useEffect(() => {
  //   if (user) {
  //     fetchArticles().then(setArticles)
  //   }
  // }, [user])

  useEffect(() => {
    if (user) {
      fetchSnapshots().then(setSnapshots)
    }
  }, [user])
  

  function addSnapshot({ title }) {
    createSnapshot({ title, n1: Number (n1), n2: Number (n2), 
      r1: Number (r1), r2: Number (r2), 
      p1: Number (p1), p2: Number (p2), 
      t1: Number (t1), t2: Number (t2),
      c1: Number (c1), c2: Number (c2) }).then((snapshot) => {
      setSnapshot(snapshot)
      setSnapshots([snapshot, ...snapshots])
      setWriting(false)
    })
  }

  const seeToggle = () => {setSeeResult(prevState => !prevState);};

  useEffect(() => {
    if (snapshot){
      setN1(snapshot.n1)
      setN2(snapshot.n2)
      setR1(snapshot.r1)
      setR2(snapshot.r2)
      setP1(snapshot.p1)
      setP2(snapshot.p2)
      setT1(snapshot.t1)
      setT2(snapshot.t2)
      setC1(snapshot.c1)
      setC2(snapshot.c2)
    }
  }, [snapshot, snapshots])

  function reset(){
    setN1(1)
    setN2(1)
    setR1(0.5)
    setR2(0.5)
    setP1(0.5)
    setP2(0.5)
    setT1(0.5)
    setT2(0.5)
    setC1(0.5)
    setC2(0.5)
  }

  function zerotoOne(x){return Math.min(Math.max(x,0),1)}

  function twoDP(x){return (Math.round(x*100)/100).toFixed(2)}

  function rCalc(x){return (1-x)**2}

  function pCalc(x){return x**2}

  function tCalc(x){return Math.max(0, 2*x-1)}

  function cCalc(x){return Math.cos((Math.PI*x)/2)}

  function conflictCalculator(){
    //multiply n1 and n2 by the resources?

    //update these properly?
    setNormN1((n1/(n1+n2)))
    setNormN2((n2/(n1+n2)))
    // let normn1 = n1/(n1+n2)
    // let normn2 = n2/(n1+n2)
    //add these later
    const a = 12.5
    const b = 12.5
    const g = 12.5
    const o = 12.5
    
    let conflict = normn1 * ((a*rCalc(r1))+(b*pCalc(p1))+(g*tCalc(t1))+(o*cCalc(c1))) + normn2 * ((a*rCalc(r2))+(b*pCalc(p2))+(g*tCalc(t2))+(o*cCalc(c2)))

    conflict *= 2

    setFinal(conflict)
    console.log(conflict)
  }

  function imagepicker(percentage){
    if (percentage < 0 || percentage > 100) {
      return 'Out of range';
    }
    const range = Math.floor(percentage / 10);
    
    const array = [zeroPercent,
      tenPercent,
      twentyPercent,
      thirtyPercent,
      fortyPercent,
      fiftyPercent,
      sixtyPercent,
      seventyPercent,
      eightyPercent,
      ninetyPercent,
      hundredPercent
    ]
    return array[range]
  }

  return (
    <div className="App">
      <header>
        Intergroup Conflict Model
        {/* {user && <button onClick={() => setWriting(true)}>Save Snapshot</button>} */}
        {user && <button onClick={() => addSnapshot({title:"x"})}>Save Snapshot</button>}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      <div>
        <div id="simulation">
          <div className="Group">
            Number of People in Group 1
            <div className="sliderContainer">
              <input type="text" value={n1} onChange={(e) => setN1(e.target.value)} />
            </div>
            Percentage of resources available
            <div className="SliderContainer">
              <input onChange={changeR1} type="range" min="0" max="1" value={r1} step="0.01"/>
              <input type="text" value={r1} onChange={(e) => setR1(zerotoOne(e.target.value))} />
            </div>
            Percentage of average out-group prejudice
            <div className="SliderContainer">
              <input onChange={changeP1} type="range" min="0" max="1" value={p1} step="0.01"/>
              <input type="text" value={p1} onChange={(e) => setP1(zerotoOne(e.target.value))} />
            </div>
            Percentage of in-group cohesion
            <div className="SliderContainer">
              <input onChange={changeT1} type="range" min="0" max="1" value={t1} step="0.01"/>
              <input type="text" value={t1} onChange={(e) => setT1(zerotoOne(e.target.value))} />
            </div>
            Percentage of intergroup communication
            <div className="SliderContainer">
              <input onChange={changeC1} type="range" min="0" max="1" value={c1} step="0.01"/>
              <input type="text" value={c1} onChange={(e) => setC1(zerotoOne(e.target.value))} />
            </div>
          </div>
          
          <div className="Group">
            Number of People in Group 2
            <div className="sliderContainer">
              <input type="text" value={n2} onChange={(e) => setN2(e.target.value)} />
            </div>
            Percentage of resources available
            <div className="SliderContainer">
              <input onChange={changeR2} type="range" min="0" max="1" value={r2} step="0.01"/>
              <input type="text" value={r2} onChange={(e) => setR2(zerotoOne(e.target.value))} />
            </div>
            Percentage of average out-group prejudice
            <div className="SliderContainer">
              <input onChange={changeP2} type="range" min="0" max="1" value={p2} step="0.01"/>
              <input type="text" value={p2} onChange={(e) => setP2(zerotoOne(e.target.value))} />
            </div>
            Percentage of in-group cohesion
            <div className="SliderContainer">
              <input onChange={changeT2} type="range" min="0" max="1" value={t2} step="0.01"/>
              <input type="text" value={t2} onChange={(e) => setT2(zerotoOne(e.target.value))} />
            </div>
            Percentage of intergroup communication
            <div className="SliderContainer">
              <input onChange={changeC2} type="range" min="0" max="1" value={c2} step="0.01"/>
              <input type="text" value={c2} onChange={(e) => setC2(zerotoOne(e.target.value))} />
            </div>
          </div>

          <div className="Results">
            <button onClick={reset}>Reset Values</button>
            <button onClick={seeToggle}>{seeResult ? 'Hide Results' : 'See Results'}</button>
            {seeResult && (
            <div>
              The likelihood of conflict is {twoDP(final)}%
              <img src={imagepicker(twoDP(final))} alt="Likelihood visual" style={{ height: '200px', objectFit: 'contain' }}/>
            </div>
            )}
          </div>
          <div className="Testing">
            Normn1 {twoDP(normn1)}
          </div>
          <div className="Testing">
            Normn2 {twoDP(normn2)}
          </div>
        </div>
            
        
        <div id="history">History
          <History snapshots={snapshots} setSnapshot={setSnapshot}></History>
          {user && <button onClick={() => emptySnapshots().then (()=>setSnapshots([]))}>Delete All Snapshot</button>}
          {/* this is where the snapshot button goes, snapshots can be saved on a tab on the left */}
          {/* {!user ? "" : <Nav articles={articles} setArticle={setArticle} />}
          {!user ? (
            ""
          ) : writing ? (
            <ArticleEntry addArticle={addArticle} setWriting={setWriting} />
          ) : (
            <Article article={article} />
          )} */}
          {!user ? (
            ""
          ) : writing ? (
            <SnapshotEntry addSnapshot={addSnapshot} setWriting={setWriting} />
          ) : (
            <Snapshot snapshot={snapshot} />
          )}
        </div>

      </div>

      <footer>

      </footer>
    </div>
  )
}