

const server = io().connect();

const getCurrentDate = () => {
    const today = new Date();
    const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;

    return dateTime;
};

const renderMsg = (msgs) => {
    const chat = document.querySelector("#chat");
    //console.log(msgs)
    const chatMessages = msgs.map((msg) => {
        return `<p>
                    <span>${msg.email}</span>
                    <span>${msg.date}</span>
                    <span>${msg.text}</span>
                </p>`;
    });

    chat.innerHTML = chatMessages.join(" ");
};

const sendMessage = () => {
    const email = document.querySelector("#email").value;
    const type = document.querySelector("#type").value;
    const text = document.querySelector("#text").value;

    const message = { email, type, text, date: getCurrentDate() };
    server.emit("new-message", message);
};

server.on("new-message-server", (messages) => {
    renderMsg(messages);
});
