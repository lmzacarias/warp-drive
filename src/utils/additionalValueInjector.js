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
    ? Number((amountFlow / filterInjectors.length).toFixed(0))
    : Number((amountFlow / filterInjectors.length).toFixed(2));
  return resultArray;
};

module.exports = { additionalValueInjector };
