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
}

async function getData() {
    console.log("async call");
    try {
        let response = await fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt')
        if (response.status !== 200) {
            throw new Error("Error while reading file..")
        }
        let text = await response.text();
        var res = text.split("\n")
        console.log("Size of strings array: " + res.length);
        for(let i=0; i<=(res.lenght-3);i+=3) {
            var student = new Student(res[i], res[i+1], res[i+2], res[i+3]);
            console.log(student.getInfo());
        }
    } catch (err) {
        console.log('Fetch problem: ' + err.message)
    } finally {
        let textArea = document.getElementById('text_area');
        textArea.innerHTML = student.getInfo();
    }
}
















