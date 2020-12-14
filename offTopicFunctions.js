// Just things that aren't really part of the project, but I wanted to do something different for practice
// or express adhd.....

// Returns the specified text as pig latin
function pigLatin(text) {
	const inputText = text.split(" ");
	let returnText = "";
	for (const word of inputText) {
		console.log("word: " + word);
		let returnString = "";
	
		// Check if the 'word' should be ignored completely
		// ex. numbers or only punctuation
		const regExEndsWithPunctuation = RegExp(/[a-zA-Z]*(?=[!,.?])/);
		if (word.match(regExEndsWithPunctuation)) {
			// found punctuation at the end of the word
			const lastLetter = word.charAt(word.length-1);
			const remainder = word.slice(0, -1);
			const newWord = pigLatinize(remainder);
			returnString = newWord + lastLetter;
		}
		else {
			const regExAlphaOnly = RegExp(/[a-zA-Z]/);
			// Normal pig latin processing
			if (word.match(regExAlphaOnly)) {
				console.log("alpha-only word: " + word);
				returnString = pigLatinize(word);
			}
			// Do nothing if it doesn't fit either of these rules
			else {
				console.log("Do-nothing word: " + word);
				returnString = word;
			}
		}

		returnText += " " + returnString;
	}

	
	return returnText;
}


// Helper function that takes the word and pig-latin-izes it.  Returns fixed word.
// Punctuation/legal-checking should be done before using this.
function pigLatinize(word) {
	const firstLetter = word.charAt(0);
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	// vowel: no change to the original letter and append -hay to the end
	if (vowels.includes(firstLetter)) {
		return word + "-hay";
	}
	// consonant: take the first letter and append -*ay to the end
	else {
		return word.slice(1) + "-" + firstLetter + "ay";
	}
}

/* 

To do:
- fix catching numbers/gibberish (and skip latinizing)
- support for quotes (leading/ending)?
-if hyphen - treat each as a separate word


*/