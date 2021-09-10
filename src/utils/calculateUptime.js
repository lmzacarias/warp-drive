const calculateUptime = (additionalValue) => {
  
  return additionalValue <= 0 ? 'Infinito' : 100 - additionalValue;
};

module.exports = { calculateUptime };
