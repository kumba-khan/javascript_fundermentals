
const students = [
    { name: "Aisha", age: 20, scores: [75, 82, 68, 90] },
    { name: "Fatou", age: 22, scores: [88, 91, 79, 85] },
    { name: "Musa", age: 19, scores: [55, 63, 70, 58] },
    { name: "Omar", age: 21, scores: [92, 87, 95, 90] }
];

// Part 1

//1. Variables and calculations
const schoolName = "St Peter's Technical Junior And Senior Secondary School";
const numberOfStudents = students.length;
const passingScore = 50;

console.log(`There are ${numberOfStudents} students at ${schoolName}. The passing score is ${passingScore}`);

//2. Conditions
function checkPass(score) {
    if (score >= passingScore) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log(checkPass(75))

//3. Basic logic
/* Write code that checks whether the school currently has no students, one student, or more than one student, and
displays an appropriate message. */
if (numberOfStudents === 0) {
    console.log("There are currently no students enrolled in the school.");
} else if (numberOfStudents === 1) {
    console.log("There is currently one student enrolled in the school.");
} else {
    console.log(`There are currently ${numberOfStudents} students enrolled in the school.`);
}

//PART 2
function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}
console.log(calculateAverage([80, 90, 70]));

function getGrade(average) {
    if (average >= 80) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function getStudentResult(student) {
    const averageScore = calculateAverage(student.scores);
    const grade = getGrade(averageScore);
    const result = checkPass(averageScore);
    return {
        name: student.name,
        average: averageScore,
        result: result,
        grade: grade
    };

}

// PART 3 — Arrays & Loops
//6. Display all students
for (const student of students) {
    console.log(student.name);
}

//7. Calculate class average
function calculateClassAverage(students) {
    let totalSum = 0;
    let totalCount = 0;
    for (const student of students) {
        totalSum += calculateAverage(student.scores);
        totalCount++;
    }
    return totalSum / totalCount;
}

//8. Find the highest-scoring student
function findTopStudent(students) {
    let topStudent = students[0];
    for (const student of students) {
        if (calculateAverage(student.scores) > calculateAverage(topStudent.scores)) {
            topStudent = student;
        }
    }
    return topStudent;

}
console.log();
console.log("Top Student: " + findTopStudent(students).name);

// Part 4 — Objects
function addStudent(students, student) {
    students.push(student);
}

function findStudent(students, name) {
    for ( const student of students) {
        if (student.name === name) {
            return student;
        }
    }
    return null;
}

// 11. Student information
function getStudentInfo(student) {
    return {
        name: student.name,
        age: student.age,
        averageScore: calculateAverage(student.scores),
        grade: getGrade(calculateAverage(student.scores)),
        result: checkPass(calculateAverage(student.scores))
    };
}
console.log(getStudentInfo(findStudent(students, "Aisha")));

//Part 5 — Mini Challenge
//12. Build a Student Report System
function generateReport(students) {
    const totalStudents = students.length;
    const classAverage = calculateClassAverage(students);
    const topStudent = findTopStudent(students);

    let studentsPassed = 0;
    let studentsFailed = 0;

    for (const student of students) {
        const averageScore = calculateAverage(student.scores);
        if (checkPass(averageScore) === "Pass") {
            studentsPassed++;
        } else {
            studentsFailed++;
        }
    }

    return {
        totalStudents: totalStudents,
        classAverage: classAverage,
        topStudent: topStudent.name,
        studentsPassed: studentsPassed,
        studentsFailed: studentsFailed
    };
}
console.log(generateReport(students));
const newStudent = { name: "Zainab", age: 20, scores: [85, 90, 78, 92] };
addStudent(students, newStudent);
console.log(generateReport(students));