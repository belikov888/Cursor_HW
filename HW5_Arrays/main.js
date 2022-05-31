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
        let n = pairs[i];
        let m = [n[0] + ' i ' + n[1], themes[i]];
        arr.push(m);
    }
    return arr;
}

function getGrade(students) {
    const arr = [];
    for(let i = 0; students[i]; i++) {
        let n = students[i]; 
        let m = marks[i];
        arr.push([n, m]);
    }
    return arr;
}

function getGradeRandom(projects) { 
    let random; 
    const arr = [];
    for(let i = 0; projects[i]; i++) {
        m = projects[i].slice();
        random = Math.random() * 4 + 1;
        random = random.toFixed();
        m.push(random);
        arr.push(m);
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
