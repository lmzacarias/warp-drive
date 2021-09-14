const usefulPercentageInjectors = (injectors) => {

  const fullInyector = 100;
  const arrayInyectors = injectors.map((injector, index) => {
    return { name: `injector${index+1}`, percentage: fullInyector - injector };
  });
  
  return arrayInyectors;
  
};

module.exports = { usefulPercentageInjectors };
