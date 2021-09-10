describe('when entering the percentage of damage of the 3 injectors and the percentage of the speed of light', () => {
  const { maximizedSpeedOfLight } = require('../../maximizedSpeedOfLight');

  it('should return the amount of plasma flow for all 3 injectors and uptime', () => {
    expect(maximizedSpeedOfLight(0, 0, 0, 100)).toEqual([
      { name: 'injectorA', flow: 100 },
      { name: 'injectorB', flow: 100 },
      { name: 'injectorC', flow: 100 },
      { time: 'Infinito' },
    ]);
    expect(maximizedSpeedOfLight(0, 0, 0, 90)).toEqual([
      { name: 'injectorA', flow: 90 },
      { name: 'injectorB', flow: 90 },
      { name: 'injectorC', flow: 90 },
      { time: 'Infinito' },
    ]);
    expect(maximizedSpeedOfLight(0, 0, 0, 30)).toEqual([
      { name: 'injectorA', flow: 30 },
      { name: 'injectorB', flow: 30 },
      { name: 'injectorC', flow: 30 },
      { time: 'Infinito' },
    ]);

    expect(maximizedSpeedOfLight(20, 10, 0, 100)).toEqual([
      { name: 'injectorA', flow: 90 },
      { name: 'injectorB', flow: 100 },
      { name: 'injectorC', flow: 110 },
      { time: 90 },
    ]);
    expect(maximizedSpeedOfLight(0, 0, 100, 80)).toEqual([
      { name: 'injectorA', flow: 120 },
      { name: 'injectorB', flow: 120 },
      { name: 'injectorC', flow: 0 },
      { time: 80 },
    ]);
    expect(maximizedSpeedOfLight(0, 0, 0, 150)).toEqual([
      { name: 'injectorA', flow: 150 },
      { name: 'injectorB', flow: 150 },
      { name: 'injectorC', flow: 150 },
      { time: 50 },
    ]);
    expect(maximizedSpeedOfLight(0, 0, 30, 140)).toEqual([
      { name: 'injectorA', flow: 150 },
      { name: 'injectorB', flow: 150 },
      { name: 'injectorC', flow: 120 },
      { time: 50 },
    ]);
    expect(maximizedSpeedOfLight(80, 50, 60, 170)).toEqual('Unable to comply', {
      time: 0,
    });
  });
});
