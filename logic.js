










//pop up buttons (in the header)
const openPopupButtons = document.querySelectorAll('[data-modal-target]')
const closeButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openPopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.modalTarget)
    openPopup(popup)
  })
})

overlay.addEventListener('click', () => {
  const popups = document.querySelectorAll('.modal.active')
  popups.forEach(popup => {
    closePopup(popup)
  })
})

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.modal')
    closePopup(popup)
  })
})

function openPopup(popup) {
  if (popup == null) return
  popup.classList.add('active')
  overlay.classList.add('active')
}

function closePopup(popup) {
  if (popup == null) return
  popup.classList.remove('active')
  overlay.classList.remove('active')
}



//vision statement numbered paragraphs
const textAbove = document.getElementById('textAbove');
const paragraphContents = document.querySelectorAll('.paragraph-content');

// Function to show the selected paragraph based on the clicked button
function showParagraphContent(paragraphNumber) {
    paragraphContents.forEach((content) => {
        content.classList.remove('show');
    });

    const selectedContent = document.getElementById(`paragraphContent${paragraphNumber}`);
    selectedContent.classList.add('show');
}

// Event listeners for the radio buttons
document.getElementById('paragraph1').addEventListener('click', () => showParagraphContent(1));
document.getElementById('paragraph2').addEventListener('click', () => showParagraphContent(2));
document.getElementById('paragraph3').addEventListener('click', () => showParagraphContent(3));
document.getElementById('paragraph4').addEventListener('click', () => showParagraphContent(4));
document.getElementById('paragraph5').addEventListener('click', () => showParagraphContent(5));





//project overview paragraphs
document.getElementById('paragraph6').addEventListener('click', () => showParagraphContent(6));
document.getElementById('paragraph7').addEventListener('click', () => showParagraphContent(7));







// Feature section

const imageElements = {
    image1: {
        src: "welcome_page.gif",
        text: "The Bison-themed welcome page allows users to add their name so that a personalized greeting is displayed on the home page"
    },
    image2: {
        src: "water_tracker.gif",
        text: "The circular water tracker allows users to keep track of how much water they've drank in a day"
    },
    image3: {
        src: "adding_deleting_workout.gif",
        text: "The home page allows users to both add workouts with a plus button and delete workouts via an \"Edit\" mode"
    },
    image4: {
        src: "adding_deleting_exercise.gif",
        text: "An overview of a workout can be seen by clicking on it. From there, new exercises can be added and old ones can be deleted"
    },
    image5: {
        src: "start_workout.gif",
        text: "When visiting the Active Living Centre, a workout can be started, which allows users to track reps and perform their exercises"
    },
    image6: {
        src: "view_past_workouts.gif",
        text: "Past workouts can be easily viewed..."
    },
    image7: {
        src: "view_gym_schedule.gif",
        text: "View a gym schedule for the Active Living Centre"
    }
};

const imageRadioButtons = document.querySelectorAll('input[type="radio"][name="image"]');
const centerImage = document.getElementById('centerImage');
const centerText = document.getElementById('centerText');

imageRadioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            const imageName = radio.id;
            centerImage.src = imageElements[imageName].src;
            centerText.textContent = imageElements[imageName].text;
        }
    });
});









