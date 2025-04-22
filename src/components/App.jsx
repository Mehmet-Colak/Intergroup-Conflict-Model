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

  const [addMorals, setAddMorals] = useState(false)

  const [addRandom, setAddRandom] = useState(false)

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
  const [p1, setP1] = useState(0.5)
  //resources variables
  const [nr1, setNR1] = useState(0.5)
  const [wr1, setWR1] = useState(0.5)
  const [m1, setM1] = useState(0.5)
  //communication variables
  const [i1, setI1] = useState(0.5)
  const [r1, setR1] = useState(0)
  const [f1, setF1] = useState(0.5)
  //random value
  const [random1, setRandom1] = useState(0)

  //moral foundations for one
  const [c_h1, setc_h1] = useState(0)
  const [l_b1, setl_b1] = useState(0)
  const [a_s1, seta_s1] = useState(0)
  const [p_d1, setp_d1] = useState(0)
  const [e_d1, sete_d1] = useState(0)
  const [p_i1, setp_i1] = useState(0)
  const [l_o1, setl_o1] = useState(0)

  //outcome
  const [nn1, setnn1] = useState(0)
  const [di1, setdi1] = useState(0)
  const [iu1, setiu1] = useState(0)
  const [ip1, setip1] = useState(0)
  const [nd1, setnd1] = useState(0)
  const [wd1, setwd1] = useState(0)
  const [ind1, setind1] = useState(0)
  const [iwd1, setiwd1] = useState(0)
  const [pd1, setpd1] = useState(0)
  const [rd1, setrd1] = useState(0)
  const [du1, setdu1] = useState(0)
  const [dp1, setdp1] = useState(0)
  const [co1, setco1] = useState(0)
  const [cu1, setcu1] = useState(0)
  const [cp1, setcp1] = useState(0)
  const [cd1, setcd1] = useState(0)
  const [vd1, setvd1] = useState(0)
  const [lc1, setlc1] = useState(0)
  const [rlc1, setrlc1] = useState(0)

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
  function changeP1(e) {
    setP1(e.currentTarget.value)
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

  //moral foundations
  function changec_h1(e) {
    setc_h1(e.currentTarget.value)
  }

  function changel_b1(e) {
    setl_b1(e.currentTarget.value)
  }

  function changea_s1(e) {
    seta_s1(e.currentTarget.value)
  }

  function changep_d1(e) {
    setp_d1(e.currentTarget.value)
  }

  function changee_d1(e) {
    sete_d1(e.currentTarget.value)
  }

  function changep_i1(e) {
    setp_i1(e.currentTarget.value)
  }

  function changel_o1(e) {
    setl_o1(e.currentTarget.value)
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
  const [p2, setP2] = useState(0.5)
  //resources variables
  const [nr2, setNR2] = useState(0.5)
  const [wr2, setWR2] = useState(0.5)
  const [m2, setM2] = useState(0.5)
  //communication variables
  const [i2, setI2] = useState(0.5)
  const [r2, setR2] = useState(0)
  const [f2, setF2] = useState(0.5)
  //random value
  const [random2, setRandom2] = useState(0)

  //moral foundations for two
  const [c_h2, setc_h2] = useState(0)
  const [l_b2, setl_b2] = useState(0)
  const [a_s2, seta_s2] = useState(0)
  const [p_d2, setp_d2] = useState(0)
  const [e_d2, sete_d2] = useState(0)
  const [p_i2, setp_i2] = useState(0)
  const [l_o2, setl_o2] = useState(0)

  //outcome
  const [nn2, setnn2] = useState(0)
  const [di2, setdi2] = useState(0)
  const [iu2, setiu2] = useState(0)
  const [ip2, setip2] = useState(0)
  const [nd2, setnd2] = useState(0)
  const [wd2, setwd2] = useState(0)
  const [ind2, setind2] = useState(0)
  const [iwd2, setiwd2] = useState(0)
  const [pd2, setpd2] = useState(0)
  const [rd2, setrd2] = useState(0)
  const [du2, setdu2] = useState(0)
  const [dp2, setdp2] = useState(0)
  const [co2, setco2] = useState(0)
  const [cu2, setcu2] = useState(0)
  const [cp2, setcp2] = useState(0)
  const [cd2, setcd2] = useState(0)
  const [vd2, setvd2] = useState(0)
  const [lc2, setlc2] = useState(0)
  const [rlc2, setrlc2] = useState(0)

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
  function changeP2(e) {
    setP2(e.currentTarget.value)
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

  //moral foundations
  function changec_h2(e) {
    setc_h2(e.currentTarget.value)
  }

  function changel_b2(e) {
    setl_b2(e.currentTarget.value)
  }

  function changea_s2(e) {
    seta_s2(e.currentTarget.value)
  }

  function changep_d2(e) {
    setp_d2(e.currentTarget.value)
  }

  function changee_d2(e) {
    sete_d2(e.currentTarget.value)
  }

  function changep_i2(e) {
    setp_i2(e.currentTarget.value)
  }

  function changel_o2(e) {
    setl_o2(e.currentTarget.value)
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
    p1,
    nr1,
    wr1,
    m1,
    i1,
    r1,
    f1,
    c_h1,
    l_b1,
    a_s1,
    p_d1,
    e_d1,
    p_i1,
    l_o1,
    n2,
    s2,
    gd2,
    ds2,
    c2,
    p2,
    nr2,
    wr2,
    m2,
    i2,
    r2,
    f2,
    c_h2,
    l_b2,
    a_s2,
    p_d2,
    e_d2,
    p_i2,
    l_o2,
    addRandom,
    addMorals,
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
      p1: Number(p1),
      nr1: Number(nr1),
      wr1: Number(wr1),
      m1: Number(m1),
      i1: Number(i1),
      r1: Number(r1),
      f1: Number(f1),
      c_h1: Number(c_h1),
      l_b1: Number(l_b1),
      a_s1: Number(a_s1),
      p_d1: Number(p_d1),
      e_d1: Number(e_d1),
      p_i1: Number(p_i1),
      l_o1: Number(l_o1),
      n2: Number(n2),
      s2: Number(s2),
      gd2: Number(gd2),
      ds2: Number(ds2),
      c2: Number(c2),
      p2: Number(p2),
      nr2: Number(nr2),
      wr2: Number(wr2),
      m2: Number(m2),
      i2: Number(i2),
      r2: Number(r2),
      f2: Number(f2),
      c_h2: Number(c_h2),
      l_b2: Number(l_b2),
      a_s2: Number(a_s2),
      p_d2: Number(p_d2),
      e_d2: Number(e_d2),
      p_i2: Number(p_i2),
      l_o2: Number(l_o2),
    }).then((snapshot) => {
      setSnapshot(snapshot)
      setSnapshots([snapshot, ...snapshots])
    })
  }

  const moralsToggle = () => {
    setAddMorals((prevState) => !prevState)
  }

  const randomToggle = () => {
    setAddRandom((prevState) => !prevState)
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
      setP1(snapshot.p1)
      setNR1(snapshot.nr1)
      setWR1(snapshot.wr1)
      setM1(snapshot.m1)
      setI1(snapshot.i1)
      setR1(snapshot.r1)
      setF1(snapshot.f1)
      setc_h1(snapshot.c_h1)
      setl_b1(snapshot.l_b1)
      seta_s1(snapshot.a_s1)
      setp_d1(snapshot.p_d1)
      sete_d1(snapshot.e_d1)
      setp_i1(snapshot.p_i1)
      setl_o1(snapshot.l_o1)
      setN2(snapshot.n2)
      setS2(snapshot.s2)
      setGD2(snapshot.gd2)
      setDS2(snapshot.ds2)
      setC2(snapshot.c2)
      setP2(snapshot.p2)
      setNR2(snapshot.nr2)
      setWR2(snapshot.wr2)
      setM2(snapshot.m2)
      setI2(snapshot.i2)
      setR2(snapshot.r2)
      setF2(snapshot.f2)
      setc_h2(snapshot.c_h2)
      setl_b2(snapshot.l_b2)
      seta_s2(snapshot.a_s2)
      setp_d2(snapshot.p_d2)
      sete_d2(snapshot.e_d2)
      setp_i2(snapshot.p_i2)
      setl_o2(snapshot.l_o2)
    }
  }, [snapshot, snapshots])

  function reset() {
    setN1(1)
    setS1(0.5)
    setGD1(0.5)
    setDS1(0.5)
    setC1(0.5)
    setP1(0.5)
    setNR1(0.5)
    setWR1(0.5)
    setM1(0.5)
    setI1(0.5)
    setR1(0)
    setF1(0.5)
    setc_h1(0)
    setl_b1(0)
    seta_s1(0)
    setp_d1(0)
    sete_d1(0)
    setp_i1(0)
    setl_o1(0)
    setN2(1)
    setS2(0.5)
    setGD2(0.5)
    setDS2(0.5)
    setC2(0.5)
    setP2(0.5)
    setNR2(0.5)
    setWR2(0.5)
    setM2(0.5)
    setI2(0.5)
    setR2(0)
    setF2(0.5)
    setc_h2(0)
    setl_b2(0)
    seta_s2(0)
    setp_d2(0)
    sete_d2(0)
    setp_i2(0)
    setl_o2(0)
  }

  //changed up to here

  function fixInputRange(x) {
    return Math.min(Math.max(x, 0), 1)
  }

  function fixGreaterInputRange(x) {
    return Math.min(Math.max(x, -1), 1)
  }

  function zeroToOne(x, step) {
    if (x > 1) {
      console.log(`At step ${step} corrected to 1 from ${x}`)
      return 1
    }
    if (x < 0) {
      console.log(`At step ${step} corrected to 0 from ${x}`)
      return 0
    }
    return x
  }

  function twoDP(x) {
    return (Math.round(x * 100) / 100).toFixed(2)
  }

  function step0() {
    //doesn't get called rn
    console.log("hey")
    return [
      // nn1,
      // s1,
      // gd1,
      // ds1,
      // c1,
      // p1,
      // nr1,
      // wr1,
      // m1,
      // i1,
      // r1,
      // f1,
      // nn2,
      // s2,
      // gd2,
      // ds2,
      // c2,
      // p2,
      // nr2,
      // wr2,
      // m2,
      // i2,
      // r2,
      // f2,
    ]
  }

  function step1(N1, N2) {
    //create unity
    let di1 = gd1 * ds1
    let cohesion1 = s1 * (1 - 0.2 * di1)
    let solidarity1
    let iu1
    if (c1 <= 0.3) {
      solidarity1 = cohesion1 * (1 + (5 / 3) * c1)
    } else {
      solidarity1 = cohesion1 * (1 - (2 / 7) * (c1 - 0.3))
    }
    if (N1 >= 150) {
      iu1 = solidarity1 * N1 ** (-0.02 * (1 - s1))
    } else {
      iu1 = solidarity1
    }

    let di2 = gd2 * ds2
    let cohesion2 = s2 * (1 - 0.2 * di2)
    let solidarity2
    let iu2
    if (c2 <= 0.3) {
      solidarity2 = cohesion2 * (1 + (5 / 3) * c2)
    } else {
      solidarity2 = cohesion2 * (1 - (2 / 7) * (c2 - 0.3))
    }
    if (N2 >= 150) {
      iu2 = solidarity2 * N2 ** (-0.02 * (1 - s2))
    } else {
      iu2 = solidarity2
    }

    return [di1, di2, iu1, iu2]
  }

  function step2() {
    //update prejudice
    let ip1
    if (c1 <= 0.6) {
      ip1 = p1 * (1 + (2 / 3) * c1)
    } else {
      ip1 = p1 * (1 - (3 / 4) * (c1 - 0.6))
    }

    let ip2
    if (c2 <= 0.6) {
      ip2 = p2 * (1 + (2 / 3) * c2)
    } else {
      ip2 = p2 * (1 - (3 / 4) * (c2 - 0.6))
    }

    return [ip1, ip2]
  }

  function step3(nn1, nn2, iu1, iu2, ip1, ip2) {
    //resource scarcity
    let nd1 = nr1 - nr2
    let ind1 = (1 - m1) * nd1
    let wd1 = wr1 - wr2
    let iwd1 = m1 * wd1
    let pd1 =
      nn1 - nn2 < 0
        ? -Math.pow(Math.abs(nn1 - nn2), 1.8)
        : Math.pow(nn1 - nn2, 1.8)
    let normCoeff1 = 1 / (0.79 - 0.42 * m1)
    let rd1 = normCoeff1 * (0.63 * ind1 + 0.21 * iwd1 + 0.16 * pd1)
    let du1
    let dp1
    if (rd1 <= 0) {
      du1 = iu1 * (1 + 0.35 * Math.abs(rd1))
      dp1 = ip1 * (1 + 0.55 * Math.abs(rd1))
    } else {
      if (s1 > 0.7) {
        du1 = iu1 * (1 + (s1 - 0.7) * rd1)
        dp1 = ip1 * (1 + (5 / 3) * (s1 - 0.7) * rd1)
      } else {
        du1 = iu1 * (1 - (4 / 7) * (0.7 - s1) * rd1)
        dp1 = ip1 * (1 - (6 / 7) * (0.7 - s1) * rd1)
      }
    }

    let nd2 = nr2 - nr1
    let ind2 = (1 - m2) * nd2
    let wd2 = wr2 - wr1
    let iwd2 = m2 * wd2
    let pd2 =
      nn2 - nn1 < 0
        ? -Math.pow(Math.abs(nn2 - nn1), 1.8)
        : Math.pow(nn2 - nn1, 1.8)
    let normCoeff2 = 1 / (0.79 - 0.42 * m2)
    let rd2 = normCoeff2 * (0.63 * ind2 + 0.21 * iwd2 + 0.16 * pd2)
    let du2
    let dp2
    if (rd2 <= 0) {
      du2 = iu2 * (1 + 0.35 * Math.abs(rd2))
      dp2 = ip2 * (1 + 0.55 * Math.abs(rd2))
    } else {
      if (s2 > 0.7) {
        du2 = iu2 * (1 + (s2 - 0.7) * rd2)
        dp2 = ip2 * (1 + (5 / 3) * (s2 - 0.7) * rd2)
      } else {
        du2 = iu2 * (1 - (4 / 7) * (0.7 - s2) * rd2)
        dp2 = ip2 * (1 - (6 / 7) * (0.7 - s2) * rd2)
      }
    }

    return [
      nd1,
      nd2,
      wd1,
      wd2,
      ind1,
      ind2,
      iwd1,
      iwd2,
      pd1,
      pd2,
      rd1,
      rd2,
      du1,
      du2,
      dp1,
      dp2,
    ]
  }

  function step4(du1, du2, dp1, dp2) {
    //contact
    let badrep1 = r1 < 0
    let co1
    let cu1
    let cp1
    if (i1 === 0) {
      co1 = 0
    } else {
      if (f1 <= 0.65) {
        co1 = ((1 / 0.65) * Math.abs(r1 * f1)) ** i1
        if (badrep1) {
          //4
          cu1 = du1 * (1 + 0.4 * co1)
          cp1 = dp1 * (1 + 0.5 * co1)
        } else {
          //2
          cu1 = du1 * (1 - 0.3 * co1)
          cp1 = dp1 * (1 + 0.2 * co1)
        }
      } else {
        co1 = ((1 / 0.35) * Math.abs(r1 * (f1 - 0.65))) ** i1
        if (badrep1) {
          //3
          cu1 = du1 * (1 + 0.4 * co1)
          cp1 = dp1 * (1 + 0.8 * co1)
        } else {
          //1
          cu1 = du1 * (1 - 0.3 * co1)
          cp1 = dp1 * (1 - 0.3 * co1)
        }
      }
    }

    let badrep2 = r2 < 0
    let co2
    let cu2
    let cp2
    if (i2 === 0) {
      co2 = 0
    } else {
      if (f2 <= 0.65) {
        co2 = ((1 / 0.65) * Math.abs(r2 * f2)) ** i2
        if (badrep2) {
          //4
          cu2 = du2 * (1 + 0.4 * co2)
          cp2 = dp2 * (1 + 0.5 * co2)
        } else {
          //2
          cu2 = du2 * (1 - 0.3 * co2)
          cp2 = dp2 * (1 + 0.2 * co2)
        }
      } else {
        co2 = ((1 / 0.35) * Math.abs(r2 * (f2 - 0.65))) ** i2
        if (badrep2) {
          //3
          cu2 = du2 * (1 + 0.4 * co2)
          cp2 = dp2 * (1 + 0.8 * co2)
        } else {
          //1
          cu2 = du2 * (1 - 0.3 * co2)
          cp2 = dp2 * (1 - 0.3 * co2)
        }
      }
    }

    return [co1, co2, cu1, cu2, cp1, cp2]
  }

  function step5(nd1, nd2, wd1, wd2, pd1, pd2, cu1, cu2, cp1, cp2) {
    //final calculations
    let cd1 = 0.4 * cu1 ** 1.3 + 0.6 * cp1 ** 1.7
    let und1 = (1 - s1) * nd1 ** 2 + s1
    let uwd1 = (1 - s1) * wd1 ** 2 + s1
    let upd1 = (1 - s1) * pd1 ** 2 + s1
    let vd1 = (3 / 6) * upd1 + (2 / 6) * und1 + (1 / 6) * uwd1
    let lc1 = cd1 * vd1
    let rlc1 = lc1
    let tempr1 = Math.random() * 2 - 1
    if (addRandom) {
      setRandom1(tempr1)
      rlc1 = lc1 * (1 + 0.05 * tempr1)
    } else {
      setRandom1(0)
      rlc1 = lc1
    }

    let cd2 = 0.4 * cu2 ** 1.3 + 0.6 * cp2 ** 1.7
    let und2 = (1 - s2) * nd2 ** 2 + s2
    let uwd2 = (1 - s2) * wd2 ** 2 + s2
    let upd2 = (1 - s2) * pd2 ** 2 + s2
    let vd2 = (3 / 6) * upd2 + (2 / 6) * und2 + (1 / 6) * uwd2
    let lc2 = cd2 * vd2
    let rlc2 = lc2
    let tempr2 = Math.random() * 2 - 1
    if (addRandom) {
      setRandom2(tempr2)
      rlc2 = lc2 * (1 + 0.05 * tempr2)
    } else {
      setRandom2(0)
      rlc2 = lc2
    }
    return [cd1, cd2, vd1, vd2, lc1, lc2, random1, random2, rlc1, rlc2]
  }

  function conflictCalculator() {
    const N1 = Number(n1)
    const N2 = Number(n2)
    setnn1(N1 / (N1 + N2))
    setnn2(N2 / (N1 + N2))
    if (addMorals) {
    }

    //gd, ds, s, and c
    const [di1, di2, iu1, iu2] = step1(N1, N2)
    //p and c
    const [ip1, ip2] = step2()
    //nr, wr, m, and s
    const [
      nd1,
      nd2,
      wd1,
      wd2,
      ind1,
      ind2,
      iwd1,
      iwd2,
      pd1,
      pd2,
      rd1,
      rd2,
      du1,
      du2,
      dp1,
      dp2,
    ] = step3(nn1, nn2, iu1, iu2, ip1, ip2)
    const [co1, co2, cu1, cu2, cp1, cp2] = step4(du1, du2, dp1, dp2)
    //r, f, and s
    const [cd1, cd2, vd1, vd2, lc1, lc2, random1, random2, rlc1, rlc2] = step5(
      nd1,
      nd2,
      wd1,
      wd2,
      pd1,
      pd2,
      cu1,
      cu2,
      cp1,
      cp2
    )
    setdi1(di1)
    setiu1(iu1)
    setip1(ip1)
    setnd1(nd1)
    setwd1(wd1)
    setind1(ind1)
    setiwd1(iwd1)
    setpd1(pd1)
    setrd1(rd1)
    setdu1(du1)
    setdp1(dp1)
    setco1(co1)
    setcu1(cu1)
    setcp1(cp1)
    setcd1(cd1)
    setvd1(vd1)
    setlc1(lc1)
    setrlc1(rlc1)
    setFinal1(rlc1)

    setdi2(di2)
    setiu2(iu2)
    setip2(ip2)
    setnd2(nd2)
    setwd2(wd2)
    setind2(ind2)
    setiwd2(iwd2)
    setpd2(pd2)
    setrd2(rd2)
    setdu2(du2)
    setdp2(dp2)
    setco2(co2)
    setcu2(cu2)
    setcp2(cp2)
    setcd2(cd2)
    setvd2(vd2)
    setlc2(lc2)
    setrlc2(rlc2)
    setFinal2(rlc2)
  }

  function imagepicker(percentage) {
    if (percentage < 0 || percentage > 1) {
      return "Out of range"
    }
    const range = Math.floor(percentage / 0.1)

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
        <p id="morals">
          <button onClick={moralsToggle}>
            {addMorals ? "Remove Morals" : "Add Morals"}
          </button>{" "}
        </p>
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
            <p>Group 1</p>
            <div className="sliderContainer">
              n1
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
                onChange={(e) => setS1(fixInputRange(e.target.value))}
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
                onChange={(e) => setGD1(fixInputRange(e.target.value))}
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
                onChange={(e) => setDS1(fixInputRange(e.target.value))}
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
                onChange={(e) => setC1(fixInputRange(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              p1
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
                onChange={(e) => setP1(fixInputRange(e.target.value))}
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
                onChange={(e) => setNR1(fixInputRange(e.target.value))}
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
                onChange={(e) => setWR1(fixInputRange(e.target.value))}
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
                onChange={(e) => setM1(fixInputRange(e.target.value))}
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
                onChange={(e) => setI1(fixInputRange(e.target.value))}
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
                onChange={(e) => setR1(fixGreaterInputRange(e.target.value))}
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
                onChange={(e) => setF1(fixInputRange(e.target.value))}
              />
            </div>
          </div>

          {/* add the moral foundations sliders */}
          {addMorals && (
            <div>
              <div className="SliderContainer">
                c_h1
                <input
                  onChange={changec_h1}
                  type="range"
                  min="-1"
                  max="1"
                  value={c_h1}
                  step="0.01"
                />
                <input
                  type="text"
                  value={c_h1}
                  onChange={(e) =>
                    setc_h1(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
              <div className="SliderContainer">
                l_b1
                <input
                  onChange={changel_b1}
                  type="range"
                  min="-1"
                  max="1"
                  value={l_b1}
                  step="0.01"
                />
                <input
                  type="text"
                  value={l_b1}
                  onChange={(e) =>
                    setl_b1(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
              <div className="SliderContainer">
                a_s1
                <input
                  onChange={changea_s1}
                  type="range"
                  min="-1"
                  max="1"
                  value={a_s1}
                  step="0.01"
                />
                <input
                  type="text"
                  value={a_s1}
                  onChange={(e) =>
                    seta_s1(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
              <div className="SliderContainer">
                p_d1
                <input
                  onChange={changep_d1}
                  type="range"
                  min="-1"
                  max="1"
                  value={p_d1}
                  step="0.01"
                />
                <input
                  type="text"
                  value={p_d1}
                  onChange={(e) =>
                    setp_d1(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
              <div className="SliderContainer">
                e_d1
                <input
                  onChange={changee_d1}
                  type="range"
                  min="-1"
                  max="1"
                  value={e_d1}
                  step="0.01"
                />
                <input
                  type="text"
                  value={e_d1}
                  onChange={(e) =>
                    sete_d1(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
              <div className="SliderContainer">
                p_i1
                <input
                  onChange={changep_i1}
                  type="range"
                  min="-1"
                  max="1"
                  value={p_i1}
                  step="0.01"
                />
                <input
                  type="text"
                  value={p_i1}
                  onChange={(e) =>
                    setp_i1(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
              <div className="SliderContainer">
                l_o1
                <input
                  onChange={changel_o1}
                  type="range"
                  min="-1"
                  max="1"
                  value={l_o1}
                  step="0.01"
                />
                <input
                  type="text"
                  value={l_o1}
                  onChange={(e) =>
                    setl_o1(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
            </div>
          )}
          {/* add the modified values */}
          {addMorals && (
            <div>
              <div>{c_h1}</div>
              <div>{l_b1}</div>
              <div>{a_s1}</div>
              <div>{p_d1}</div>
              <div>{e_d1}</div>
              <div>{p_i1}</div>
              <div>{l_o1}</div>
            </div>
          )}

          <div className="Group">
            <p>Group 2</p>
            <div className="sliderContainer">
              n2
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
                onChange={(e) => setS2(fixInputRange(e.target.value))}
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
                onChange={(e) => setGD2(fixInputRange(e.target.value))}
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
                onChange={(e) => setDS2(fixInputRange(e.target.value))}
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
                onChange={(e) => setC2(fixInputRange(e.target.value))}
              />
            </div>
            <div className="SliderContainer">
              p2
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
                onChange={(e) => setP2(fixInputRange(e.target.value))}
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
                onChange={(e) => setNR2(fixInputRange(e.target.value))}
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
                onChange={(e) => setWR2(fixInputRange(e.target.value))}
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
                onChange={(e) => setM2(fixInputRange(e.target.value))}
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
                onChange={(e) => setI2(fixInputRange(e.target.value))}
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
                onChange={(e) => setR2(fixGreaterInputRange(e.target.value))}
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
                onChange={(e) => setF2(fixInputRange(e.target.value))}
              />
            </div>
          </div>
          {/* add the moral foundations sliders */}
          {addMorals && (
            <div>
              <div className="SliderContainer">
                c_h2
                <input
                  onChange={changec_h2}
                  type="range"
                  min="-1"
                  max="1"
                  value={c_h2}
                  step="0.01"
                />
                <input
                  type="text"
                  value={c_h2}
                  onChange={(e) =>
                    setc_h2(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
              <div className="SliderContainer">
                l_b2
                <input
                  onChange={changel_b2}
                  type="range"
                  min="-1"
                  max="1"
                  value={l_b2}
                  step="0.01"
                />
                <input
                  type="text"
                  value={l_b2}
                  onChange={(e) =>
                    setl_b2(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
              <div className="SliderContainer">
                a_s2
                <input
                  onChange={changea_s2}
                  type="range"
                  min="-1"
                  max="1"
                  value={a_s2}
                  step="0.01"
                />
                <input
                  type="text"
                  value={a_s2}
                  onChange={(e) =>
                    seta_s2(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
              <div className="SliderContainer">
                p_d2
                <input
                  onChange={changep_d2}
                  type="range"
                  min="-1"
                  max="1"
                  value={p_d2}
                  step="0.01"
                />
                <input
                  type="text"
                  value={p_d2}
                  onChange={(e) =>
                    setp_d2(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
              <div className="SliderContainer">
                e_d2
                <input
                  onChange={changee_d2}
                  type="range"
                  min="-1"
                  max="1"
                  value={e_d2}
                  step="0.01"
                />
                <input
                  type="text"
                  value={e_d2}
                  onChange={(e) =>
                    sete_d2(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
              <div className="SliderContainer">
                p_i2
                <input
                  onChange={changep_i2}
                  type="range"
                  min="-1"
                  max="1"
                  value={p_i2}
                  step="0.01"
                />
                <input
                  type="text"
                  value={p_i2}
                  onChange={(e) =>
                    setp_i2(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
              <div className="SliderContainer">
                l_o2
                <input
                  onChange={changel_o2}
                  type="range"
                  min="-1"
                  max="1"
                  value={l_o2}
                  step="0.01"
                />
                <input
                  type="text"
                  value={l_o2}
                  onChange={(e) =>
                    setl_o2(fixGreaterInputRange(e.target.value))
                  }
                />
              </div>
            </div>
          )}
          {/* add the modified values */}
          {addMorals && (
            <div>
              <div>{c_h2}</div>
              <div>{l_b2}</div>
              <div>{a_s2}</div>
              <div>{p_d2}</div>
              <div>{e_d2}</div>
              <div>{p_i2}</div>
              <div>{l_o2}</div>
            </div>
          )}
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
        <p id="random">
          <button onClick={randomToggle}>
            {addRandom ? "Remove Random" : "Add Random"}
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
            <div
              style={{
                display: "flex",
                flexDirction: "row",
                gap: 20,
                margin: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirction: "row",
                  gap: 20,
                  margin: "auto",
                }}
              >
                {/* For G1 The likelihood of conflict is {twoDP(final)}% */}
                <div className="result column">
                  <div>nn1: {twoDP(nn1)}</div>
                  <div>di1: {twoDP(di1)}</div>
                  <div>iu1: {twoDP(iu1)}</div>
                  <div>ip1: {twoDP(ip1)}</div>
                  <div>nd1: {twoDP(nd1)}</div>
                </div>
                <div className="result column">
                  <div>wd1: {twoDP(wd1)}</div>
                  <div>ind1: {twoDP(ind1)}</div>
                  <div>iwd1: {twoDP(iwd1)}</div>
                  <div>pd1: {twoDP(pd1)}</div>
                  <div>rd1: {twoDP(rd1)}</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirction: "row",
                  gap: 20,
                  margin: "auto",
                }}
              >
                <div className="result column">
                  <div>du1: {twoDP(du1)}</div>
                  <div>dp1: {twoDP(dp1)}</div>
                  <div>co1: {twoDP(co1)}</div>
                  <div>cu1: {twoDP(cu1)}</div>
                  <div>cp1: {twoDP(cp1)}</div>
                </div>
                <div className="result column">
                  <div>cd1: {twoDP(cd1)}</div>
                  <div>vd1: {twoDP(vd1)}</div>
                  <div>lc1: {twoDP(lc1)}</div>
                  <div>r1: {twoDP(random1)}</div>
                  <div>final1: {twoDP(final1)}</div>
                </div>
              </div>

              <p id="result_image">
                <img
                  src={imagepicker(twoDP(final1))}
                  alt="Likelihood visual"
                  style={{ width: "10vw", objectFit: "contain" }}
                />
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirction: "row",
                gap: 20,
                margin: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirction: "row",
                  gap: 20,
                  margin: "auto",
                }}
              >
                <div className="result column">
                  <div>nn2: {twoDP(nn2)}</div>
                  <div>di2: {twoDP(di2)}</div>
                  <div>iu2: {twoDP(iu2)}</div>
                  <div>ip2: {twoDP(ip2)}</div>
                  <div>nd2: {twoDP(nd2)}</div>
                </div>
                <div className="result column">
                  <div>wd2: {twoDP(wd2)}</div>
                  <div>ind2: {twoDP(ind2)}</div>
                  <div>iwd2: {twoDP(iwd2)}</div>
                  <div>pd2: {twoDP(pd2)}</div>
                  <div>rd2: {twoDP(rd2)}</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirction: "row",
                  gap: 20,
                  margin: "auto",
                }}
              >
                <div className="result column">
                  <div>du2: {twoDP(du2)}</div>
                  <div>dp2: {twoDP(dp2)}</div>
                  <div>co2: {twoDP(co2)}</div>
                  <div>cu2: {twoDP(cu2)}</div>
                  <div>cp2: {twoDP(cp2)}</div>
                </div>
                <div className="result column">
                  <div>cd2: {twoDP(cd2)}</div>
                  <div>vd2: {twoDP(vd2)}</div>
                  <div>lc2: {twoDP(lc2)}</div>
                  <div>r2: {twoDP(random2)}</div>
                  <div>final: {twoDP(final2)}</div>
                </div>
              </div>

              <p id="result_image">
                <img
                  src={imagepicker(twoDP(final2))}
                  alt="Likelihood visual"
                  style={{ width: "10vw", objectFit: "contain" }}
                />
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
