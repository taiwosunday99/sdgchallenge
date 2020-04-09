
const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
  const beds = (0.35 * data.totalHospitalBeds);
  const population = data.region.avgDailyIncomePopulation;
  let days;
  if (data.periodType === 'days') {
    this.days = data.timeToElapse;
  } else if (data.periodType === 'weeks') {
    this.days = 7 * data.timeToElapse;
  } else if (data.periodType === 'months') {
    this.days = 30 * data.timeToElapse;
  }
  const factor = Math.trunc(days / 3);
  impact.currentlyInfected = data.reportedCases * 10;
  severeImpact.currentlyInfected = data.reportedCases * 50;
  impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** factor);
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** factor);
  impact.severeCasesByRequestedTime = 0.15 * impact.infectionsByRequestedTime;
  severeImpact.severeCasesByRequestedTime = 0.15 * severeImpact.infectionsByRequestedTime;

  const severeCases = severeImpact.severeCasesByRequestedTime;
  impact.hospitalBedsByRequestedTime = Math.ceil(beds - impact.severeCasesByRequestedTime);
  severeImpact.hospitalBedsByRequestedTime = Math.ceil(beds - severeCases);

  impact.casesForICUByRequestedTime = 0.05 * impact.infectionsByRequestedTime;
  severeImpact.casesForICUByRequestedTime = 0.05 * severeImpact.infectionsByRequestedTime;

  impact.casesForVentilatorsByRequestedTime = 0.02 * impact.infectionsByRequestedTime;
  severeImpact.casesForVentilatorsByRequestedTime = 0.02 * impact.infectionsByRequestedTime;

  const severeInfectionsByRequestedTime = severeImpact.infectionsByRequestedTime;
  impact.dollarsInFlight = impact.infectionsByRequestedTime * population * 1.5 * days;
  severeImpact.dollarsInFlight = severeInfectionsByRequestedTime * population * 1.5 * days;

  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
