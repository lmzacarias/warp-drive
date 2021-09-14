describe('when enter the percentage of damage of the 3 injectors', () => {
  const { flowResultForInjectors } = require('../utils/flowResultForInjectors');

  it('should return useful percentage of the 3 injectors', () => {
    expect(
      flowResultForInjectors(20, [
        { name: 'injector1', percentage: 100 },
        { name: 'injector2', percentage: 100 },
        { name: 'injector3', percentage: 0 },
      ])
    ).toEqual([
      { name: 'injector1', flow: 120 },
      { name: 'injector2', flow: 120 },
      { name: 'injector3', flow: 0 },
    ]);
    expect(
      flowResultForInjectors(50, [
        { name: 'injector1', percentage: 100 },
        { name: 'injector2', percentage: 100 },
        { name: 'injector3', percentage: 70 },
      ])
    ).toEqual([
      { name: 'injector1', flow: 150 },
      { name: 'injector2', flow: 150 },
      { name: 'injector3', flow: 120 },
    ]);
    expect(
      flowResultForInjectors(25, [
        { name: 'injector1', percentage: 20 },
        { name: 'injector2', percentage: 30 },
        { name: 'injector3', percentage: 40 },
        { name: 'injector4', percentage: 50 },
      ])
    ).toEqual([
      { name: 'injector1', flow: 45 },
      { name: 'injector2', flow: 55 },
      { name: 'injector3', flow: 65 },
      { name: 'injector4', flow: 75 },
    ]);
    expect(
      flowResultForInjectors(50, [
        { name: 'injector1', percentage: 100 },
        { name: 'injector2', percentage: 100 },
        { name: 'injector3', percentage: 70 },
      ])
    ).toEqual([
      { name: 'injector1', flow: 150 },
      { name: 'injector2', flow: 150 },
      { name: 'injector3', flow: 120 },
    ]);
   
  });
});
