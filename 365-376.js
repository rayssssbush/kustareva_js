let timerId = setInterval(() => {
    console.log("Это сообщение выводится каждые 3 секунды");
}, 3000);
clearInterval(timerId);
