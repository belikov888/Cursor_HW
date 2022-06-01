const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
    const arr = [
        [students[0], students[2]], 
        [students[1], students[3]], 
        [students[4], students[5]]
    ];
    return arr;
}

function getProject(pairs) {
    const arr = [];
    for(let i = 0; pairs[i]; i++) {
        arr.push([pairs[i].join(' i '), themes[i]]);
    }
    return arr;
}

function getGrade(students) {
    const arr = [];
    for(let i = 0; students[i]; i++) {
        arr.push([students[i], marks[i]]);
    }
    return arr;
}

function getGradeRandom(projects) { 
    const arr = [];
    for(let i = 0; projects[i]; i++) {
        let random = Math.random() * 4 + 1;
        random = random.toFixed();
        arr.push(projects[i].slice());
        arr[i].push(random);
    }
    return arr;
}

const pairs = getPairs(students);
console.log(pairs);

const projects = getProject(pairs);
console.log(projects);

const grade = getGrade(students);
console.log(grade);

const gradeRandom = getGradeRandom(projects);
console.log(gradeRandom);