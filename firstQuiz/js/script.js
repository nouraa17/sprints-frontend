/// code for the video

// document.getElementById('play-button').onclick = function() {
//     var video = document.getElementById('video-player');
//     var imageVideo = document.getElementById('image-video-container');
//     var videoContainer = document.getElementById('video-container');
//     imageVideo.style.display = 'none';
//     videoContainer.style.display = 'block';
//     video.play();
// };
// document.getElementById('pause-button').onclick = function() {
//     var video = document.getElementById('video-player');
//     if (video.paused) {
//         video.play();
//         event.target.textContent = 'Pause';
//     } else {
//         video.pause();
//         event.target.textContent = 'Play';
//     }
// };
// document.getElementById('close-button').onclick = function() {
//     var video = document.getElementById('video-player');
//     var imageVideo = document.getElementById('image-video-container');
//     var videoContainer = document.getElementById('video-container');
//     video.pause();
//     videoContainer.style.display = 'none';
//     imageVideo.style.display = 'block';
// };

// document.getElementById('close-button').onclick = function() {
//     var video = document.getElementById('video-player');
//     var modal = document.getElementById('videoModal');
//     video.pause();
//     modal.hide();
// };

document.getElementById('play-button').onclick = function() {
    var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    videoModal.show();
    var video = document.getElementById('video-player');
    video.play();
};

/////////////////////////////////////////////////////////////////////////////////////
 // code for the form

function validateInput(input) {
    let inputName = input.getAttribute('name') || 'Input';
    let relatedAlert = input.nextElementSibling;

    if (relatedAlert && relatedAlert.classList.contains('form-text')) {
        if (input.value.length < 4) {
            relatedAlert.textContent = inputName + ' must be more than 4 characters';
            relatedAlert.className = 'form-text alert alert-danger';
        } else {
            relatedAlert.textContent = '';
            relatedAlert.className = 'form-text';
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////
// code for the table addition

document.getElementById('addRowForm').onsubmit = function(event) {

    event.preventDefault(); //prevent reload 

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const handle = document.getElementById('handle').value;
    

    const tableBody = document.getElementById('tableBody');
    const rowCount = tableBody.getElementsByTagName('tr').length + 1;
    
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <th scope="row">${rowCount}</th>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${handle}</td>
    `;
    tableBody.append(newRow);
    $('#addRowModal').modal('hide');
    document.getElementById('addRowForm').reset();
};
// localStorage.setItem('theme','dark')
// console.log(localStorage.theme)