


// TC O(maxSteps^height) SC O(height)
function staircaseTraversal(height, maxSteps) {

    if ([0, 1].includes(height)){
        return 1;
    } else{
        nbOfWays = 0;
        let nbOfLastSteps = Math.min(height, maxSteps);
        for(let i=1; i<nbOfLastSteps+1; i++){
            nbOfWays += staircaseTraversal(height - i, maxSteps);
        }
        return nbOfWays;
    }
  }
  

  let height = 4;
  let maxSteps = 3;
  maxNbWays = staircaseTraversal(height, maxSteps);
  console.log(`We can reach this the top in ${maxNbWays} ways`)