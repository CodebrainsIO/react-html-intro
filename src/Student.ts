export default class Student {
    name: string;
    age: number;
    grade: string;
    courses: string[];

    constructor(name: string, age: number, grade: string, courses: string[]){
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.courses = courses;
    }
    
}