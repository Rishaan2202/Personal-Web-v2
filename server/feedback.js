const API = 'http://localhost:5501/feedback';

document.getElementById('feedbackForm').onsubmit = async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        feedback: document.getElementById('feedback').value
    }

    const res = await fetch (API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    const result = await res.json()

    if (res.ok){
        console.log("Response submitted")
        document.getElementById('feedbackForm').reset()
        document.getElementById('outcome').innerText = "Feedback submitted successfully!"

        loadFeedback();
    } else {
        document.getElementById('outcome').innerText = "Error submitting feedback."
    }
}

async function loadFeedback() {
    const res = await fetch(API);
    const data = await res.json();
    const feedbackList = data.list;

    const ulElement = document.querySelector("#feedbackList ul");

    if(!ulElement){
        console.error("Could not find the feedback list element")
        return;
    }

    if (feedbackList.length > 0) {
        ulElement.innerHTML = feedbackList.map(fb => `<li><strong>${fb.name}</strong>: ${fb.feedback}</li>`).join('');
    } else {
        ulElement.innerHTML = "<li>No feedback available.</li>";
    }
}

loadFeedback();