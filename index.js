
// Handler for form submission
const submitHandler = (event) => {
    event.preventDefault();
    console.log("The form was submitted");
    // Get the form data
    const formData = new FormData(event.target);
    // Validate inputs from submission
    const errors = validateForm(formData);
    // clear all previous errors
    const errorElements = document.querySelectorAll(".error");
    for (let element of errorElements){
        element.style.display = "none";
    }

    // display any new errors
    Object.keys(errors).forEach((key) => {
        // find the specific error element
        const errorElement = document.querySelector(`#${key}-form .error`);
        errorElement.innerHTML = errors[key];
        errorElement.style.display = "block";
    });
    // if there are no errors
    if (!Object.keys(errors).length){
        //create a new element
        const parkSection = document.createElement("section");
        // add the park class
        parkSection.classList.add("park-display");
        // construct the HTML for this element
        const content = `
        <h2>${formData.get("name")}</h2>
        <div class="location-display">${formData.get("location")}</div>
        <div class="description-display">${formData.get("description")}</div>
        <button class="rate-button" title="Add to Favourites">&#9734;</button>
        <div class="stats">
          <div class="established-display stat">
            <h3>Established</h3>
            <div class="value">${moment(formData.get("established")).format(
              "MMMM D, YYYY"
            )}</div>
          </div>
          <div class="area-display stat">
            <h3>Area</h3>
            <div class="value">${formData.get("area")}</div>
          </div>
          <div class="rating-display stat">
            <h3>Rating</h3>
            <div class="value">${formData.get("rating")}</div>
          </div>
        </div>
        `;
        // set the innerHTML
        parkSection.innerHTML = content;
        // append the main element
        document.querySelector("main").appendChild(parkSection);
    }
    
};

// Creates event listener for form submission
const main = () => {
    // Get the form element
    const form = document.querySelector("#park-form");
    // Attach the submit handler
    form.addEventListener("submit", submitHandler);

    render();
};

// Event listener for DOMContentLoaded that invokes main function
window.addEventListener("DOMContentLoaded", main);

// Function accepts string value and returns true if value is not null and the string contains at least one none-space character
function validateExists(value) {
    return value && value.trim();
}

function validateForm(formData){
    const errors = {};

    //check if name was entered
    if (!validateExists(formData.get("name"))){
        errors.name = "Please enter a name";
    }

    // check if rating was entered
    if (!validateExists(formData.get("rating"))){
        errors.rating = "Please enter a name";
    }

    // check if description was entered
    if (!validateExists(formData.get("description"))){
        errors.description = "Please enter a short description";
    }

    // checks if established data was entered
    if (!validateExists(formData.get("established"))){
        errors.established = "Please enter date";
    }
    
    // check if area was entered
    if (!validateExists(formData.get("area"))){
        errors.area = "Please enter the area of the park";
    }

    // checks if location was entered
    if(!validateExists(formData.get("location"))){
        errors.location = "Please enter the location of the park";
    }
    return errors;
}

const renderOnePark = (park) => {
    // Get the individual properties of the park
    const { name, location, description, established, area, rating } = park;
  
    const content = `
        <section class="park-display">
          <h2>${name}</h2>
          <div class="location-display">${location}</div>
          <div class="description-display">${description}</div>
          <button class="rate-button" title="Add to Favourites">&#9734;</button>
          <div class="stats">
            <div class="established-display stat">
              <h3>Established</h3>
              <div class="value">${established}</div>
            </div>
            <div class="area-display stat">
              <h3>Area</h3>
              <div class="value">${area}</div>
            </div>
            <div class="rating-display stat">
              <h3>Rating</h3>
              <div class="value">${rating}</div>
            </div>
          </div>
        </section>
    `;
    return content;
  };

  const render = () => {
    // Get the parent element
    const main = document.querySelector("main");
  
    // Empty the parent element
    main.innerHTML = "";
  
    // Get the parks HTML
    const content = parks.map(renderOnePark).join("");
  
    // Set the `innerHTML` of parent element
    main.innerHTML = content;
  };