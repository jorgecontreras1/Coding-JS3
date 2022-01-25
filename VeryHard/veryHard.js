class Person{
    constructor(name,job,age){
    this.name = name;
    this.job = job;
    this.age = age;
    };

    exercise() {
        console.log("Running is fun! - said no one ever");   
    }
    fetchJob() {
        console.log(this.name + " is a " + this.job)
    }
}
class Progammer extends Person{
    constructor(language,busy){
    this.language = language;
this.busy = true;
};
completeTask() {
    this.busy = false;
}
offerNewTask() {
    if (this.busy = true){
        console.log(this.name + "can't accept any new tasks right now.")
    }
    if (this.busy = false){
        console.log(this.name + "would love to take on a new responsibility.")
    }
}
learnLanguage() {
}
listlanguages() {
    console.log(this.language)
}
}
const me = new Programmer("Jorge", "Student", 23,);