// drivers.js — Editable TransducerLab Speaker Database
// Canonical units: Vas (L), Sd (cm^2), Xmax (mm), Le (mH), Sensitivity (dB @ 2.83V/1m)

window.TRANSDUCER_DB = [
  {
    id: "idmax-12-d2",
    brand: "Image Dynamics",
    model: "IDMAX12 D2",
    category: "Subwoofer",
    diameterIn: 12,
    nomImp: 4,
    fs: 22.5,
    qes: 0.44,
    qms: 4.8,
    qts: 0.40,
    vasLiters: 54.0,
    sdCm2: 480,
    re: 3.2,
    leMh: 1.85,
    xmaxMm: 28.0,
    sensDb: 86.8,
    powerW: 1000,
    notes: "High-excursion SQ/SQL reference driver; strong in compact sealed or low-tuned vented.",
    recommended: {
      type: "sealed",
      volLiters: 28.3,
      tuningHz: null,
      portDiaMm: null,
      portLenMm: null
    }
  },
  {
    id: "dayton-ultimax-12",
    brand: "Dayton Audio",
    model: "UM12-22",
    category: "Subwoofer",
    diameterIn: 12,
    nomImp: 4,
    fs: 24.1,
    qes: 0.51,
    qms: 3.9,
    qts: 0.45,
    vasLiters: 42.8,
    sdCm2: 481,
    re: 3.4,
    leMh: 1.92,
    xmaxMm: 19.0,
    sensDb: 87.2,
    powerW: 800,
    notes: "Low-inductance dual 2-ohm coil; clean low-end extension in small sealed enclosures.",
    recommended: {
      type: "sealed",
      volLiters: 25.5,
      tuningHz: null,
      portDiaMm: null,
      portLenMm: null
    }
  },
  {
    id: "pro-10-midwoofer",
    brand: "Reference Pro",
    model: "PW10-400",
    category: "Pro Audio",
    diameterIn: 10,
    nomImp: 8,
    fs: 52.0,
    qes: 0.32,
    qms: 5.4,
    qts: 0.30,
    vasLiters: 34.0,
    sdCm2: 345,
    re: 5.6,
    leMh: 0.72,
    xmaxMm: 6.5,
    sensDb: 96.5,
    powerW: 400,
    notes: "High-efficiency midbass/woofer; favors vented alignment around 50–55 Hz.",
    recommended: {
      type: "vented",
      volLiters: 32.0,
      tuningHz: 52,
      portDiaMm: 76,
      portLenMm: 145
    }
  },
  {
    id: "door-65-midbass",
    brand: "Custom Lab",
    model: "MB6.5-SQ",
    category: "Midwoofer",
    diameterIn: 6.5,
    nomImp: 4,
    fs: 58.0,
    qes: 0.54,
    qms: 4.1,
    qts: 0.48,
    vasLiters: 11.5,
    sdCm2: 132,
    re: 3.3,
    leMh: 0.45,
    xmaxMm: 7.5,
    sensDb: 89.0,
    powerW: 120,
    notes: "Door/kick-panel midbass driver; well-suited to damped door/kick volume.",
    recommended: {
      type: "sealed",
      volLiters: 8.5,
      tuningHz: null,
      portDiaMm: null,
      portLenMm: null
    }
  }
];