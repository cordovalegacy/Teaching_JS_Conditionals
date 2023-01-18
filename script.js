function multiply(a, b){
    return a*b;
}

var result = multiply(10, 10)
console.log(result)


function oddOrEven(num){
    if(num%2 == 0){
        console.log("Num is Even")
    }else{
        console.log("Num is Odd")
    }
}

var res = oddOrEven(6)
console.log(res)


function oddOrEven(num){
    if(num%2 == 0){
        return "Num is Even";
    }else{
        return "Num is Odd";
    }
}

var res = oddOrEven(6)
console.log(res)


function compareValues(num1, num2){
    if(num1 > num2){
        console.log(`${num1} is greater than ${num2}`)
    }else if(num1 < num2){
        console.log(`${num2} is greater than ${num1}`)
    }
    else if(num1 == num2){
        console.log(`${num1} and ${num2} are equivalent`)
    }
    else{
        console.log("Not a valid argument")
    }
}

compareValues(1, 10)


function assignGrades(grade){
    if(grade <= 59){
        return "F"
    }else if (grade <= 69){
        return "D"
    }else if (grade <= 79){
        return "C"
    }else if (grade <= 89){
        return "B"
    }else if (grade <= 100){
        return "A"
    }else{
        return "Must Take Exam To Receive Score"
    }
}

var grades = assignGrades()
console.log(grades)


function assignGrades(grade, feedback){
    if(grade <= 59){
        return `F, ${feedback}`
    }else if (grade <= 69){
        return `D, ${feedback}`
    }else if (grade <= 79){
        return `C, ${feedback}`
    }else if (grade <= 89){
        return `B, ${feedback}`
    }else if (grade <= 100){
        return `A, ${feedback}`
    }else{
        return "Must Take Exam To Receive Score"
    }
}

var grades = assignGrades(99, "Great Job!")
console.log(grades)
