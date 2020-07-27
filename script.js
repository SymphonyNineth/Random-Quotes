let quoteField = document.querySelector("#quote"),
    authorField = document.querySelector("#author"),
    spinner = document.querySelector("#spinner");

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    spinner.hidden = true;

    randomNumber = Math.floor(Math.random()*1644);

    function getQuote(quotes){
      return quotes[randomNumber].text;
    }
  
    function getAuthor(quotes){
      return quotes[randomNumber].author;
    }
  
    quoteField.textContent = getQuote(data);
    authorField.textContent = getAuthor(data);
  });
