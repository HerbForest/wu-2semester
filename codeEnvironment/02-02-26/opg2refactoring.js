const USERAGE = {
  youngAdult: age => age <= 25,
  adult: age => age > 25 && age < 50,
  senior: age => age >= 50,
};
const USER = {
  name: formattedName,
  email: formattedEmail,
  age: formattedAge,
}
const USERPRICE = {
  subscriptionPrice: basePrice,
};
const REGISTRATION = {
  registrationDate: new Date().toISOString()
}

const
function processUserData(userData) {
// Validate user data
if (!userData.name || userData.name.length < 2) {
console.log("Invalid name");
return false;
}
if (!userData.email || !userData.email.includes('@')) {
console.log("Invalid email");
return false;
}
if (!userData.age || userData.age < 18 || userData.age > 100) {
console.log("Invalid age");
return false;
}
// Format user data
let formattedName = userData.name.trim();
formattedName = formattedName.charAt(0).toUpperCase() +
formattedName.slice(1).toLowerCase();
let formattedEmail = userData.email.trim().toLowerCase();
// Calculate user category
let category;
if (userData.age < 25) {
category = 'Young Adult';
} else if (userData.age < 50) {
category = 'Adult';
} else {
category = 'Senior';
}
// Calculate subscription price
let basePrice = 100;
if (category === 'Young Adult') {
basePrice = basePrice * 0.8; // 20% discount
} else if (category === 'Senior') {
basePrice = basePrice * 0.7; // 30% discount
}
if (userData.isStudent) {
basePrice = basePrice * 0.9; // Additional 10% student discount
opgave2.md 2025-01-09
2 / 4
}
// Prepare final user object
const processedUser = {
name: formattedName,
email: formattedEmail,
age: userData.age,
category: category,
subscriptionPrice: basePrice,
registrationDate: new Date().toISOString()
};
console.log("User processed successfully");
return processedUser;
}
// Test the function
const testUser = {
name: " john doe ",
email: "JOHN@example.com ",
age: 22,
isStudent: true
};
console.log(processUserData(testUser));
