let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
  ];


let namenFor = [];
edelMetallPreise.forEach(function (a) {
    namenFor.push(a.name)
});
console.log(namenFor);


let namenMap = edelMetallPreise.map(function (a) {
    return a.name;
});
console.log(namenMap);

let preiseFor = [];
edelMetallPreise.forEach(function (a) {
    preiseFor.push(a.preiseGramEuro)
});
console.log(preiseFor);


let preiseMap = edelMetallPreise.map(function (a) {
    return a.preiseGramEuro;
});
console.log(preiseMap);

let veraenderungFor = [];
edelMetallPreise.forEach(function (a) {
  veraenderungFor.push(a.veraenderung)
});
console.log(veraenderungFor);


let veraenderungMap = edelMetallPreise.map(function (a) {
    return a.veraenderung;
});
console.log(veraenderungMap);

const filtered = edelMetallPreise.filter (d => d.preiseGramEuro > 50);
console.log(filtered);