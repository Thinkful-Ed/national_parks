<<<<<<< Updated upstream

=======
console.log(document);
/*
const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".value")
console.log(value)

const button = document.querySelector("button")
console.log(button)

const area = document.querySelector('.area-display')
console.log(area)

const div = document.querySelector(".stats div")
console.log(div)

const hello = document.querySelector(".hello")
console.log(hello)

const allButtons = document.querySelectorAll("button")
console.log(allButtons)

Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");


// Iterate over the list and print each one: Either

for (let element of heading3List.values()) {
  console.log(element);
}

// Or

for (let i = 0; i < heading3List.length; i++) {
  const element = heading3List[i];
  console.log(element);
  }
  

const ratingsList = document.querySelectorAll(".rating-display")
  
  for (let rating of ratingsList.values()) {
      console.log(rating)
  }

console.log("---")

  for (let i = 0; i < ratingsList.length; i++) {
      const rating = ratingsList[i]
      console.log(rating)
  }
  */


// -- UPDATING THE DOM -- \\

  // - CHANGING TEXT USING innerText() -

    const descriptions = document.querySelectorAll(".description-display")
    console.log(descriptions)

    for (let desc of descriptions) {
      let content = desc.innerText

      if (content.length > 250) {
        content = content.slice (0, 250)
        content = `${content} <a href="#">...</a>`
      }
      desc.innerHTML = content
    }

  // - CHANGING STYLE - 

    const ratings = document.querySelectorAll(".rating-display .value")

    for (let rating of ratings) {
      let ratingValue = parseFloat(rating.innerText) 
      //parseFloat() creates a floating decimal number (Non-integer)
      
      if(ratingValue > 4.7) {
        rating.style.fontWeight = "bold"
        rating.style.color = "#3ba17c"
      }
    }


  // - UPDATING/ ADDING CSS CLASSES/ CREATING CLASS RULES USING classList() -

    for (let rating of ratings) {
      let ratingValue = parseFloat(rating.innerText)
      
      if(ratingValue > 4.7) {
        rating.classList.add("high-rating")
        rating.classList.remove("value")
      }
    }

  // - CREATING DOM ELEMENTS USING createElement() AND appendChild() -

    const parks = document.querySelectorAll(".park-display")
    const numberParks = parks.length

    // In this case, use <div> as the new element:

    const newElement = document.createElement("div")
    // Creates an empty element. Use previous methods above to modify the empty element:

      // Set the text of the element:

      newElement.innerText = `${numberParks} exciting pards to visit`

      // Adding .header-statement class to the new element:

      newElement.classList.add("header-statement")

      // Adding element to page:

        // Select <header> element, use appendChild() to add new element to <header>:
        const header = document.querySelector("header")
        header.appendChild(newElement)
/*
    // - REMOVING DOM ELEMENTS USING removeChild() -

      // Example: Removing first park on page:

        // Getting parent element of all parks:
        const main = document.querySelector("main")

        // Selecting a single park:
        const park = main.querySelector(".park-display")

        // Removing park:
        main.removeChild(park)
*/

// -- Event Listeners -- \\

    // - CREATING EVENT LISTENERS USING addEventListener() -

      // EXAMPLE: Adding event listener to a button

        // Select a button on the page:

        const firstBtn = document.querySelector("button")

        // Call addEventListener() method on the button:

        firstBtn.addEventListener("click", (event) => {
          console.log("You clicked the button", event)
        })

    // - GATHERING DETAILS ABOUT EVENTS

      // EXAMPLE: Determining specific element that fired
/*
      firstBtn.addEventListener("click", (event) => {
        console.log(event.target)
      });
*/
      // - EXAMPLE: ATTACHING EVENT HANDLERS TO MULTIPLE ELEMENTS

      const allBtns = document.querySelectorAll(".rate-button")

      // Iterate through the list of buttons and add an event handler to each
/*     
        allBtns.forEach((btn) => {
          btn.addEventListener("click", (event) => {
            console.log(event.target)
          });
        });
*/
        // when you click any of the buttons, you get the same result. 
        // So how would you know which park belongs to the button that was clicked?

      // - USING .parentNode TO GET PARENT ELEMENT OF EVENT LOCATION

        // EXAMPLE: logging the parent element
        
        allBtns.forEach((btn) => {
          btn.addEventListener("click", (event) => {
            console.log(event.target.parentNode)
          })
        })

        // EXAMPLE: changing the background color when clicking

        allBtns.forEach((btn) => {
          btn.addEventListener("click", (event) => {
            const park = event.target.parentNode
            park.style.backgroundColor = "#c8e6c9"
          })
        })

      // - EXAMPLE: ADDING A SORTER TO SORT THE LIST OF PARKS ON THE PAGE
        
        // (Added "sorter" div / class to index.html, then added CSS style for class)

        // Adding event listener to link

          // Select the `nameSorter` link          
//        const nameSorter = document.querySelector("#name-sorter");

          // Add an event listener
 //       nameSorter.addEventListener("click", (event) => {
 //         console.log("You clicked the name sorter")
 //       })

            /* when doing this, you choose the link by ID (#name-sorter)
              - When clicking Name link, console's log blinks, then log disappears

                - The default link behavior is to follow the created link. browser is 
                  just reloading the page as a result */

            // EXAMPLE: PREVENTING DEFAULT BEHAVIOR (page reload) USING preventDefault()
