/*----- constants -----*/




 /*----- app's state (variables) -----*/ 

let skillsArr = [];



$('#submit-btn').on('click', function(e){
    
    var skill = $('#submitted-skill').val();
    console.log(skill);
    var listItem = `
    <li><button class='removeBtn'>x</button>${skill}</li>
    `
    console.log(listItem)
    $('ul').append(listItem);
    addToSkillArr(skill);
});

$('ul').on(
    'click', 
    'button', 
    function() {
        $(this).closest('li').fadeOut(1000, function() {
            // now that the tr is hidden, let's completely remove it from the DOM
            $(this).remove();
        });
    }
);


//cacheing skills, I think

function addToSkillArr (skill) {
    skillsArr.push(skill);
}
 


/*----- event listeners -----*/ 
// grab string from input box and store in variable

// wait for uesr to click and add the string to the list 




