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

  //mf inputs
  //unity variables
  const [cs1, setCS1] = useState(0.5)
  const [cgd1, setCGD1] = useState(0.5)
  const [cds1, setCDS1] = useState(0.5)
  const [cc1, setCC1] = useState(0.5)
  //prejudice variable
  const [chp1, setCHP1] = useState(0.5)
  //resources variables
  const [cnr1, setCNR1] = useState(0.5)
  const [cwr1, setCWR1] = useState(0.5)
  const [cm1, setCM1] = useState(0.5)
  //communication variables
  const [ci1, setCI1] = useState(0.5)
  const [cr1, setCR1] = useState(0)
  const [cf1, setCF1] = useState(0.5)

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
  const [ii1, setii1] = useState(0)

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

  //mf inputs
  //unity variables
  const [cs2, setCS2] = useState(0.5)
  const [cgd2, setCGD2] = useState(0.5)
  const [cds2, setCDS2] = useState(0.5)
  const [cc2, setCC2] = useState(0.5)
  //prejudice variable
  const [chp2, setCHP2] = useState(0.5)
  //resources variables
  const [cnr2, setCNR2] = useState(0.5)
  const [cwr2, setCWR2] = useState(0.5)
  const [cm2, setCM2] = useState(0.5)
  //communication variables
  const [ci2, setCI2] = useState(0.5)
  const [cr2, setCR2] = useState(0)
  const [cf2, setCF2] = useState(0.5)

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
  const [ii2, setii2] = useState(0)

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
    cs1,
    cgd1,
    cds1,
    cc1,
    chp1,
    cnr1,
    cwr1,
    cm1,
    ci1,
    cr1,
    cf1,
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
    cs2,
    cgd2,
    cds2,
    cc2,
    chp2,
    cnr2,
    cwr2,
    cm2,
    ci2,
    cr2,
    cf2,
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

  function clamp(x, step, group) {
    if (x > 1) {
      console.log(`At step ${step} for ${group} corrected to 1 from ${x}`)
      return 1
    }
    if (x < 0) {
      console.log(`At step ${step} for ${group} corrected to 0 from ${x}`)
      return 0
    }
    return x
  }

  function greaterclamp(x, step, group) {
    if (x > 1) {
      console.log(`At step ${step} for ${group} corrected to 1 from ${x}`)
      return 1
    }
    if (x < -1) {
      console.log(`At step ${step} for ${group} corrected to -1 from ${x}`)
      return -1
    }
    return x
  }

  function twoDP(x) {
    return (Math.round(x * 100) / 100).toFixed(2)
  }

  function step0(
    _s1,
    _gd1,
    _ds1,
    _c1,
    _p1,
    _nr1,
    _wr1,
    _m1,
    _i1,
    _r1,
    _f1,
    _s2,
    _gd2,
    _ds2,
    _c2,
    _p2,
    _nr2,
    _wr2,
    _m2,
    _i2,
    _r2,
    _f2
  ) {
    //doesn't get called rn
    // console.log("hey")
    // let cs1,
    //   cgd1,
    //   cds1,
    //   cc1,
    //   chp1,
    //   cnr1,
    //   cwr1,
    //   cm1,
    //   ci1,
    //   cr1,
    //   cf1,
    //   cs2,
    //   cgd2,
    //   cds2,
    //   cc2,
    //   chp2,
    //   cnr2,
    //   cwr2,
    //   cm2,
    //   ci2,
    //   cr2,
    //   cf2
    // table = { c_h: {}, l_b: {}, a_s: {}, p_d: {}, e_d: {}, p_i: {}, l_o: {} }
    // return [
    //   cs1,
    //   cgd1,
    //   cds1,
    //   cc1,
    //   chp1,
    //   cnr1,
    //   cwr1,
    //   cm1,
    //   ci1,
    //   cr1,
    //   cf1,
    //   cs2,
    //   cgd2,
    //   cds2,
    //   cc2,
    //   chp2,
    //   cnr2,
    //   cwr2,
    //   cm2,
    //   ci2,
    //   cr2,
    //   cf2,
    // ]
    return [
      _s1,
      _gd1,
      _ds1,
      _c1,
      _p1,
      _nr1,
      _wr1,
      _m1,
      _i1,
      _r1,
      _f1,
      _s2,
      _gd2,
      _ds2,
      _c2,
      _p2,
      _nr2,
      _wr2,
      _m2,
      _i2,
      _r2,
      _f2,
    ]
  }

  function step1(_N1, _N2, _gd1, _gd2, _ds1, _ds2, _s1, _s2, _c1, _c2) {
    //create unity
    let di1 = clamp(_gd1 * _ds1, "1a", "1")
    let cohesion1 = clamp(_s1 * (1 - 0.2 * di1), "1b", "1")
    let solidarity1
    let iu1
    if (_c1 <= 0.3) {
      solidarity1 = clamp(cohesion1 * (1 + (5 / 3) * _c1), "1c", "1")
    } else {
      solidarity1 = clamp(cohesion1 * (1 - (2 / 7) * (_c1 - 0.3)), "1c", "1")
    }
    if (_N1 > 150) {
      iu1 = clamp(solidarity1 * (0.98 ^ (_N1 / 150)) + _s1, "1d", "1")
    } else {
      iu1 = clamp(solidarity1, "1d", "1")
    }

    let di2 = clamp(_gd2 * _ds2, "1a", "2")
    let cohesion2 = clamp(_s2 * (1 - 0.2 * di2), "1b", "2")
    let solidarity2
    let iu2
    if (_c2 <= 0.3) {
      solidarity2 = clamp(cohesion2 * (1 + (5 / 3) * _c2), "1c", "2")
    } else {
      solidarity2 = clamp(cohesion2 * (1 - (2 / 7) * (_c2 - 0.3)), "1c", "2")
    }
    if (_N2 > 150) {
      iu2 = clamp(solidarity2 * (0.98 ^ (_N2 / 150)) + _s2, "1d", "2")
    } else {
      iu2 = clamp(solidarity2, "1d", "2")
    }

    return [di1, di2, iu1, iu2]
  }

  function step2(_p1, _p2, _c1, _c2, _i1, _i2) {
    //update prejudice and interaction
    let ip1
    if (_c1 >= 0.6) {
      ip1 = clamp(_p1 * (1 + (2 / 3) * _c1), "2a", "1")
    } else {
      ip1 = clamp(_p1 * (1 - (3 / 4) * (_c1 - 0.6)), "2a", "1")
    }

    let ii1
    ii1 = clamp(_i1 * (1 - 0.4 * _c1), "2b", "1")

    let ip2
    if (_c2 >= 0.6) {
      ip2 = clamp(_p2 * (1 + (2 / 3) * _c2), "2a", "2")
    } else {
      ip2 = clamp(_p2 * (1 - (3 / 4) * (_c2 - 0.6)), "2a", "2")
    }

    let ii2
    ii2 = clamp(_i2 * (1 - 0.4 * _c2), "2b", "2")

    return [ip1, ip2, ii1, ii2]
  }

  function step3(
    _N1,
    _N2,
    _s1,
    _s2,
    _p1,
    _p2,
    _m1,
    _m2,
    _nr1,
    _nr2,
    _wr1,
    _wr2,
    _iu1,
    _iu2,
    _ip1,
    _ip2
  ) {
    //resource scarcity
    let nn1 = clamp(_N1 / (_N1 + _N2), "3a", "1")
    let nn2 = clamp(_N2 / (_N2 + _N1), "3a", "2")

    if (_p1 > 0.7) {
      _p1 = (10 / 3) * (_p1 - 0.7)
    } else {
      _p1 = 0
    }

    if (_p2 > 0.7) {
      _p2 = (10 / 3) * (_p2 - 0.7)
    } else {
      _p2 = 0
    }

    if (_s1 > 0.7) {
      _s1 = (10 / 3) * (_s1 - 0.7)
    } else {
      _s1 = 0
    }

    if (_s2 > 0.7) {
      _s2 = (10 / 3) * (_s2 - 0.7)
    } else {
      _s2 = 0
    }

    //don't know how well this NaN clamper works
    let nd1 = greaterclamp(_nr1 / (nn1 + nn2 * _p1) - 1, "3b-a", "1")
    let ind1 = clamp((1 - _m1) * nd1, "3b-b", "1")
    let wd1 = greaterclamp(_wr1 / (nn1 + nn2 * _s1) - 1, "3c-a", "1")
    let iwd1 = clamp(_m1 * wd1, "3c-b", "1")
    let pd1 = greaterclamp(2 * (nn1 - 0.5 * (1 + (_s1 + _p1) / 2)), "3d", "1")
    let normCoeff1 = 1 / (0.79 - 0.42 * _m1)
    let rd1 = greaterclamp(
      normCoeff1 * (0.63 * ind1 + 0.21 * iwd1 + 0.16 * pd1),
      "3e-a",
      "1"
    )
    let vd1 = greaterclamp(
      (3 / 6) * pd1 + (2 / 6) * nd1 + (1 / 6) * wd1,
      "3e-b",
      "1"
    )
    let du1
    let dp1
    if (rd1 <= 0) {
      du1 = clamp(_iu1 * (1 + 0.35 * Math.abs(rd1)), "3f-a-a", "1")
      dp1 = clamp(_ip1 * (1 + 0.55 * Math.abs(rd1)), "3f-a-b", "1")
    } else {
      if (_s1 > 0.7) {
        du1 = clamp(_iu1 * (1 + (_s1 - 0.7) * rd1), "3f-b-a", "1")
        dp1 = clamp(_ip1 * (1 + (5 / 3) * (_s1 - 0.7) * rd1), "3f-b-b", "1")
      } else {
        du1 = clamp(_iu1 * (1 - (4 / 7) * (0.7 - _s1) * rd1), "3f-c-a", "1")
        dp1 = clamp(_ip1 * (1 - (6 / 7) * (0.7 - _s1) * rd1), "3f-c-b", "1")
      }
    }

    let nd2 = greaterclamp(_nr2 / (nn2 + nn1 * _p2) - 1, "3b-a", "2")
    let ind2 = clamp((1 - _m2) * nd2, "3b-b", "2")
    let wd2 = greaterclamp(_wr2 / (nn2 + nn1 * _s2) - 1, "3c-a", "2")
    let iwd2 = clamp(_m2 * wd2, "3c-b", "2")
    let pd2 = greaterclamp(2 * (nn2 - 0.5 * (1 + (_s2 + _p2) / 2)), "3d", "2")
    let normCoeff2 = 1 / (0.79 - 0.42 * _m2)
    let rd2 = greaterclamp(
      normCoeff2 * (0.63 * ind2 + 0.21 * iwd2 + 0.16 * pd2),
      "3e-a",
      "2"
    )
    let vd2 = greaterclamp(
      (3 / 6) * pd2 + (2 / 6) * nd2 + (1 / 6) * wd2,
      "3e-b",
      "2"
    )
    let du2
    let dp2
    if (rd2 <= 0) {
      du2 = clamp(_iu2 * (1 + 0.35 * Math.abs(rd2)), "3f-a-a", "2")
      dp2 = clamp(_ip2 * (1 + 0.55 * Math.abs(rd2)), "3f-a-b", "2")
    } else {
      if (_s2 > 0.7) {
        du2 = clamp(_iu2 * (1 + (_s2 - 0.7) * rd2), "3f-b-a", "2")
        dp2 = clamp(_ip2 * (1 + (5 / 3) * (_s2 - 0.7) * rd2), "3f-b-b", "2")
      } else {
        du2 = clamp(_iu2 * (1 - (4 / 7) * (0.7 - _s2) * rd2), "3f-c-a", "2")
        dp2 = clamp(_ip2 * (1 - (6 / 7) * (0.7 - _s2) * rd2), "3f-c-b", "2")
      }
    }

    return [
      nn1,
      nn2,
      nd1,
      nd2,
      ind1,
      ind2,
      wd1,
      wd2,
      iwd1,
      iwd2,
      pd1,
      pd2,
      rd1,
      rd2,
      vd1,
      vd2,
      du1,
      du2,
      dp1,
      dp2,
    ]
  }

  function step4(
    _c1,
    _c2,
    _r1,
    _r2,
    _f1,
    _f2,
    _ii1,
    _ii2,
    _du1,
    _du2,
    _dp1,
    _dp2
  ) {
    //contact
    let goodrep1 = _r1 > 0
    let co1
    let cu1
    let cp1
    if (_ii1 === 0) {
      co1 = 0
      cu1 = _du1
      cp1 = _dp1
    } else {
      if (_f1 > 0.65) {
        co1 = greaterclamp(
          ((1 / 0.35) * Math.abs(_r1 * (_f1 - 0.65))) ** _ii1,
          "4a-a",
          "1"
        )
        if (goodrep1) {
          cu1 = clamp(_du1 * (1 - 0.3 * co1), "4b-a", "1")
          cp1 = clamp(_dp1 * (1 - 0.3 * co1), "4b-b", "1")
        } else {
          cu1 = clamp(_du1 * (1 + 0.4 * co1), "4b-c", "1")
          cp1 = clamp(_dp1 * (1 + 0.8 * co1), "4b-d", "1")
        }
      } else {
        co1 = greaterclamp(
          ((1 / 0.65) * Math.abs(_r1 * _f1)) ** _ii1,
          "4a-b",
          "1"
        )
        if (goodrep1) {
          cu1 = clamp(_du1 * (1 - 0.3 * co1), "4b-a", "1")
          cp1 = clamp(_dp1 * (1 + 0.2 * co1), "4b-b", "1")
        } else {
          cu1 = clamp(_du1 * (1 + 0.4 * co1), "4b-c", "1")
          cp1 = clamp(_dp1 * (1 + 0.5 * co1), "4b-d", "1")
        }
      }
    }

    let goodrep2 = _r2 > 0
    let co2
    let cu2
    let cp2
    if (_ii2 === 0) {
      co2 = 0
      cu2 = _du2
      cp2 = _dp2
    } else {
      if (_f2 > 0.65) {
        co2 = greaterclamp(
          ((1 / 0.35) * Math.abs(_r2 * (_f2 - 0.65))) ** _ii2,
          "4a-a",
          "2"
        )
        if (goodrep2) {
          cu2 = clamp(_du2 * (1 - 0.3 * co2), "4b-a", "2")
          cp2 = clamp(_dp2 * (1 - 0.3 * co2), "4b-b", "2")
        } else {
          cu2 = clamp(_du2 * (1 + 0.4 * co2), "4b-c", "2")
          cp2 = clamp(_dp2 * (1 + 0.8 * co2), "4b-d", "2")
        }
      } else {
        co2 = greaterclamp(
          ((1 / 0.65) * Math.abs(_r2 * _f2)) ** _ii2,
          "4a-b",
          "2"
        )
        if (goodrep2) {
          cu2 = clamp(_du2 * (1 - 0.3 * co2), "4b-a", "2")
          cp2 = clamp(_dp2 * (1 + 0.2 * co2), "4b-b", "2")
        } else {
          cu2 = clamp(_du2 * (1 + 0.4 * co2), "4b-c", "2")
          cp2 = clamp(_dp2 * (1 + 0.5 * co2), "4b-d", "2")
        }
      }
    }

    return [co1, co2, cu1, cu2, cp1, cp2]
  }

  function step5(_vd1, _vd2, _cu1, _cu2, _cp1, _cp2, _s1, _s2) {
    //final calculations
    let cd1 = clamp(0.4 * _cu1 ** 1.3 + 0.6 * _cp1 ** 1.7, "5a", "1")
    let lc1 = clamp(cd1 * ((1 - _s1) * _vd1 ** 2 + _s1), "5b-a", "1")
    let tempr1 = Math.random() * 2 - 1
    if (addRandom) {
      setRandom1(tempr1)
      lc1 = clamp(lc1 * (1 + 0.05 * tempr1), "5b-b", "1")
    } else {
      setRandom1(0)
    }

    let cd2 = clamp(0.4 * _cu2 ** 1.3 + 0.6 * _cp2 ** 1.7, "5a", "2")
    let lc2 = clamp(cd2 * ((1 - _s2) * _vd2 ** 2 + _s2), "5b-a", "2")
    let tempr2 = Math.random() * 2 - 1
    if (addRandom) {
      setRandom2(tempr2)
      lc2 = clamp(lc2 * (1 + 0.05 * tempr2), "5b-b", "2")
    } else {
      setRandom2(0)
    }

    return [cd1, cd2, lc1, lc2]
  }

  function conflictCalculator() {
    const N1 = Number(n1)
    const N2 = Number(n2)

    //changed p to chp
    if (addMorals) {
      const [
        ts1,
        tgd1,
        tds1,
        tc1,
        tp1,
        tnr1,
        twr1,
        tm1,
        ti1,
        tr1,
        tf1,
        ts2,
        tgd2,
        tds2,
        tc2,
        tp2,
        tnr2,
        twr2,
        tm2,
        ti2,
        tr2,
        tf2,
      ] = step0(
        Number(s1),
        Number(gd1),
        Number(ds1),
        Number(c1),
        Number(p1),
        Number(nr1),
        Number(wr1),
        Number(m1),
        Number(i1),
        Number(r1),
        Number(f1),
        Number(s2),
        Number(gd2),
        Number(ds2),
        Number(c2),
        Number(p2),
        Number(nr2),
        Number(wr2),
        Number(m2),
        Number(i2),
        Number(r2),
        Number(f2)
      )

      setCS1(ts1)
      setCGD1(tgd1)
      setCDS1(tds1)
      setCC1(tc1)
      setCHP1(tp1)
      setCNR1(tnr1)
      setCWR1(twr1)
      setCM1(tm1)
      setCI1(ti1)
      setCR1(tr1)
      setCF1(tf1)

      setCS2(ts2)
      setCGD2(tgd2)
      setCDS2(tds2)
      setCC2(tc2)
      setCHP2(tp2)
      setCNR2(tnr2)
      setCWR2(twr2)
      setCM2(tm2)
      setCI2(ti2)
      setCR2(tr2)
      setCF2(tf2)
    } else {
      setCS1(Number(s1))
      setCGD1(Number(gd1))
      setCDS1(Number(ds1))
      setCC1(Number(c1))
      setCHP1(Number(p1))
      setCNR1(Number(nr1))
      setCWR1(Number(wr1))
      setCM1(Number(m1))
      setCI1(Number(i1))
      setCR1(Number(r1))
      setCF1(Number(f1))

      setCS2(Number(s2))
      setCGD2(Number(gd2))
      setCDS2(Number(ds2))
      setCC2(Number(c2))
      setCHP2(Number(p2))
      setCNR2(Number(nr2))
      setCWR2(Number(wr2))
      setCM2(Number(m2))
      setCI2(Number(i2))
      setCR2(Number(r2))
      setCF2(Number(f2))
    }

    //gd, ds, s, and c
    const [tdi1, tdi2, tiu1, tiu2] = step1(
      N1,
      N2,
      cgd1,
      cgd2,
      cds1,
      cds2,
      cs1,
      cs2,
      cc1,
      cc2
    )
    //p and c
    const [tip1, tip2, tii1, tii2] = step2(chp1, chp2, cc1, cc2, ci1, ci2)

    //nr, wr, m, and s
    const [
      tnn1,
      tnn2,
      tnd1,
      tnd2,
      tind1,
      tind2,
      twd1,
      twd2,
      tiwd1,
      tiwd2,
      tpd1,
      tpd2,
      trd1,
      trd2,
      tvd1,
      tvd2,
      tdu1,
      tdu2,
      tdp1,
      tdp2,
    ] = step3(
      N1,
      N2,
      cs1,
      cs2,
      chp1,
      chp2,
      cm1,
      cm2,
      cnr1,
      cnr2,
      cwr1,
      cwr2,
      tiu1,
      tiu2,
      tip1,
      tip2
    )

    //ii, r, f, du, dp
    const [tco1, tco2, tcu1, tcu2, tcp1, tcp2] = step4(
      cc1,
      cc2,
      cr1,
      cr2,
      cf1,
      cf2,
      tii1,
      tii2,
      tdu1,
      tdu2,
      tdp1,
      tdp2
    )

    //r, f, and s
    const [tcd1, tcd2, tlc1, tlc2] = step5(
      tvd1,
      tvd2,
      tcu1,
      tcu2,
      tcp1,
      tcp2,
      cs1,
      cs2
    )

    setnn1(tnn1)
    setdi1(tdi1)
    setiu1(tiu1)
    setip1(tip1)
    setii1(tii1)
    setnd1(tnd1)
    setwd1(twd1)
    setind1(tind1)
    setiwd1(tiwd1)
    setpd1(tpd1)
    setrd1(trd1)
    setvd1(tvd1)
    setdu1(tdu1)
    setdp1(tdp1)
    setco1(tco1)
    setcu1(tcu1)
    setcp1(tcp1)
    setcd1(tcd1)
    setlc1(tlc1)

    setnn2(tnn2)
    setdi2(tdi2)
    setiu2(tiu2)
    setip2(tip2)
    setii2(tii2)
    setnd2(tnd2)
    setwd2(twd2)
    setind2(tind2)
    setiwd2(tiwd2)
    setpd2(tpd2)
    setrd2(trd2)
    setvd2(tvd2)
    setdu2(tdu2)
    setdp2(tdp2)
    setco2(tco2)
    setcu2(tcu2)
    setcp2(tcp2)
    setcd2(tcd2)
    setlc2(tlc2)
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
              <div>updated inputs</div>
              <div>{twoDP(cs1)}</div>
              <div>{twoDP(cgd1)}</div>
              <div>{twoDP(cds1)}</div>
              <div>{twoDP(cc1)}</div>
              <div>{twoDP(chp1)}</div>
              <div>{twoDP(cnr1)}</div>
              <div>{twoDP(cwr1)}</div>
              <div>{twoDP(cm1)}</div>
              <div>{twoDP(ci1)}</div>
              <div>{twoDP(cr1)}</div>
              <div>{twoDP(cf1)}</div>
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
              <div>updated inputs</div>
              <div>{twoDP(cs2)}</div>
              <div>{twoDP(cgd2)}</div>
              <div>{twoDP(cds2)}</div>
              <div>{twoDP(cc2)}</div>
              <div>{twoDP(chp2)}</div>
              <div>{twoDP(cnr2)}</div>
              <div>{twoDP(cwr2)}</div>
              <div>{twoDP(cm2)}</div>
              <div>{twoDP(ci2)}</div>
              <div>{twoDP(cr2)}</div>
              <div>{twoDP(cf2)}</div>
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
                  <div>ii1: {twoDP(ii1)}</div>
                </div>
                <div className="result column">
                  <div>nd1: {twoDP(nd1)}</div>
                  <div>ind1: {twoDP(ind1)}</div>
                  <div>wd1: {twoDP(wd1)}</div>
                  <div>iwd1: {twoDP(iwd1)}</div>
                  <div>pd1: {twoDP(pd1)}</div>
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
                  <div>rd1: {twoDP(rd1)}</div>
                  <div>vd1: {twoDP(vd1)}</div>
                  <div>du1: {twoDP(du1)}</div>
                  <div>dp1: {twoDP(dp1)}</div>
                  <div>ran1: {twoDP(random1)}</div>
                </div>
                <div className="result column">
                  <div>co1: {twoDP(co1)}</div>
                  <div>cu1: {twoDP(cu1)}</div>
                  <div>cp1: {twoDP(cp1)}</div>
                  <div>cd1: {twoDP(cd1)}</div>
                  <div>lc1: {twoDP(lc1)}</div>
                </div>
              </div>

              <p id="result_image">
                <img
                  src={imagepicker(twoDP(lc1))}
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
                  <div>ii2: {twoDP(ii2)}</div>
                </div>
                <div className="result column">
                  <div>nd2: {twoDP(nd2)}</div>
                  <div>ind2: {twoDP(ind2)}</div>
                  <div>wd2: {twoDP(wd2)}</div>
                  <div>iwd2: {twoDP(iwd2)}</div>
                  <div>pd2: {twoDP(pd2)}</div>
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
                  <div>rd2: {twoDP(rd2)}</div>
                  <div>vd2: {twoDP(vd2)}</div>
                  <div>du2: {twoDP(du2)}</div>
                  <div>dp2: {twoDP(dp2)}</div>
                  <div>ran2: {twoDP(random2)}</div>
                </div>
                <div className="result column">
                  <div>co2: {twoDP(co2)}</div>
                  <div>cu2: {twoDP(cu2)}</div>
                  <div>cp2: {twoDP(cp2)}</div>
                  <div>cd2: {twoDP(cd2)}</div>
                  <div>lc2: {twoDP(lc2)}</div>
                </div>
              </div>

              <p id="result_image">
                <img
                  src={imagepicker(twoDP(lc2))}
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
