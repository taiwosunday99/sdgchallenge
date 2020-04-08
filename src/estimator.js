const estimateCurrentlyInfectedInDays = (reportedCases) => {
  const currentlyInfected = reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * 1024;
  return infectionsByRequestedTime * 1;
};

const estimateProjectedInfectionsInWeeks = (reportedCases) => {
  const currentlyInfected = reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * 1024;
  return infectionsByRequestedTime * 7;
};

const estimateProjectedInfectionsInMonths = (reportedCases) => {
  const currentlyInfected = reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * 1024;
  return infectionsByRequestedTime * 30;
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
