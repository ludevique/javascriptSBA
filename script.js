//task to do :
  //1-create a function and pass parameters inside:
    //-CourseInfo,
    //AssignmentGroup
    //the third one should be an array of [learnerSubmission]

    //2-target
       //return the formatted result which should be an array of different objects listed above


//create the function

//provided data
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
 function getLearnerData(CourseInfo,AssignmentGroup,LearnerSubmissions){
    let students = {};//we declared an empty object where the data will be push into


    LearnerSubmissions.forEach(submission =>{
        const learnerID = submission.learner_id;
        const assignmentID = submission.assignment_id;
        if(!students[learnerID]){
            students[students] = {
                id: learnerID,
                totalScore: 0,
                totalPossible:0,
                scores:{}
            };
        }
        let Assignment = AssignmentGroup.assignments.find(Assignment => assignment.id === assignmentID);
        if (Assignment){
            students[studentID].totalScore += submission.submission.score;
            students[studentID].totalPossible += difAssignment.points_possible;
            students[studentID].score[assignmentID] =submission.score / assignment.points_possible*100;        
        }
    }); return students
 }

 //just for trying
 getLearnerData(1,4,7)
 