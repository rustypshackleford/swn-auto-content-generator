// Required modules
const fs = require('node:fs');
const prompt = require('prompt-sync')();
const { stdin: input, stdout: output } = require('node:process');

// Generative modules
const adventure = require('./generators/adventure');
const alien = require('./generators/alien');
const animal = require('./generators/animal');
const architecture = require('./generators/architecture');
const corporation = require('./generators/corporation');
const faction = require('./generators/faction');
const heresy = require('./generators/heresy');
const npc = require('./generators/npc');
const politicalParty = require('./generators/politicalParty');
const religion = require('./generators/religion');
const room = require('./generators/room');
const world = require('./generators/world');

console.log('Welcome to the interactive Stars Without Number Automatic Content Generator (SWN ACG). Upon exiting this program, all content generated during the session will be written to a file ' +  
  'for later review. Note: This file is overwritten with fresh content after each use. If you wish to retain previously generated content, copy the contents of the output file to a different ' + 
  'location before starting a new session.\n');

const stdin = process.stdin;

stdin.setEncoding( 'utf8' );

let content = 'Session Content\n\n';

const promptString = 'Please type the number associated with the type of content you wish to generate from the following list: \n' + 
                '\n1. Adventure\n2. Alien\n3. Animal\n4.Architecture\n5.Corporation\n6.Faction\n7.Heresy\n8.NPC\n9.Political Party\n10. Religion\n11. Room\n12. World\n13. Exit Program\n\n';

main();

function main() {
  printMenu();
}

function printMenu() {
  console.log(promptString);

  let answer = prompt('Your selection: ');

  answer = String(answer);

  switch(answer) {
    case '1':
      content += generateAdventure();
      break;
    case '2':
      content += generateAlien();
      break;
    case '3':
      content += generateAnimal();
      break;
    case '4':
      content += generateArchitecture();
      break;
    case '5':
      content += generateCorporation();
      break;
    case '6':
      content += generateFaction();
      break;
    case '7':
      content += generateHeresy();
      break;
    case '8':
      content += generateNPC();
      break;
    case '9':
      content += generatePoliticalParty();
      break;
    case '10':
      content += generateReligion();
      break;
    case '11':
      content += generateRoom();
      break;
    case '12':
      content += generateWorld();
      break;
    case '13':
      console.log('\nGenerating output file and exiting program...');
      console.log('WARNING: Any previous contents of the output file are being overwritten by this process.' + 
      ' If you wish to retain previously generated content, back it up elswhere before this step.');

      fs.writeFile('generateOutput.txt', content, (err) => {
        if(err) throw err;
        console.log('The file has been saved as generateOutput.txt!');
      });
      return;
      break;
    default:
      console.log('\n\nInvalid input detected, re-starting main menu...\n');
      return printMenu();
      break;
  }

  console.log('\n\nResult: \n\n' + content);

  let more = prompt('Would you like to continue? y/n: ');

  more = String(more);

  switch(more) {
    case '\u0079': 
      console.log('\n');
      return printMenu();
      break;
    case '\u0059':
      console.log('\n');
      return printMenu();
      break;
    case '\u006e': 
      console.log('\nGenerating output file and exiting program...');
      process.stdin.off('data', main);
      console.log('WARNING: Any previous contents of the output file are being overwritten by this process.' + 
      ' If you wish to retain previously generated content, back it up elswhere before this step.');

      fs.writeFile('generateOutput.txt', content, (err) => {
        if(err) throw err;
        console.log('The file has been saved as generateOutput.txt!');
      });
      break;
    case '\u004e':
      console.log('\nGenerating output file and exiting program...');
      process.stdin.off('data', main);
      console.log('WARNING: Any previous contents of the output file are being overwritten by this process.' + 
      ' If you wish to retain previously generated content, back it up elswhere before this step.');

      fs.writeFile('generateOutput.txt', content, (err) => {
        if(err) throw err;
        console.log('The file has been saved as generateOutput.txt!');
      });
      return;
      break;
    default:
      console.log('\n\nInvalid input detected, re-starting main menu...\n');
      return printMenu();
      return;
      break;
  }
}

function generateAdventure() {
  return 'Adventure: ' + adventure() + '\n\n';
}

function generateAlien() {
  return 'Alien: ' + alien() + '\n\n';
}

function generateAnimal() {
  return 'Animal: ' + animal() + '\n\n';
}

function generateArchitecture() {
  return 'Architecture: ' + architecture() + '\n\n';
}

function generateCorporation() {
  return 'Corporation: ' + corporation() + '\n\n';
}

function generateFaction() {
  return 'Faction: ' + faction() + '\n\n';
}

function generateHeresy() {
  return 'Heresy: ' + heresy() + '\n\n';
}

function generateNPC() {
  return 'NPC: ' + npc() + '\n\n';
}

function generatePoliticalParty() {
  return 'Political Party: ' + politicalParty() + '\n\n';
}

function generateReligion() {
  return 'Religion: ' + religion() + '\n\n';
}

function generateRoom() {
  return 'Room: ' + room() + '\n\n';
}

function generateWorld() {
  return 'World: ' + world() + '\n\n';
}