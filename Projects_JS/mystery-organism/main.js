// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAeqourFactory = (number, arr) => {
  return {
    specimenNum: number,
    dna: arr,
    mutate() {
      let index = Math.floor(Math.random() * this.dna.length);
      let currentBase = this.dna[index];
      let newBase = returnRandBase();

      while (currentBase === newBase) {
        //make sure it's not the same base
        newBase = returnRandBase();
      }

      this.dna[index] = newBase;
      return this.dna;
    },
    compareDNA(obj) {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === obj.dna[i]) {
          counter++;
        }
      }

      let percentage = (counter / this.dna.length) * 100;
      if (!percentage) percentage = 0;
      console.log(
        `specimen #${this.specimenNum} and specimen #${
          obj.specimenNum
        } have ${percentage.toFixed(2)}% DNA in common`
      );
    },
    willLikelySurvive() {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") counter++;
      }
      let percentage = (counter / this.dna.length) * 100;
      if (percentage >= 60) return true;
      else return false;
    },
  };
};

let samples = [];

for (let i = 0; i < 30; i++) {
  samples[i] = pAeqourFactory(i, mockUpStrand());
}
// console.log(samples);
const validateSamples = (arr) => {
  for(i = 0; i < arr.length; i++) {
    while (!arr[i].willLikelySurvive()) arr[i].mutate();
  }
}

validateSamples(samples);
console.log(samples);