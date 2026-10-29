const articles = fetch(`https://dev.to/api/articles?username=me.tusharkhairnar`).then((res) => res.json());

articles.then(response => {
    console.log(response);
})
