const sumInjectorFlow = (injectors) => {

  const sumInjectorFlowResult = injectors.reduce((memo, element) => {
    return memo + element.percentage;
  }, 0);
  return sumInjectorFlowResult;
};
module.exports = { sumInjectorFlow };
