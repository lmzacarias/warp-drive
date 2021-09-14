const additionalValueInjector = (
  injectorFlow,
  lightVelocityFlow,
  injectors
) => {
  const amountFlow = injectorFlow - lightVelocityFlow;
  const filterInjectors = injectors.filter(
    (element) => element.percentage !== 0
  );
  const resultArray = Number.isInteger(amountFlow / filterInjectors.length)
    ? (amountFlow / filterInjectors.length).toFixed(0)
    : (amountFlow / filterInjectors.length).toFixed(2);
  return resultArray;
};

module.exports = { additionalValueInjector };
