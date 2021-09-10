describe('when enter the percentage of damage of the 3 injectors', () => {
  const {
    usefulPercentageInjectors,
  } = require('../utils/usefulPercentageInjectors');

  fit('should return useful percentage of the 3 injectors', () => {
    expect(usefulPercentageInjectors(20, 50, 70)).toEqual([
      { name: 'injectorA', percentage : 80 },
      { name: 'injectorB', percentage : 50 },
      { name: 'injectorC', percentage : 30 },
    ]);

    expect(usefulPercentageInjectors(0, 0, 30)).toEqual([
      { name: 'injectorA', percentage : 100 },
      { name: 'injectorB', percentage : 100 },
      { name: 'injectorC', percentage : 70 },
    ]);
  });
});
