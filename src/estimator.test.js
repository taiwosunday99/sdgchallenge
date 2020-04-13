import  estimateData  from './estimator';

const mockData = {
  data: {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 4,
      avgDailyIncomePopulation: 0.73
    },
    periodType: 'days',
    timeToElapse: 38,
    reportedCases: 2747,
    population: 92931687,
    totalHospitalBeds: 678874
  },
  estimate: {
    impact: {
      currentlyInfected: 27470,
      infectionsByRequestTime: 112517120,
      severeCasesByRequestedTime: 16877568,
      hospitalBedsByRequestedTime: -16639962,
      casesForICUByRequestedTime: 5625856,
      casesForVentilatorsByRequestedTime: 2250342,
      dollarsInFlight: 8646052
    },
    severeImpact: {
      currentlyInfected: 137350,
      infectionsByRequestTime: 562585600,
      severeCasesByRequestedTime: 84387840,
      hospitalBedsByRequestedTime: -84150234,
      casesForICUByRequestedTime: 28129280,
      casesForVentilatorsByRequestedTime: 11251712,
      dollarsInFlight: 43230261
    }
  }
};

test('calc-impact-currently-affected', () => {    
    const value = estimateData(mockData.data).impact.currentlyInfected;
    expect(value).toBe(mockData.estimate.impact.currentlyInfected);
});

test('calc-impact-infections-by-requested-time', () => {
  const value = estimateData(mockData.data).impact.infectionsByRequestedTime;
  expect(value).toBe(mockData.estimate.impact.infectionsByRequestTime);
});

test('calc-impact-severe-cases-by-requested-time', () => {
  const value = estimateData(mockData.data).impact.severeCasesByRequestedTime;
  expect(value).toBe(mockData.estimate.impact.severeCasesByRequestedTime);
});

test('calc-impact-hospital-beds-by-requested-time', () => {
  const value = estimateData(mockData.data).impact.hospitalBedsByRequestedTime;
  expect(value).toBe(mockData.estimate.impact.hospitalBedsByRequestedTime);
});

test('calc-impact-cases-for-ICU-requested-time', () => {
  const value = estimateData(mockData.data).impact.casesForICUByRequestedTime;
  expect(value).toBe(mockData.estimate.impact.casesForICUByRequestedTime);
});

test('calc-impact-cases-for-ventilators-by-requested-time', () => {
  const value = estimateData(mockData.data).impact.casesForVentilatorsByRequestedTime;
  expect(value).toBe(mockData.estimate.impact.casesForVentilatorsByRequestedTime);
});

test('calc-impact-dollars-in-flight', () => {
  const value = estimateData(mockData.data).impact.dollarsInFlight;
  expect(value).toBe(mockData.estimate.impact.dollarsInFlight);
});

test('calc-severeImpact-currently-infected', () => {
  const value = estimateData(mockData.data).severeImpact.currentlyInfected;
  expect(value).toBe(mockData.estimate.severeImpact.currentlyInfected);
});

test('calc-severeImpact-infections-by-requested-time', () => {
  const value = estimateData(mockData.data).severeImpact.infectionsByRequestedTime;
  expect(value).toBe(mockData.estimate.severeImpact.infectionsByRequestTime);
});

test('calc-severeImpact-severe-cases-by-requested-time', () => {
  const value = estimateData(mockData.data).severeImpact.severeCasesByRequestedTime;
  expect(value).toBe(mockData.estimate.severeImpact.severeCasesByRequestedTime);
});

test('calc-severeImpact-hospital-beds-by-requested-time', () => {
  const value = estimateData(mockData.data).severeImpact.hospitalBedsByRequestedTime;
  expect(value).toBe(mockData.estimate.severeImpact.hospitalBedsByRequestedTime);
});

test('calc-severeImpact-cases-for-ICU-by-requested-time', () => {
  const value = estimateData(mockData.data).severeImpact.casesForICUByRequestedTime;
  expect(value).toBe(mockData.estimate.severeImpact.casesForICUByRequestedTime);
});

test('calc-severeImpact-cases-for-ventilators-by-requested-time', () => {
  const value = estimateData(mockData.data).severeImpact.casesForVentilatorsByRequestedTime;
  expect(value).toBe(mockData.estimate.severeImpact.casesForVentilatorsByRequestedTime);
});

test('calc-severeImpact-dollars-in-flight', () => {
  const value = estimateData(mockData.data).severeImpact.dollarsInFlight;
  expect(value).toBe(mockData.estimate.severeImpact.dollarsInFlight);
});