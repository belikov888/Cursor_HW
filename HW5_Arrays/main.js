const STUDENTS = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const THEMES = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const MARKS = [4, 5, 5, 3, 4, 5];

function getPairs(STUDENTS) {
    const arr = [];
    const manArr = [];
    const girlArr = [];
    for(let i = 0; i < STUDENTS.length; i++) {
        if(STUDENTS[i].substring(STUDENTS[i].length - 1) !== 'а') {
            manArr.push(STUDENTS[i]);
        }
        else {
            girlArr.push(STUDENTS[i]);
        }    
    }
    for(let i = 0; i < manArr.length; i++) {
        arr.push([manArr[i], girlArr[i]]);
    }
    return arr;
}

function getProject(pairs) {
    const arr = [];
    for(let i = 0; pairs[i]; i++) {
        arr.push([pairs[i].join(' i '), THEMES[i]]);
    }
    return arr;
}

function getGrade(STUDENTS) {
    const arr = [];
    for(let i = 0; STUDENTS[i]; i++) {
        arr.push([STUDENTS[i], MARKS[i]]);
    }
    return arr;
}

function getGradeRandom(projects) { 
    const arr = [];
    for(let i = 0; projects[i]; i++) {
        let random = Math.floor(Math.random() * 5 + 1);
        arr.push(projects[i].slice());  
        arr[i].push(random);
    }
    return arr;
}

const pairs = getPairs(STUDENTS);
console.log(pairs);

const projects = getProject(pairs);
console.log(projects);

const grade = getGrade(STUDENTS);
console.log(grade);

const gradeRandom = getGradeRandom(projects);
console.log(gradeRandom);