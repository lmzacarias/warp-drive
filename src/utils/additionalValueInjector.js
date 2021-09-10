const additionalValueInjector = (
  injectorFlow,
  lightVelocityFlow,
  injectors
) => {
  const amountFlow = injectorFlow - lightVelocityFlow;
  const filterInjectors = injectors.filter(
    (element) => element.percentage !== 0
  );
  const resultArray = amountFlow / filterInjectors.length;

  return resultArray;
};

module.exports = { additionalValueInjector };
