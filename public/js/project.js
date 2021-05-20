const newReply = async (event) => {
    event.preventDefault();
    const reply_dis = document.querySelector('#project-reply').value.trim();
    const project_id = document.querySelector('#replybtn').value.trim();


    if (reply_dis && project_id) {
        const response = await fetch(`/api/replies`, {
            method: 'POST',
            body: JSON.stringify({ reply_dis, project_id}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to reply');
        }
    }
};

document
    .getElementById('replybtn')
    .addEventListener('click', newReply)