/*
            nameSorter.addEventListener("click", (event) => {
              event.preventDefault()
              console.log("You clicked the name sorter")
            })
*/
            /* Here is the logic that you will implement in this event handler

            - Prevent default behavior, then:

            - Get the <main> element that contains all the parks.
            - Get a NodeList of all the parks.
            - Empty the <main> element.
            - Convert the NodeList to an array for convenience of sorting.
            - Sort the array using techniques that you learned previously.
            - Iterate through the sorted array and append each park to <main>. */
/*
            nameSorter.addEventListener("click", (event) => {
              event.preventDefault()
            
              // 1.  Get the main element
              const main = document.querySelector("main")
            
              // 2. Get the list of parks
              const parksList = main.querySelectorAll(".park-display")
            
              // 3. Empty the main element
              main.innerHTML = ""
            
                // (parks will disappear when clicked with <main> cleared)

              // 4. Create an array from NodeList using Array.from() - takes array-like strucures and creates an array
              const parksArray = Array.from(parksList)

              // 5. Sort the array
              parksArray.sort((parkA, parkB) => {

                // Given two park elements, find park NAMES, then compare NAMES (Name link)
                // The park names are the innerText of <h2> elements, per the HTML:
                const parkAName = parkA.querySelector("h2").innerText
                const parkBName = parkB.querySelector("h2").innerText
                if (parkAName < parkBName) {
                  return -1
                } else if (parkAName > parkBName) {
                  return 1
                } else {
                  return 0
                }
              }
 
              // Shorter version of 5, using external function:

              // External function:
              const sortByName = (parkA, parkB) => {
                const parkAName = parkA.querySelector("h2").innerText;
                const parkBName = parkB.querySelector("h2").innerText;
                if (parkAName < parkBName) {
                  return -1;
                } else if (parkAName > parkBName) {
                  return 1;
                } else {
                  return 0;
                }
              }

              // Shorter version of 5:
              parksArray.sort(sortByName);
            
              // 6. Iterate over sorted array and add (append) each park element back
                 to the <main> element in its new order:
              parksArray.forEach((park) => {
                main.appendChild(park);
              })
            })
*/
            // Shortened version, all together:

            // Function for sorting by name
            const sortByName = (parkA, parkB) => {
              const parkAName = parkA.querySelector("h2").innerText;
              const parkBName = parkB.querySelector("h2").innerText;
              if (parkAName < parkBName) {
                return -1;
              } else if (parkAName > parkBName) {
                return 1;
              } else {
                return 0;
              }
            };

            // Function for preventing the `nameSorter` click default
            const nameSorterClickHandler = (event) => {
              event.preventDefault();

              // 1.  Get the main element
              const main = document.querySelector("main");

              // 2. Get the list of parks
              const parksList = main.querySelectorAll(".park-display");

              // 3. Empty the main element
              main.innerHTML = "";

              // 4. Create an array
              const parksArray = Array.from(parksList);

              // 5. Sort the array
              parksArray.sort(sortByName);

              // 6. Insert each park back into the DOM
              parksArray.forEach((park) => {
                main.appendChild(park);
              });
            };

          // ADDING EVENT LISTENER TO THE DOM:
          
          // Function for sorting by rating
          const sortByRating = (parkA, parkB) => {
            const parkARating = parkA.querySelector(".rating-display div").innerText;
            const parkBRating = parkB.querySelector(".rating-display div").innerText;
            if (parkARating < parkBRating) {
              return -1;
            } else if (parkARating > parkBRating) {
              return 1;
            } else {
              return 0;
            }
          };

          // Function for handling the `ratingSorter` click
          const ratingSorterClickHandler = (event) => {
            event.preventDefault();

            // 1.  Get the main element
            const main = document.querySelector("main");

            // 2. Get the list of parks
            const parksList = main.querySelectorAll(".park-display");

            // 3. Empty the main
            main.innerHTML = "";

            // 4. Create an array
            const parksArray = Array.from(parksList);

            // 5. Sort the array
            parksArray.sort(sortByRating);

            // 6. Insert each park into the DOM
            parksArray.forEach((park) => {
              main.appendChild(park);
            });
          };

          // Select the `nameSorter` link
          const ratingSorter = document.querySelector("#rating-sorter");

          // Add an event listener
          ratingSorter.addEventListener("click", ratingSorterClickHandler);

// -- DOMContentLoaded Event -- \\

    console.log("Before!");

    window.addEventListener("DOMContentLoaded", (event) => {
      console.log("Loaded!");
    });
    
    console.log("After!");

    // Refactor DOM manipulation code to be within DOMContentLoaded event:

      // Declare handler and support functions here

      // Function for sorting by name
//      const sortByName = ...

      // Function for sorting by rating
//      const sortByRating = ...

      // Function for handling the `nameSorter` click
//      const nameSorterClickHandler = ...

      // Function to handle the `ratingSorter` click
//      const ratingSorterClickHandler = ...


      // The code that runs once the DOM is loaded
      const main = () => {
        // Select the `nameSorter` link
        const nameSorter = document.querySelector("#name-sorter");

        // Add an event listener
        nameSorter.addEventListener("click", nameSorterClickHandler);

        // Select the `ratingSorter` link
        const ratingSorter = document.querySelector("#rating-sorter");

        // Add an event listener
        ratingSorter.addEventListener("click", ratingSorterClickHandler);
      }

      // Add event listener for `DOMContentLoaded`
      window.addEventListener("DOMContentLoaded", main);


      
>>>>>>> Stashed changes
