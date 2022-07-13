class Student {
    constructor(name, adress, phone, courses) {
        this.name = name;
        this.adress = adress;
        this.phone = phone;
        this.courses = courses;
    }

    getInfo() {
        return "Name: " + this.name + "\n" +
            "Adress: " + this.adress + "\n" +
            "Phone: " + this.phone + "\n" +
            "Courses: " + this.courses + "\n\n";
    }
    async getData() {
        try {
            let response = await fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt')
            if (response.status !== 200) {
                throw new Error("Error while reading file..")
            }
            let text = await response.text();
            var res = text.split("\n")
        } catch (err) {
            console.log('Fetch problem: ' + err.message)
        }
        for(let i=0; i<=(res.lenght-3);i+=3) {
            let student = new Student(res[i], res[i+1], res[i+2], res[i+3]);
        }
    }
}
console.log(student.getInfo());
//console.log(Student.getInfo());
//console.log(getInfo());










