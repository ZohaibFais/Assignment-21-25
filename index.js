//Q1.

// var firstName = prompt("Enter first name: ")
// var lastName = prompt("Enter last name: ")

// var fullName = firstName + " " + lastName

// alert("Hi " + fullName)

//Q2.

// var mobile = prompt("Enter your favorite mobile phone: ")
// var length = mobile.length

// document.write("My favorite phone is: " + mobile)
// document.write("<br>")
// document.write("Length of string: " + length)

//Q3.

// var country = "Pakistani"
// document.write("String: " + country)
// document.write("<br>")
// var searchLetter = "n"
// var index = country.indexOf("n")
// document.write("Index of 'n': " + index)

//Q4.

// var string = "Hello World"

// var lastIndex = string.lastIndexOf("l")

// document.write("String: "+ string)
// document.write("<br>")
// document.write("Last index 'l': " + lastIndex)

// Q5.

// var country = "Pakistani"
// document.write("String: " + country)
// document.write("<br>")
// var i = 3;

// char = country[i]

// document.write("Character at index 3: " +char)

// Q6.

// var firstName = prompt("Enter first name: ")
// var lastName = prompt("Enter last name: ")

// var fullName = firstName + " " + lastName

// alert("Hi " + fullName)


//Q7.

// var city = "Hyderabad"
// document.write("City: " + city)
// document.write("<br>")

// var newWord = city.replace("Hyder", "Islam")

// document.write("After replacement: "+ newWord)

//Q8.
// var message = "Ali and Sami are best friends. They play cricket and football together."

// document.write("Message: " +message)
// document.write("<br>")
// document.write("<br>")

// var newMessage = message.replace(/and/g, "&")

// document.write("After replacement: ", newMessage)

//Q9.

// var string = "472"
// var type1 = typeof(string)
// document.write("Value: " +string)
// document.write("<br>")
// document.write("Type: "+type1)
// document.write("<br>")

// var num = parseInt(string)
// var type2 = typeof(num)
// document.write("Value: " +num)
// document.write("<br>")
// document.write("Type: "+type2)

//Q10.
// var url = prompt("Enter url: ")
// document.write("URL: "+ url)
// document.write("<br>")

// var domain = url.slice(4)

// document.write("Domain: "+ domain)


//Q11.
// var userinput = prompt("Enter in lower case: ")
// document.write("User input: " + userinput)
// document.write("<br>")

// var cap = userinput.toUpperCase()

// document.write("Upper case: "+ cap)

//Q12.

// var userinput = prompt("Enter in capital case: ")
// document.write("User input: " + userinput.toUpperCase())
// document.write("<br>")
// var cap = userinput.toLowerCase()
// document.write("Lower case: "+ cap)

//Q13.

// var userInput = prompt("Enter a string:");
// var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + titleCase);

//

//Q14.

// var num = 35.36
// document.write("Number:" + num + "<br>" )
// var num2 = num.toString().replace(".","")

// document.write("Result:" +num2)

//Q15.

// var a = "3"
// var b = "3"
// x = a + b

// document.write("a is " + a + "<br>")
// document.write("b is " + a + "<br>")
// document.write("a + b is " + x)

//Q16.
// var a = "3"
// a = parseInt(a)

// var b = "3"
// b = parseInt(b)

// x = a - b 
// document.write("a is " + a + "<br>")
// document.write("b is " + b + "<br>")
// document.write("a - b is " + x)

//Q17.
// var isValid = false;
// var username;

// while (!isValid) {
//     username = prompt("Enter a username:");
//     isValid = true; 
//     for (var i = 0; i < username.length; i++) {
//         var charCode = username.charCodeAt(i);
//         if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
//             isValid = false;
//             break; 
//             }
//     }

//     if (!isValid) {
//         alert("Please enter a valid username without special symbols [@ . , !]");
//     }
// }

// alert("Username accepted: " + username);

//Q18.

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];

// var search = prompt("Welcome to ABC Bakery. What do you want to order, sir/madam?");

// search = search.toLowerCase();
// var found = false;

// for (var i = 0; i < a.length; i++) {
//     if (search === a[i]) {
//         document.write(search + " is available at index " + i + " in our bakery");
//         found = true;
//         break; // Exit the loop if the item is found
//     }
// }

// if (!found) {
//     document.write("This item is not available in our bakery.");
// }


//Q19.

// var firstString = prompt("Enter the first string:");
// var secondString = prompt("Enter the second string:");

// if (firstString === secondString) {
//         document.write("Both strings are equal.");
//     } 
//     else if (firstString > secondString) {
//         document.write(firstString + " is greater than" + " "+ secondString);
//     } 
//     else {
//         document.write( secondString+ " is greater than " +" "+ firstString);
//         }


//Q20.
// var isValid = false;
// var password = prompt("Enter password: ");
// var hasAlpha = false;
// var hasNum = false;

// var length = password.length;
// while (!isValid || !hasAlpha || !hasNum) {
//     if (length > 6) {
//         alert("Please Enter a valid Password");
//         break;
//     }
//     if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//         alert("Password cannot start with a number");
//         break;
//     }
//     for (var i = 0; i < length; i++) {
//         if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
//             hasNum = true;
//         } else if ((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {
//             hasAlpha = true;
//         }
//     }
//     if (hasAlpha && hasNum) {
//         isValid = true;
//         alert("Correct Password");
//         break;
//     }
// }

//Q21.

// var university = "University of Karachi"
// var length = university.length

// for (var i =0 ; i<length; i++){
//     char = university.charAt(i)
//     document.write(char + "<br>")
// }

//Q22.

// var userInput = prompt("Enter: ")
// var length = userInput.length

// var char = userInput.charAt(length-1)
// document.write(char)

//Q23.

// var userInput = prompt("Enter sentence: ");
// userInput = userInput.toLowerCase();
// var wordSearch = prompt("Enter the word to search for: ");
// wordSearch = wordSearch.toLowerCase();

// var count = 0;
// var words = userInput.split(" "); 

// for (var i = 0; i < words.length; i++) {
//     if (words[i] === wordSearch) {
//         count++;
//     }
// }

// document.write("The word '" + wordSearch + "' appears " + count + " times in the sentence.");

//Q24.

// var str = "Pakistan"
// var vowelCount = 0
// var consonants =  0
// var length = str.length

// for (var i = 0; i<length; i++){
//     if (str.charAt(i) == "a" | str.charAt(i) == "e" | str.charAt(i) == "i"| str.charAt(i) == "o"| str.charAt(i) == "u" ){

//         vowelCount++
//     }
//     else{
//         consonants++
//     }
// }

// document.write("Vowels: " + vowelCount + "<br>")
// document.write("Consonants: " +consonants)