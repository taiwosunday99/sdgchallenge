
const estimateCurrentlyInfectedInDays = (reportedCases, timeToElapse) => {
//   const timeToElapse = 58;
  const currentlyInfected = reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * 1024;
  return infectionsByRequestedTime * timeToElapse * 1;
};

const estimateProjectedInfectionsInWeeks = (reportedCases, timeToElapse) => {
//   const timeToElapse = 58;
  const currentlyInfected = reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * 1024;
  return infectionsByRequestedTime * timeToElapse * 7;
};

const estimateProjectedInfectionsInMonths = (reportedCases, timeToElapse) => {
//   const timeToElapse = 58;
  const currentlyInfected = reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * 1024;
  return infectionsByRequestedTime * timeToElapse * 30;
};


const covid19ImpactEstimator = (data) => {
  const estimator = (
    // challenge 1
    estimateCurrentlyInfectedInDays,
    estimateProjectedInfectionsInWeeks,
    estimateProjectedInfectionsInMonths
  );
  return estimator({
    data,
    impact: {},
    severeImpact: {}
  });

};

export default covid19ImpactEstimator;


//   const input = data;
//   return {
//     data: input,
//     impact: {
//       currentlyInfected: estimateCurrentlyInfected.currentlyInfected,
//       infectionsByRequestedTime: estimateCurrentlyInfected.infectionsByRequestedTime
//     },
//     severeImpact: {
//       currentlyInfected: estimateProjectedInfections.currentlyInfected,
//       infectionsByRequestedTime: estimateProjectedInfections.infectionsByRequestedTime
//     }
//   }
