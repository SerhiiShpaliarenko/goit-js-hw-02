
function checkForSpam(message) {
  // Переводимо повідомлення у нижній регістр для зручної перевірки
  const lowerCaseMessage = message.toLowerCase();
  
  // Перевіряємо, чи містить рядок заборонені слова
  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
  
  // Або ще коротший варіант запису тієї ж логіки:
  // return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

// Перевірка роботи функції
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
