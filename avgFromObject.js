const studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
};

const studentsAverages = Object.fromEntries(
    Object.entries(studentsData).map(([student, subjects]) => {
        const scores = Object.values(subjects);
        const average = scores.reduce((acc, score) => acc + score, 0) / scores.length;
        return [student, { average: Math.floor(average) }];
    })
);

console.log(studentsAverages);
