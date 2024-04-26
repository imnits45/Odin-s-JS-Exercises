const getTheTitles = function(books) {
    const titles = [];
    for(let i in books)
    {
        titles.push(books[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
