export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Use an arrow function here to keep `this` lexically bound.
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}

