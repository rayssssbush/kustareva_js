const answer = prompt("Вам уже есть 18 лет? (да/нет):");
    
if (answer.toLowerCase() === "да") {
	alert("Текст для взрослых.");
} else {
	alert("Доступ запрещен.");
}