/* eslint-disable max-len */
const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
  const beds = 0.35 * data.totalHospitalBeds;
  const population = data.region.avgDailyIncomePopulation;
  const income = data.region.avgDailyIncomeInUSD;
  let days = data.timeToElapse;
  if (data.periodType === 'days') {
    days = data.timeToElapse;
  } else if (data.periodType === 'weeks') {
    days = 7 * data.timeToElapse;
  } else if (data.periodType === 'months') {
    days = 30 * data.timeToElapse;
  }
  const factor = Math.trunc(days / 3);
  impact.currentlyInfected = data.reportedCases * 10;
  severeImpact.currentlyInfected = data.reportedCases * 50;
  impact.infectionsByRequestedTime = impact.currentlyInfected * 2 ** factor;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 2 ** factor;
  impact.severeCasesByRequestedTime = 0.15 * impact.infectionsByRequestedTime;
  severeImpact.severeCasesByRequestedTime = 0.15 * severeImpact.infectionsByRequestedTime;

  const severeCases = severeImpact.severeCasesByRequestedTime;
  impact.hospitalBedsByRequestedTime = Math.trunc(beds - impact.severeCasesByRequestedTime);
  severeImpact.hospitalBedsByRequestedTime = Math.trunc(beds - severeCases);

  impact.casesForICUByRequestedTime = Math.trunc(0.05 * impact.infectionsByRequestedTime);
  severeImpact.casesForICUByRequestedTime = Math.trunc(0.05 * severeImpact.infectionsByRequestedTime);

  impact.casesForVentilatorsByRequestedTime = Math.trunc(0.02 * impact.infectionsByRequestedTime);
  severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(0.02 * severeImpact.infectionsByRequestedTime);
  const severeInfectionsByRequestedTime = severeImpact.infectionsByRequestedTime;
  const impactDollars = (impact.infectionsByRequestedTime * population * income) / days;
  const severDollars = (severeInfectionsByRequestedTime * population * income) / days;
  impact.dollarsInFlight = Math.trunc(impactDollars);
  severeImpact.dollarsInFlight = Math.trunc(severDollars);

  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
