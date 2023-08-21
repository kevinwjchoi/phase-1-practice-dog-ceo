console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    data.message.forEach(imageUrl => {
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      document.body.appendChild(imgElement);
    });
  })
  .catch(error => console.error(error));

  const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
    const breedList = Object.keys(data.message);
    const ulElement = document.querySelector("ul");

    breedList.forEach(breed => {
      const liElement = document.createElement("li");
      liElement.textContent = breed;
      liElement.addEventListener('click', function(event){
        liElement.style.color = "orange";
      })
      ulElement.appendChild(liElement);
    });
  })
  .catch(error => console.error(error));

  const selectElement = document.getElementById("breed-dropdown");
    selectElement.addEventListener("change", handleFilterChange);

    function filterBreeds(selectedLetter) {
        const breedItems = document.querySelectorAll("li");
      
        breedItems.forEach((breedItem) => {
          if (breedItem.textContent.charAt(0) === selectedLetter) {
            breedItem.style.display = "list-item";
          } else {
            breedItem.style.display = "none";
          }
        });
      }
    function handleFilterChange(event) {
        const selectedLetter = event.target.value;
        filterBreeds(selectedLetter);
        }