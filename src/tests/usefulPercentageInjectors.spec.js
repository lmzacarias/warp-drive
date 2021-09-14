describe('when enter the percentage of damage of the 3 injectors', () => {
  
  const {
    usefulPercentageInjectors,
  } = require('../utils/usefulPercentageInjectors');

  it('should return useful percentage of the 3 injectors', () => {
    expect(usefulPercentageInjectors([20, 50, 40])).toEqual([
      { name: 'injector1', percentage: 80 },
      { name: 'injector2', percentage: 50 },
      { name: 'injector3', percentage: 60 },
    ]);
  });

});
