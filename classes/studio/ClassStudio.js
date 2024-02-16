//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor (name, mass, scores = []) {
        this.name = name
        this.mass = mass
        this.scores = scores
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }

    average(){
        let sumScores = 0;
        let ave = 0;
        for (let scores of this.scores) {
            sumScores += scores;
        }
        ave = Math.round((sumScores/this.scores.length)*10)/10;
        return ave;
    }

    status(){
        let ave = this.average();
        let status = "";
        if (ave >= 90 && ave <=100) {
            status = "Accepted";
        } else if (ave >= 80) {
            status = "Reserve";
        } else if (ave >=70) {
            status = "Probationary";
        } else {
            status = "Rejected";
        }
        console.log(
          `${this.name} earned an average test score of ${ave}% and has a status of ${status}.'`
        );
    }

}
    let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
    let merryMaltese = new  CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
    let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bubbaBear.status();
merryMaltese.status();
gladGator.status();



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
while (gladGator.average() <= 90) {
    gladGator.addScore(100);
}
console.log(gladGator.scores);
console.log(gladGator.status());