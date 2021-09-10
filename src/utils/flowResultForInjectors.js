const flowResultForInjectors = (additionalTime, injectors) => {
  if (additionalTime > 99) {
    return 'Unable to comply';
  }
  const result = [];
  injectors.map((element) => {
    result.push({
      name: element.name,
      flow: element.percentage === 0 ? 0 : element.percentage + additionalTime,
    });
  });
  
  return result;
};

module.exports = { flowResultForInjectors };
