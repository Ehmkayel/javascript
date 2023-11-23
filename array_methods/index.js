//filter method
const results = [28, 50, 150, 200, 30, 0, 28];

const getresults = results.filter(result =>{
    return result < 50;
});
console.log(getresults);


//map method
const names = ["ramadan", "ngozi", "felicia", "deola", "hauwa"]

const mainNames = names.map((name) =>{
    return name[3];

})
console.log(mainNames)

