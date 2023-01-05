// get element by tag name, collection of elements;

const htmlCollection = [...document.getElementsByTagName("div")];


htmlCollection.map((e) => {
    e.innerHTML = "yep!"
})
