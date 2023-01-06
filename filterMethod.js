// filter method

// can return the filtered items that I want from an Array;



// const greaterThan18Filter = (value, index, arr) => {
const greaterThan18Filter = (value) => {
    if (value >= 18)
        return value;
};

const lessThan18Filter = (value) => {
    if (value < 18)
        return value;
};
const ages = [15, 21, 30, 17, 18, 44, 12, 50];
const greater = ages.filter(greaterThan18Filter);
const less = ages.filter(lessThan18Filter);


console.log(ages);
console.log(greater);
console.log(less);