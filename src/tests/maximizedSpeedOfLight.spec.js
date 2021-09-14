describe('when entering the percentage of damage of the 3 injectors and the percentage of the speed of light', () => {
  const { maximizedSpeedOfLight } = require('../../maximizedSpeedOfLight');

  it('should return the amount of plasma flow for all 3 injectors and uptime', () => {
    expect(maximizedSpeedOfLight([0, 0, 0], 100)).toEqual([
      { name: 'injector1', flow: 100 },
      { name: 'injector2', flow: 100 },
      { name: 'injector3', flow: 100 },
      { time: 'Infinito' },
    ]);
    expect(maximizedSpeedOfLight([0, 0, 0], 90)).toEqual([
      { name: 'injector1', flow: 90 },
      { name: 'injector2', flow: 90 },
      { name: 'injector3', flow: 90 },
      { time: 'Infinito' },
    ]);
    expect(maximizedSpeedOfLight([0, 0, 0], 30)).toEqual([
      { name: 'injector1', flow: 30 },
      { name: 'injector2', flow: 30 },
      { name: 'injector3', flow: 30 },
      { time: 'Infinito' },
    ]);

    expect(maximizedSpeedOfLight([20, 10, 0], 100)).toEqual([
      { name: 'injector1', flow: 90 },
      { name: 'injector2', flow: 100 },
      { name: 'injector3', flow: 110 },
      { time: 90 },
    ]);
    expect(maximizedSpeedOfLight([0, 0, 100], 80)).toEqual([
      { name: 'injector1', flow: 120 },
      { name: 'injector2', flow: 120 },
      { name: 'injector3', flow: 0 },
      { time: 80 },
    ]);
    expect(maximizedSpeedOfLight([0, 0, 0], 150)).toEqual([
      { name: 'injector1', flow: 150 },
      { name: 'injector2', flow: 150 },
      { name: 'injector3', flow: 150 },
      { time: 50 },
    ]);
    expect(maximizedSpeedOfLight([0, 0, 30], 140)).toEqual([
      { name: 'injector1', flow: 150 },
      { name: 'injector2', flow: 150 },
      { name: 'injector3', flow: 120 },
      { time: 50 },
    ]);
    expect(maximizedSpeedOfLight([80, 70, 60, 50], 80)).toEqual([
      { name: 'injector1', flow: 45 },
      { name: 'injector2', flow: 55 },
      { name: 'injector3', flow: 65 },
      { name: 'injector4', flow: 75 },
      { time: 75 },
    ]);

    expect(maximizedSpeedOfLight([60, 50, 30, 20, 10, 0], 90)).toEqual([
      { name: 'injector1', flow: 13.33 },
      { name: 'injector2', flow: 23.33 },
      { name: 'injector3', flow: 43.33 },
      { name: 'injector4', flow: 53.33 },
      { name: 'injector5', flow: 63.33 },
      { name: 'injector6', flow: 73.33 },
      { time:  "Infinito"},
    ]);
    expect(maximizedSpeedOfLight([80, 50, 60], 170)).toEqual(
      'Unable to comply',
      {
        time: 0,
      }
    );
  });
});
