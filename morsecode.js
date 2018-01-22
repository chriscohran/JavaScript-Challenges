/*
	
	Morse Code Decoder
	
	By Chris Cohran
	January 21, 2018
	
	This is a challenge I found on the subreddit r/DailyProgrammer. I thought it sounded like a fun little
	project, so I decided to give it a go. I chose to write it in JavaScript to sharpen my skills in the
	language.
	
	This small project currently doesn't do any error checking, so you can easily throw errors but feeding
	it non-Morse code values. Maybe I'll update it to support error checking at a later date.
	
	https://www.reddit.com/r/dailyprogrammer/comments/pr2xr/2152012_challenge_7_easy/
	
*/

// Create an object for our Morse code alphabet 
morsecode = {
	".-": "A",
	"-...": "B",
	"-.-.": "C",
	"-..": "D",
	".": "E",
	"..-.": "F",
	"--.": "G",
	"....": "H",
	"..": "I",
	".---": "J",
	"-.-": "K",
	".-..": "L",
	"--": "M",
	"-.": "N",
	"---": "O",
	".--.": "P",
	"--.-": "Q",
	".-.": "R",
	"...": "S",
	"-": "T",
	"..-": "U",
	"...-": "V",
	".--": "W",
	"-..-": "X",
	"-.--": "Y",
	"--..": "Z"
};

var encodedmsg = ".... . .-.. .-.. --- / -.. .- .. .-.. -.-- / .--. .-. --- --. .-. .- -- -- . .-. / --. --- --- -.. / .-.. ..- -.-. -.- / --- -. / - .... . / -.-. .... .- .-.. .-.. . -. --. . ... / - --- -.. .- -.--",
	decodedmsg = "",
	tokens = [];

// This is our decode function that will take the encoded message and return the decoded version
function decode(msg) {
	
	tokens = msg.split(" ");
	
	// This loops through our tokens and matches them to a value in our alphabet object. It then returns the roman alphabet equivalent.
	for (i = 0; i < tokens.length; i++) {
		/*
			For some reason, this was returning 'undefined' for every SPACE that it encountered.
			I need to research into why this is happening.
		*/
		if (morsecode[tokens[i]] != undefined) {
			decodedmsg += morsecode[tokens[i]];
		} else {
			decodedmsg += " ";
		}
	}
	
	// This returns our decoded message while converting it to lowercase, then capitalizing the first letter
	return decodedmsg.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase());
	
}

console.log(decode(encodedmsg));