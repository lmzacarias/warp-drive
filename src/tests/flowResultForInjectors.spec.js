describe('when enter the percentage of damage of the 3 injectors', () => {
  const { flowResultForInjectors } = require('../utils/flowResultForInjectors');

  it('should return useful percentage of the 3 injectors', () => {
    expect(
      flowResultForInjectors(20, [
        { name: 'injectorA', percentage: 100 },
        { name: 'injectorB', percentage: 100 },
        { name: 'injectorC', percentage: 0 },
      ])
    ).toEqual([
      { name: 'injectorA', flow: 120 },
      { name: 'injectorB', flow: 120 },
      { name: 'injectorC', flow: 0 },
    ]);
    expect(
      flowResultForInjectors(50, [
        { name: 'injectorA', percentage: 100 },
        { name: 'injectorB', percentage: 100 },
        { name: 'injectorC', percentage: 70 },
      ])
    ).toEqual([
      { name: 'injectorA', flow: 150 },
      { name: 'injectorB', flow: 150 },
      { name: 'injectorC', flow: 120 },
    ]);
  });
});
