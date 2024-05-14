const words = ["planes", "trains", "automobiles"];

const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(0);
});

console.log(capitalizedWords); 