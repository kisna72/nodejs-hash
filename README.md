## Running Code. 

1. Clone the repo. 
2. cd into the repo and run `npm install`
3. Run `npm start` to run the script. 
4. Run `npm test` to run all tests.

Assumtions / Notes:
1. I am faking blockchain with a linked list. 
2. Testing is done with Mocha with nodejs's assertion library
3. QR Code is generated by a random algorithm. 
4. QR Code supports case sensitive characters, and takes all numbers, a-z and A-Z. 
5. True randomnes is impossible; I am using crypto's random algorithm to generate random QR Codes, and Math.random to generate a number between 12-16. 
6. Hashing is done with SHA256 by utilising crypto module. 
7. Implementation of Linked List is incomplete. I only implemented pieces that I needed. 
8. Using crypto-promise library because ... who doesn't like promises.
9. Tested using Nodejs version 10.8. Requires transpiling to use in es5 or older environments. 
