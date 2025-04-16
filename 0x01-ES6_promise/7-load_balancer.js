export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

/* 8-try.js */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }
  return numerator / denominator;
}

