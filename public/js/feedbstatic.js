//grab the api data display all message when page loads

fetch('/api')
.then(response => response.json())
.then(data =>{
    //display our message to our user

    //find something in our dom
    //attach data to inside html fragment
    //[{ }, {}]  name, title, message
    updateFeedback(data);
    
})

//make post fetch request when a new message is submitted 
//retrieve form from dom
let form = document.querySelector('form');
// attach event listenter to form to listent for submit
form.addEventListener('submit', (e) => {
    // prevent the default behaviour (reloading page or navigating to action)
    e.preventDefault();

    // make a fetch call to /api post method and attach form data
    //name, title, message
    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
        body: JSON.stringify({
            name: document.getElementById('feedback-form-name').value, 
            title: document.getElementById('feedback-form-title').value, 
            message: document.getElementById('feedback-form-message').value
        })
    })
    .then(response => response.json())
    .then(data => {
        //data is all of the old message,plus the new one we just submitted
        updateFeedback(data);
    })
    
})


const updateFeedback = (data) => {
    let output = "";
    data.forEach((item, key) =>{

        output += '     <div class="feedback-item item-list media-list">';
        output += '       <div class="feedback-item media">';
        output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
        output += '         <div class="feedback-info media-body">';
        output += '           <div class="feedback-head">';
        output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
        output += '           </div>';
        output += '           <div class="feedback-message">' + item.message + '</div>';
        output += '         </div>'; 
        output += '       </div>';
        output += '     </div>';
    })
    
    //attach to a dom element
    let feedbackMessages = document.querySelector('.feedback-messages');
    feedbackMessages.innerHTML = output;
}


//re-display message when new message had been submitted