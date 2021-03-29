const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(a) {
  if (a < 0 || a == undefined || typeof(a) !== 'string' || Number(a) !== Number(a)){return false}
  const k = 0.693/HALF_LIFE_PERIOD
  let t = (Math.log(MODERN_ACTIVITY/Number(a)))/k
  t = Math.ceil(t)
  if (t < 0 || t == Infinity){return false}
  else {return t}
};
