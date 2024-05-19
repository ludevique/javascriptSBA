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

  //---------------------------------------------
  //Start our work here.
  //let declare an empty arrays which will contain our objects.

  let finalProject = [];
 function getLearnerData(CourseInfo,AssignG,LearnerSubmissions){
     //Let start by validating the data.
     try{
        if(AssignmentGroup.course_id !== CourseInfo.id){
           throw "not recognized this!"; 
        }
     }catch(error) {
        console.error(error)
     };

     //Now let get the learner's ids.
      //note that they have to be 'unique'
      let IDS = [];
      let keys = [];
      for(let j = 1; j < LearnerSubmissions.length; j++)
        IDS.push(LearnerSubmissions[j].learner_id);
      IDS = [...new Set(IDS)];
      for(let i = 0; i < IDS.length; i++) keys.push("id");
      let idsResult = keys.map((key,index) => ({[key]: IDS[index] }));
      
      console.log(idsResult)
      return idsResult
    
 }
 getLearnerData(LearnerSubmissions)

  
  

 