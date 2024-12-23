import { useEffect, useState } from "react"
import History from "./History"
import { SignIn, SignOut } from "./Auth"
import { useAuthentication } from "../services/authService"
import {
  fetchSnapshots,
  createSnapshot,
  emptySnapshots,
} from "../services/snapshotService"
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
  const [snapshots, setSnapshots] = useState([])
  const [snapshot, setSnapshot] = useState(null)

  const user = useAuthentication()

  const [seeResult, setSeeResult] = useState(false)

  const [final, setFinal] = useState(0)

  const [r1, setR1] = useState(0.5)
  const [p1, setP1] = useState(0.5)
  const [t1, setT1] = useState(0.5)
  const [c1, setC1] = useState(0.5)

  const [n1, setN1] = useState(1)

  function changeR1(e) {
    setR1(e.currentTarget.value)
  }
  function changeP1(e) {
    setP1(e.currentTarget.value)
  }
  function changeT1(e) {
    setT1(e.currentTarget.value)
  }
  function changeC1(e) {
    setC1(e.currentTarget.value)
  }

  const [r2, setR2] = useState(0.5)
  const [p2, setP2] = useState(0.5)
  const [t2, setT2] = useState(0.5)
  const [c2, setC2] = useState(0.5)

  const [n2, setN2] = useState(1)

  function changeR2(e) {
    setR2(e.currentTarget.value)
  }
  function changeP2(e) {
    setP2(e.currentTarget.value)
  }
  function changeT2(e) {
    setT2(e.currentTarget.value)
  }
  function changeC2(e) {
    setC2(e.currentTarget.value)
  }

  const [title, setTitle] = useState("Snapshot")

  const handleBlur = () => {
    if (title.trim() === "") {
      setTitle("Snapshot")
    }
  }

  useEffect(conflictCalculator, [n1, n2, r1, r2, p1, p2, t1, t2, c1, c2])

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
    createSnapshot({
      title,
      n1: Number(n1),
      n2: Number(n2),
      r1: Number(r1),
      r2: Number(r2),
      p1: Number(p1),
      p2: Number(p2),
      t1: Number(t1),
      t2: Number(t2),
      c1: Number(c1),
      c2: Number(c2),
    }).then((snapshot) => {
      setSnapshot(snapshot)
      setSnapshots([snapshot, ...snapshots])
    })
  }

  const seeToggle = () => {
    setSeeResult((prevState) => !prevState)
  }

  useEffect(() => {
    if (snapshot) {
      setTitle(snapshot.title)
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

  function reset() {
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

  function zerotoOne(x) {
    return Math.min(Math.max(x, 0), 1)
  }

  function twoDP(x) {
    return (Math.round(x * 100) / 100).toFixed(2)
  }

  function rCalc(x) {
    return (1 - x) ** 2
  }

  function pCalc(x) {
    return x ** 2
  }

  function tCalc(x) {
    return Math.max(0, 2 * x - 1)
  }

  function cCalc(x) {
    return Math.cos((Math.PI * x) / 2)
  }

  function conflictCalculator() {
    const N1 = Number(n1)
    const N2 = Number(n2)

    const nn1 = N1 / (N1 + N2)
    const nn2 = N2 / (N1 + N2)

    const a = 25
    const b = 25
    const g = 25
    const o = 25

    let conflict =
      nn1 * (a * rCalc(r1) + b * pCalc(p1) + g * tCalc(t1) + o * cCalc(c1)) +
      nn2 * (a * rCalc(r2) + b * pCalc(p2) + g * tCalc(t2) + o * cCalc(c2))

    setFinal(conflict)
    console.log(conflict)
  }

  function imagepicker(percentage) {
    if (percentage < 0 || percentage > 100) {
      return "Out of range"
    }
    const range = Math.floor(percentage / 10)

    const array = [
      zeroPercent,
      tenPercent,
      twentyPercent,
      thirtyPercent,
      fortyPercent,
      fiftyPercent,
      sixtyPercent,
      seventyPercent,
      eightyPercent,
      ninetyPercent,
      hundredPercent,
    ]
    return array[range]
  }

  return (
    <div className="App">
      <header>
        ConflictCalc
        <h1>{!user ? <SignIn /> : <SignOut />}</h1>
      </header>

      <div id="simulation">
        <div>
          <p1>Title of the Snapshot</p1>

          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div>
          <button onClick={reset}>Reset Values</button>
        </div>

        <div className="Group">
          <p1>Number of People in Group 1</p1>
          <div className="sliderContainer">
            <input
              type="text"
              value={n1}
              onChange={(e) => setN1(e.target.value)}
            />
          </div>
          Percentage of resources available
          <div className="SliderContainer">
            <input
              onChange={changeR1}
              type="range"
              min="0"
              max="1"
              value={r1}
              step="0.01"
            />

            <input
              type="text"
              value={r1}
              onChange={(e) => setR1(zerotoOne(e.target.value))}
            />
          </div>
          Percentage of average out-group prejudice
          <div className="SliderContainer">
            <input
              onChange={changeP1}
              type="range"
              min="0"
              max="1"
              value={p1}
              step="0.01"
            />

            <input
              type="text"
              value={p1}
              onChange={(e) => setP1(zerotoOne(e.target.value))}
            />
          </div>
          Percentage of in-group cohesion
          <div className="SliderContainer">
            <input
              onChange={changeT1}
              type="range"
              min="0"
              max="1"
              value={t1}
              step="0.01"
            />

            <input
              type="text"
              value={t1}
              onChange={(e) => setT1(zerotoOne(e.target.value))}
            />
          </div>
          Percentage of intergroup communication
          <div className="SliderContainer">
            <input
              onChange={changeC1}
              type="range"
              min="0"
              max="1"
              value={c1}
              step="0.01"
            />

            <input
              type="text"
              value={c1}
              onChange={(e) => setC1(zerotoOne(e.target.value))}
            />
          </div>
        </div>

        <div className="Group">
          <p1>Number of People in Group 2</p1>
          <div className="sliderContainer">
            <input
              type="text"
              value={n2}
              onChange={(e) => setN2(e.target.value)}
            />
          </div>
          Percentage of resources available
          <div className="SliderContainer">
            <input
              onChange={changeR2}
              type="range"
              min="0"
              max="1"
              value={r2}
              step="0.01"
            />

            <input
              type="text"
              value={r2}
              onChange={(e) => setR2(zerotoOne(e.target.value))}
            />
          </div>
          Percentage of average out-group prejudice
          <div className="SliderContainer">
            <input
              onChange={changeP2}
              type="range"
              min="0"
              max="1"
              value={p2}
              step="0.01"
            />

            <input
              type="text"
              value={p2}
              onChange={(e) => setP2(zerotoOne(e.target.value))}
            />
          </div>
          Percentage of in-group cohesion
          <div className="SliderContainer">
            <input
              onChange={changeT2}
              type="range"
              min="0"
              max="1"
              value={t2}
              step="0.01"
            />

            <input
              type="text"
              value={t2}
              onChange={(e) => setT2(zerotoOne(e.target.value))}
            />
          </div>
          Percentage of intergroup communication
          <div className="SliderContainer">
            <input
              onChange={changeC2}
              type="range"
              min="0"
              max="1"
              value={c2}
              step="0.01"
            />

            <input
              type="text"
              value={c2}
              onChange={(e) => setC2(zerotoOne(e.target.value))}
            />

            <p></p>
          </div>
        </div>

        {/* <div className="Testing">

        N1 {twoDP(n1)}

        Normn1 {twoDP(normn1)}

      </div>

      <div className="Testing">

        N2 {twoDP(n2)}

        Normn2 {twoDP(normn2)}

      </div> */}
      </div>

      <div id="history">
        <p>History</p>

        <History snapshots={snapshots} setSnapshot={setSnapshot}></History>

        {user && (
          <p id="delete">
            <button
              onClick={() => emptySnapshots().then(() => setSnapshots([]))}
            >
              Delete All Snapshot
            </button>
          </p>
        )}
      </div>

      <div className="Results">
        <p id="results">
          <button onClick={seeToggle}>
            {seeResult ? "Hide Results" : "See Results"}
          </button>{" "}
        </p>

        {seeResult && (
          <div>
            <p id="result_text">
              The likelihood of conflict is {twoDP(final)}%
            </p>

            <p id="result_image">
              <img
                src={imagepicker(twoDP(final))}
                alt="Likelihood visual"
                style={{ width: "70vw", objectFit: "contain" }}
              />
            </p>
          </div>
        )}

        {user && (
          <p id="save">
            <button onClick={() => addSnapshot({ title: title })}>
              Save Snapshot
            </button>

            <> </>
          </p>
        )}
      </div>

      <footer>
        The SMIling COLlaborators
        <a href="https://github.com/Mehmet-Colak/Intergroup-Conflict-Model">
          Github
        </a>
        <a href="https://console.firebase.google.com/u/0/project/intergroup-conflict-model/overview">
          Firebase
        </a>
      </footer>
    </div>
  )
}
