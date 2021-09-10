const usefulPercentageInjectors = (injectorA, injectorB, injectorC) => {
  const fullInyector = 100;
  return [
    { name: 'injectorA', percentage: fullInyector - injectorA },
    { name: 'injectorB', percentage: fullInyector - injectorB },
    { name: 'injectorC', percentage: fullInyector - injectorC },
  ];
};

module.exports = { usefulPercentageInjectors };
