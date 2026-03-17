function shortcut(s1, s2) {
  // your code here
	 if (str1 === "" || str2 === "") {
        return "";
    }
	const firstLetterStr1 = str1.charAt(0);
    const firstLetterStr2 = str2.charAt(0);
	 return firstLetterStr1 + firstLetterStr2;
}
console.log(shortcut("Amnesty", "International")); 
console.log(shortcut("Hello", "world"));            
console.log(shortcut("apple", "banana"));           
console.log(shortcut("Upper", "lower"));           
console.log(shortcut("", "International"));          
console.log(shortcut("Amnesty", ""));  

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
