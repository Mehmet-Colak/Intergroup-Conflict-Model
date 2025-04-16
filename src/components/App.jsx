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

  const [useMorals, setUseMorals] = useState(false)

  const [seeResult, setSeeResult] = useState(false)

  const [final1, setFinal1] = useState(0)
  //amount of people variables
  const [n1, setN1] = useState(1)
  //unity variables
  const [s1, setS1] = useState(0.5)
  const [gd1, setGD1] = useState(0.5)
  const [ds1, setDS1] = useState(0.5)
  const [c1, setC1] = useState(0.5)
  //prejudice variable
  const [pd1, setPD1] = useState(0.5)
  //resources variables
  const [nr1, setNR1] = useState(0.5)
  const [wr1, setWR1] = useState(0.5)
  const [m1, setM1] = useState(0.5)
  //communication variables
  const [i1, setI1] = useState(0.5)
  const [r1, setR1] = useState(0)
  const [f1, setF1] = useState(0.5)

  function changeS1(e) {
    setS1(e.currentTarget.value)
  }
  function changeGD1(e) {
    setGD1(e.currentTarget.value)
  }
  function changeDS1(e) {
    setDS1(e.currentTarget.value)
  }
  function changeC1(e) {
    setC1(e.currentTarget.value)
  }
  function changePD1(e) {
    setPD1(e.currentTarget.value)
  }
  function changeNR1(e) {
    zeroSum(e)
  }
  function changeWR1(e) {
    zeroSum(e)
  }
  function changeM1(e) {
    setM1(e.currentTarget.value)
  }
  function changeI1(e) {
    setI1(e.currentTarget.value)
  }
  function changeR1(e) {
    setR1(e.currentTarget.value)
  }
  function changeF1(e) {
    setF1(e.currentTarget.value)
  }

  const [final2, setFinal2] = useState(0)
  //amount of people variables
  const [n2, setN2] = useState(1)
  //unity variables
  const [s2, setS2] = useState(0.5)
  const [gd2, setGD2] = useState(0.5)
  const [ds2, setDS2] = useState(0.5)
  const [c2, setC2] = useState(0.5)
  //prejudice variable
  const [pd2, setPD2] = useState(0.5)
  //resources variables
  const [nr2, setNR2] = useState(0.5)
  const [wr2, setWR2] = useState(0.5)
  const [m2, setM2] = useState(0.5)
  //communication variables
  const [i2, setI2] = useState(0.5)
  const [r2, setR2] = useState(0)
  const [f2, setF2] = useState(0.5)

  function changeS2(e) {
    setS2(e.currentTarget.value)
  }
  function changeGD2(e) {
    setGD2(e.currentTarget.value)
  }
  function changeDS2(e) {
    setDS2(e.currentTarget.value)
  }
  function changeC2(e) {
    setC2(e.currentTarget.value)
  }
  function changePD2(e) {
    setPD2(e.currentTarget.value)
  }
  function changeNR2(e) {
    zeroSum(e)
  }
  function changeWR2(e) {
    zeroSum(e)
  }
  function changeM2(e) {
    setM2(e.currentTarget.value)
  }
  function changeI2(e) {
    setI2(e.currentTarget.value)
  }
  function changeR2(e) {
    setR2(e.currentTarget.value)
  }
  function changeF2(e) {
    setF2(e.currentTarget.value)
  }

  //we'd call this at each of those functions
  function zeroSum(variable) {
    if ("nr1" === variable.currentTarget.dataset.key) {
      setNR1(variable.currentTarget.value)
      setNR2(1 - variable.currentTarget.value)
    }
    if ("nr2" === variable.currentTarget.dataset.key) {
      setNR2(variable.currentTarget.value)
      setNR1(1 - variable.currentTarget.value)
    }
    if ("wr1" === variable.currentTarget.dataset.key) {
      setWR1(variable.currentTarget.value)
      setWR2(1 - variable.currentTarget.value)
    }
    if ("wr2" === variable.currentTarget.dataset.key) {
      setWR2(variable.currentTarget.value)
      setWR1(1 - variable.currentTarget.value)
    }
  }

  const [title, setTitle] = useState("Snapshot")

  const handleBlur = () => {
    if (title.trim() === "") {
      setTitle("Snapshot")
    }
  }

  useEffect(conflictCalculator, [
    n1,
    s1,
    gd1,
    ds1,
    c1,
    pd1,
    nr1,
    wr1,
    m1,
    i1,
    r1,
    f1,
    n2,
    s2,
    gd2,
    ds2,
    c2,
    pd2,
    nr2,
    wr2,
    m2,
    i2,
    r2,
    f2,
  ])

  useEffect(() => {
    if (user) {
      fetchSnapshots().then(setSnapshots)
    }
  }, [user])

  function addSnapshot({ title }) {
    createSnapshot({
      title,
      n1: Number(n1),
      s1: Number(s1),
      gd1: Number(gd1),
      ds1: Number(ds1),
      c1: Number(c1),
      pd1: Number(pd1),
      nr1: Number(nr1),
      wr1: Number(wr1),
      m1: Number(m1),
      i1: Number(i1),
      r1: Number(r1),
      f1: Number(f1),
      n2: Number(n2),
      s2: Number(s2),
      gd2: Number(gd2),
      ds2: Number(ds2),
      c2: Number(c2),
      pd2: Number(pd2),
      nr2: Number(nr2),
      wr2: Number(wr2),
      m2: Number(m2),
      i2: Number(i2),
      r2: Number(r2),
      f2: Number(f2),
    }).then((snapshot) => {
      setSnapshot(snapshot)
      setSnapshots([snapshot, ...snapshots])
    })
  }

  const moralsToggle = () => {
    setUseMorals((prevState) => !prevState)
  }

  const seeToggle = () => {
    setSeeResult((prevState) => !prevState)
  }

  useEffect(() => {
    if (snapshot) {
      setTitle(snapshot.title)
      setN1(snapshot.n1)
      setS1(snapshot.s1)
      setGD1(snapshot.gd1)
      setDS1(snapshot.ds1)
      setC1(snapshot.c1)
      setPD1(snapshot.pd1)
      setNR1(snapshot.nr1)
      setWR1(snapshot.wr1)
      setM1(snapshot.m1)
      setI1(snapshot.i1)
      setR1(snapshot.r1)
      setF1(snapshot.f1)
      setN2(snapshot.n2)
      setS2(snapshot.s2)
      setGD2(snapshot.gd2)
      setDS2(snapshot.ds2)
      setC2(snapshot.c2)
      setPD2(snapshot.pd2)
      setNR2(snapshot.nr2)
      setWR2(snapshot.wr2)
      setM2(snapshot.m2)
      setI2(snapshot.i2)
      setR2(snapshot.r2)
      setF2(snapshot.f2)
    }
  }, [snapshot, snapshots])

  function reset() {
    setN1(1)
    setS1(0.5)
    setGD1(0.5)
    setDS1(0.5)
    setC1(0.5)
    setPD1(0.5)
    setNR1(0.5)
    setWR1(0.5)
    setM1(0.5)
    setI1(0.5)
    setR1(0)
    setF1(0.5)
    setN2(1)
    setS2(0.5)
    setGD2(0.5)
    setDS2(0.5)
    setC2(0.5)
    setPD2(0.5)
    setNR2(0.5)
    setWR2(0.5)
    setM2(0.5)
    setI2(0.5)
    setR2(0)
    setF2(0.5)
  }

  //changed up to here

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

  function step0() {
    //moral foundations
  }

  function step1() {
    //create unity
    diversity1 = gd1 * ds1
    cohesion1 = s1(1 - 0.2(diversity1))
    if (c1 <= 0.3) {
      solidarity1 = cohesion1(1 + (5 / 3) * c1)
    } else {
      solidarity1 = cohesion1(1 - (2 / 7) * (c1 - 0.3))
    }
    if (N1 >= 150) {
      u1 = solidarity1 * (N1 ^ (-0.02 * (1 - s1)))
    } else {
      u1 = solidarity1
    }

    diversity2 = gd2 * ds2
    cohesion2 = s1(1 - 0.2(diversity2))
    if (c2 <= 0.3) {
      solidarity2 = cohesion1(1 + (5 / 3) * c2)
    } else {
      solidarity2 = cohesion1(1 - (2 / 7) * (c2 - 0.3))
    }
    if (N2 >= 150) {
      u2 = solidarity2 * (N2 ^ (-0.02 * (1 - s2)))
    } else {
      u2 = solidarity2
    }
  }

  function step2() {
    //update prejudice
    if (c1 <= 0.6) {
      p1 = pd1(1 + (2 / 3) * c1)
    } else {
      p1 = pd1(1 - (3 / 4) * (c1 - 0.6))
    }

    if (c2 <= 0.6) {
      p2 = pd2(1 + (2 / 3) * c2)
    } else {
      p2 = pd2(1 - (3 / 4) * (c2 - 0.6))
    }
  }

  function step3() {
    //resource scarcity
    nd1 = nr1 - nr2
    wd1 = wr1 - wr2
    dop1 = nn1 - nn2
    disparity1 =
      (1 / (0.79 - 0.42 * m1)) *
      (0.63 * (1 - m1) * nd1 + 0.21 * m1 * wd1 + 0.16 * (pd1 ^ 1.8))

    //continue from here and then mirror
  }

  function step4() {
    //contact
  }

  function step5() {
    //final calculations
  }

  function conflictCalculator() {
    // const N1 = Number(n1)
    // const N2 = Number(n2)
    // const nn1 = N1 / (N1 + N2)
    // const nn2 = N2 / (N1 + N2)
    // const a = 25
    // const b = 25
    // const g = 25
    // const o = 25
    // let conflict =
    //   nn1 * (a * rCalc(r1) + b * pCalc(p1) + g * tCalc(t1) + o * cCalc(c1)) +
    //   nn2 * (a * rCalc(r2) + b * pCalc(p2) + g * tCalc(t2) + o * cCalc(c2))
    // setFinal1(conflict)
    // setFinal2(conflict)
    // console.log(conflict)
    // if (useMorals){
    //   return
    // }
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
          <p>Title of the Snapshot</p>
          <div>
            <input
              type="texttitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div>
          <button onClick={reset}>Reset Values</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirction: "row",
            gap: 20,
            margin: "auto",
          }}
        >
          <div className="Group">
            <p>Number of People in Group 1</p>
            <div className="sliderContainer">
              <input
                type="texttitle"
                value={n1}
                onChange={(e) => setN1(e.target.value)}
              />
            </div>
            <div className="SliderContainer">
              s1
              <input
                onChange={changeS1}
                type="range"
                min="0"
                max="1"
                value={s1}
                step="0.01"
              />
              <input
                type="text"
                value={s1}
                onChange={(e) => setS1(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              gd1
              <input
                onChange={changeGD1}
                type="range"
                min="0"
                max="1"
                value={gd1}
                step="0.01"
              />
              <input
                type="text"
                value={gd1}
                onChange={(e) => setGD1(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              ds1
              <input
                onChange={changeDS1}
                type="range"
                min="0"
                max="1"
                value={ds1}
                step="0.01"
              />
              <input
                type="text"
                value={ds1}
                onChange={(e) => setDS1(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              c1
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
            <div className="SliderContainer">
              pd1
              <input
                onChange={changePD1}
                type="range"
                min="0"
                max="1"
                value={pd1}
                step="0.01"
              />
              <input
                type="text"
                value={pd1}
                onChange={(e) => setPD1(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              nr1
              <input
                onChange={changeNR1}
                type="range"
                min="0"
                max="1"
                value={nr1}
                step="0.01"
                data-key="nr1"
              />
              <input
                type="text"
                value={nr1}
                onChange={(e) => setNR1(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              wr1
              <input
                onChange={changeWR1}
                type="range"
                min="0"
                max="1"
                value={wr1}
                step="0.01"
                data-key="wr1"
              />
              <input
                type="text"
                value={wr1}
                onChange={(e) => setWR1(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              m1
              <input
                onChange={changeM1}
                type="range"
                min="0"
                max="1"
                value={m1}
                step="0.01"
              />
              <input
                type="text"
                value={m1}
                onChange={(e) => setM1(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              i1
              <input
                onChange={changeI1}
                type="range"
                min="0"
                max="1"
                value={i1}
                step="0.01"
              />
              <input
                type="text"
                value={i1}
                onChange={(e) => setI1(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              r1
              <input
                onChange={changeR1}
                type="range"
                min="-1"
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

            <div className="SliderContainer">
              f1
              <input
                onChange={changeF1}
                type="range"
                min="0"
                max="1"
                value={f1}
                step="0.01"
              />
              <input
                type="text"
                value={f1}
                onChange={(e) => setF1(zerotoOne(e.target.value))}
              />
            </div>
          </div>

          <div className="Group">
            <p>Number of People in Group 2</p>
            <div className="sliderContainer">
              <input
                type="texttitle"
                value={n2}
                onChange={(e) => setN2(e.target.value)}
              />
            </div>
            <div className="SliderContainer">
              s2
              <input
                onChange={changeS2}
                type="range"
                min="0"
                max="1"
                value={s2}
                step="0.01"
              />
              <input
                type="text"
                value={s2}
                onChange={(e) => setS2(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              gd2
              <input
                onChange={changeGD2}
                type="range"
                min="0"
                max="1"
                value={gd2}
                step="0.01"
              />
              <input
                type="text"
                value={gd2}
                onChange={(e) => setGD2(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              ds2
              <input
                onChange={changeDS2}
                type="range"
                min="0"
                max="1"
                value={ds2}
                step="0.01"
              />
              <input
                type="text"
                value={ds2}
                onChange={(e) => setDS2(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              c2
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
            </div>
            <div className="SliderContainer">
              pd2
              <input
                onChange={changePD2}
                type="range"
                min="0"
                max="1"
                value={pd2}
                step="0.01"
              />
              <input
                type="text"
                value={pd2}
                onChange={(e) => setPD2(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              nr2
              <input
                onChange={changeNR2}
                type="range"
                min="0"
                max="1"
                value={nr2}
                step="0.01"
                data-key="nr2"
              />
              <input
                type="text"
                value={nr2}
                onChange={(e) => setNR2(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              wr2
              <input
                onChange={changeWR2}
                type="range"
                min="0"
                max="1"
                value={wr2}
                step="0.01"
                data-key="wr2"
              />
              <input
                type="text"
                value={wr2}
                onChange={(e) => setWR2(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              m2
              <input
                onChange={changeM2}
                type="range"
                min="0"
                max="1"
                value={m2}
                step="0.01"
              />
              <input
                type="text"
                value={m2}
                onChange={(e) => setM2(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              i2
              <input
                onChange={changeI2}
                type="range"
                min="0"
                max="1"
                value={i2}
                step="0.01"
              />
              <input
                type="text"
                value={i2}
                onChange={(e) => setI2(zerotoOne(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              r2
              <input
                onChange={changeR2}
                type="range"
                min="-1"
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

            <div className="SliderContainer">
              f2
              <input
                onChange={changeF2}
                type="range"
                min="0"
                max="1"
                value={f2}
                step="0.01"
              />
              <input
                type="text"
                value={f2}
                onChange={(e) => setF2(zerotoOne(e.target.value))}
              />
            </div>
          </div>
        </div>
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
        <p id="morals">
          <button onClick={moralsToggle}>
            {useMorals ? "Remove Morals" : "Add Morals"}
          </button>{" "}
        </p>
        <p id="results">
          <button onClick={seeToggle}>
            {seeResult ? "Hide Results" : "See Results"}
          </button>{" "}
        </p>

        {seeResult && (
          <div
            style={{
              display: "flex",
              flexDirction: "row",
              gap: 20,
              margin: "auto",
            }}
          >
            <div className="groupresults">
              <p id="result_text">
                {/* For G1 The likelihood of conflict is {twoDP(final)}% */}
                {/* Do it twice
              Normalized Number of the People: Percentage of people in our group.
              In-Group Diversity:
              Inherent Unity: The amount of cohesion in the in-group.
              Coerced Prejudice: The amount of prejudice for the out-group as updated by the coercion.
              Importance of Wanted Resources: How much of the wanted resources does the in-group value?
              Importance of Needed Resources: How much of the needed resources does the in-group value?
              Wanted Disparity:
              Needed Disparity:
              Population Disparity:
              Disparity Unity:
              Disparity Prejudice:
              Communication Outcome:
              Communication Unity:
              Communication Prejudice
              Sentiment for Conflict:
              Likelihood of Conflict: */}
              </p>

              <p id="result_image">
                {/* <img
                src={imagepicker(twoDP(final))}
                alt="Likelihood visual"
                style={{ width: "70vw", objectFit: "contain" }}
              /> */}
              </p>
            </div>
            <div className="groupresults">
              <p id="result_text"></p>
              {/* For G2*/}

              <p id="result_image">
                {/* <img
                src={imagepicker(twoDP(final))}
                alt="Likelihood visual"
                style={{ width: "70vw", objectFit: "contain" }}
              /> */}
              </p>
            </div>
          </div>
        )}

        {user && (
          <p id="save">
            <button onClick={() => addSnapshot({ title: title })}>
              Save Snapshot
            </button>
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
