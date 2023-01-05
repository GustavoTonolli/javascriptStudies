// Using this

// this.nome is a variable declared for the function, that receives de name parameter

function student(name, note) {
    this.name = name;
    this.note = note;

    this.dados_anonymous = function () {
        setTimeout(() => { // set timeout with function creates a new instance of this name, and this note. Use arrow function instead. Arrow doesnt create another instance.
            console.log(this.name);
            console.log(this.note);
        }, 2000)
    }


}

const al1 = new student('Bruno', 100)

al1.dados_anonymous()