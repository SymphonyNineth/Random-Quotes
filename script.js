let quoteField = document.querySelector("#quote"),
    authorField = document.querySelector("#author");

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    randomNumber = Math.floor(Math.random()*1643);

    function getQuote(quotes){
      return quotes[randomNumber].text;
    }
  
    function getAuthor(quotes){
      return quotes[randomNumber].author;
    }
  
    quoteField.textContent = getQuote(data);
    authorField.textContent = getAuthor(data);
  });
