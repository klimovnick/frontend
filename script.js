async function sendData() {
    const text = document.getElementById("text").value;
    const status = document.getElementById("status");

    if (!text.trim()) {
        status.textContent = "Введите текст";
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:5000/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text
            })
        });

        const result = await response.json();

        status.textContent = result.message;
    } catch (error) {
        status.textContent = "Ошибка соединения с сервером";
        console.error(error);
    }
}