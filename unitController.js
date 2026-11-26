const UNIT_FACTORS = {
  L_PER_CUFT: 28.316846592,
  MM_PER_IN: 25.4,
  FT_PER_M: 3.280839895,
};

const labState = {
  units: "metric", // "metric" | "imperial"
  enclosureMode: "sealed", // "sealed" | "vented" | "bandpass4"
  // Canonical metric values (L and mm)
  geo: {
    sealedVolL: 28.3,
    ventedVolL: 42.5,
    bpRearVolL: 22.0,
    bpFrontVolL: 28.0,
    wallMm: 19.0,
    roundDiaMm: 101.6,
    slotWidthMm: 38.1,
    slotHeightMm: 254.0,
    portLenMm: 304.8,
  },
};

const toVol = (liters) =>
  labState.units === "metric" ? liters : liters / UNIT_FACTORS.L_PER_CUFT;
const fromVol = (val) =>
  labState.units === "metric" ? val : val * UNIT_FACTORS.L_PER_CUFT;

const toLen = (mm) =>
  labState.units === "metric" ? mm : mm / UNIT_FACTORS.MM_PER_IN;
const fromLen = (val) =>
  labState.units === "metric" ? val : val * UNIT_FACTORS.MM_PER_IN;

const toVel = (mps) =>
  labState.units === "metric" ? mps : mps * UNIT_FACTORS.FT_PER_M;

function setLabUnits(nextUnits) {
  labState.units = nextUnits === "imperial" ? "imperial" : "metric";
  const isMetric = labState.units === "metric";
  const volDec = isMetric ? 1 : 2;
  const lenDec = isMetric ? 1 : 2;

  document.querySelectorAll("[data-unit-vol]").forEach((el) => {
    el.textContent = isMetric ? "L" : "ft³";
  });
  document.querySelectorAll("[data-unit-len]").forEach((el) => {
    el.textContent = isMetric ? "mm" : "in";
  });
  document.querySelectorAll("[data-unit-vel]").forEach((el) => {
    el.textContent = isMetric ? "m/s" : "ft/s";
  });

  const setInput = (id, val, dec) => {
    const el = document.getElementById(id);
    if (el && document.activeElement !== el && Number.isFinite(val)) {
      el.value = val.toFixed(dec);
      el.step = isMetric ? "0.5" : "0.05";
    }
  };

  // Enclosure volumes & wall thickness (sealed, vented, 4th-order bandpass)
  setInput("geo-sealed-vol", toVol(labState.geo.sealedVolL), volDec);
  setInput("geo-vented-vol", toVol(labState.geo.ventedVolL), volDec);
  setInput("geo-bp-rear-vol", toVol(labState.geo.bpRearVolL), volDec);
  setInput("geo-bp-front-vol", toVol(labState.geo.bpFrontVolL), volDec);
  setInput("geo-wall", toLen(labState.geo.wallMm), lenDec);

  // Port geometry (round diameter + rectangular slot width, height, length)
  setInput("port-round-dia", toLen(labState.geo.roundDiaMm), lenDec);
  setInput("port-slot-width", toLen(labState.geo.slotWidthMm), lenDec);
  setInput("port-slot-height", toLen(labState.geo.slotHeightMm), lenDec);
  setInput("port-length", toLen(labState.geo.portLenMm), lenDec);

  if (typeof recalculateEnclosureAndCharts === "function") {
    recalculateEnclosureAndCharts();
  }
}