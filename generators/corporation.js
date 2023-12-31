/**
 * Copyright (c) 2017 Steve Simenic <orffen@orffenspace.com>
 * 
 * This file is part of the SWN Toolbox.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var names = [
    "Ad Astra",
    "Colonial",
    "Compass",
    "Daybreak",
    "Frontier",
    "Guo Yin",
    "Highbeam",
    "Imani",
    "Magnus",
    "Meteor",
    "Neogen",
    "New Dawn",
    "Omnitech",
    "Outertech",
    "Overwatch",
    "Panstellar",
    "Shogun",
    "Silverlight",
    "Spiker",
    "Stella",
    "Striker",
    "Sunbeam",
    "Terra Prime",
    "Wayfarer",
    "West Wind"
];
var organizations = [
    "Alliance",
    "Association",
    "Band",
    "Circle",
    "Clan",
    "Combine",
    "Company",
    "Cooperative",
    "Corporation",
    "Enterprises",
    "Faction",
    "Group",
    "Megacorp",
    "Multistellar",
    "Organization",
    "Outfit",
    "Pact",
    "Partnership",
    "Ring",
    "Society",
    "Sodality",
    "Syndicate",
    "Union",
    "Unity",
    "Zaibatsu"
];
var businesses = [
    "Aeronautics",
    "Agriculture",
    "Art",
    "Assassination",
    "Asteroid Mining",
    "Astrotech",
    "Biotech",
    "Bootlegging",
    "Computer Hardware",
    "Construction",
    "Cybernetics",
    "Electronics",
    "Energy Weapons",
    "Entertainment",
    "Espionage",
    "Exploration",
    "Fishing",
    "Fuel Refining",
    "Gambling",
    "Gemstones",
    "Gengineering",
    "Grav Vehicles",
    "Heavy Weapons",
    "Ideology",
    "Illicit Drugs",
    "Journalism",
    "Law Enforcement",
    "Liquor",
    "Livestock",
    "Maltech",
    "Pharmaceuticals",
    "Piracy",
    "Planetary Mining",
    "Plastics",
    "Pretech",
    "Prisons",
    "Programming",
    "Projectile Guns",
    "Prostitution",
    "Psionics",
    "Psitech",
    "Robotics",
    "Security",
    "Shipyards",
    "Snacks",
    "Telcoms",
    "Transport",
    "Xenotech"
];
var reputations = [
    "Reckless with the lives of their employees",
    "Reckless with the lives of their employees",
    "Reckless with the lives of their employees",
    "Reckless with the lives of their employees",
    "Reckless with the lives of their employees",
    "Have a dark secret about their board of directors",
    "Have a dark secret about their board of directors",
    "Have a dark secret about their board of directors",
    "Have a dark secret about their board of directors",
    "Have a dark secret about their board of directors",
    "Notoriously xenophobic towards aliens",
    "Notoriously xenophobic towards aliens",
    "Notoriously xenophobic towards aliens",
    "Notoriously xenophobic towards aliens",
    "Notoriously xenophobic towards aliens",
    "Lost much money to an embezzler who evaded arrest",
    "Lost much money to an embezzler who evaded arrest",
    "Lost much money to an embezzler who evaded arrest",
    "Lost much money to an embezzler who evaded arrest",
    "Lost much money to an embezzler who evaded arrest",
    "Reliable and trustworthy goods",
    "Reliable and trustworthy goods",
    "Reliable and trustworthy goods",
    "Reliable and trustworthy goods",
    "Reliable and trustworthy goods",
    "Reliable and trustworthy goods",
    "Stole a lot of R&D from a rival corporation",
    "Stole a lot of R&D from a rival corporation",
    "Stole a lot of R&D from a rival corporation",
    "Stole a lot of R&D from a rival corporation",
    "Stole a lot of R&D from a rival corporation",
    "They have high-level political connections",
    "They have high-level political connections",
    "They have high-level political connections",
    "They have high-level political connections",
    "They have high-level political connections",
    "They have high-level political connections",
    "Rumored cover-up of a massive industrial accident",
    "Rumored cover-up of a massive industrial accident",
    "Rumored cover-up of a massive industrial accident",
    "Rumored cover-up of a massive industrial accident",
    "Rumored cover-up of a massive industrial accident",
    "Rumored cover-up of a massive industrial accident",
    "Stodgy and very conservative in their business plans",
    "Stodgy and very conservative in their business plans",
    "Stodgy and very conservative in their business plans",
    "Stodgy and very conservative in their business plans",
    "Stodgy and very conservative in their business plans",
    "Stodgy and very conservative in their business plans",
    "The company's owner is dangerously insane",
    "The company's owner is dangerously insane",
    "The company's owner is dangerously insane",
    "The company's owner is dangerously insane",
    "The company's owner is dangerously insane",
    "The company's owner is dangerously insane",
    "Rumored ties to a eugenics cult",
    "Rumored ties to a eugenics cult",
    "Rumored ties to a eugenics cult",
    "Rumored ties to a eugenics cult",
    "Rumored ties to a eugenics cult",
    "Said to have a cache of pretech equipment",
    "Said to have a cache of pretech equipment",
    "Said to have a cache of pretech equipment",
    "Said to have a cache of pretech equipment",
    "Said to have a cache of pretech equipment",
    "Said to have a cache of pretech equipment",
    "Possibly teetering on the edge of bankruptcy",
    "Possibly teetering on the edge of bankruptcy",
    "Possibly teetering on the edge of bankruptcy",
    "Possibly teetering on the edge of bankruptcy",
    "Possibly teetering on the edge of bankruptcy",
    "Possibly teetering on the edge of bankruptcy",
    "Front for a planetary government's espionage arm",
    "Front for a planetary government's espionage arm",
    "Front for a planetary government's espionage arm",
    "Front for a planetary government's espionage arm",
    "Front for a planetary government's espionage arm",
    "Secretly run by a psychic cabal",
    "Secretly run by a psychic cabal",
    "Secretly run by a psychic cabal",
    "Secretly run by a psychic cabal",
    "Secretly run by a psychic cabal",
    "Secretly run by hostile aliens",
    "Secretly run by hostile aliens",
    "Secretly run by hostile aliens",
    "Secretly run by hostile aliens",
    "Secretly run by hostile aliens",
    "Secretly run by an unbraked AI",
    "Secretly run by an unbraked AI",
    "Secretly run by an unbraked AI",
    "Secretly run by an unbraked AI",
    "They've turned over a new leaf with the new CEO",
    "They've turned over a new leaf with the new CEO",
    "They've turned over a new leaf with the new CEO",
    "Deeply entangled with the planetary underworld",
    "Deeply entangled with the planetary underworld"
];

function corporation() {
    var name = names[Math.floor(Math.random() * names.length)] + " " + organizations[Math.floor(Math.random() * organizations.length)];
    var business = businesses[Math.floor(Math.random() * businesses.length)] + ", " + businesses[Math.floor(Math.random() * businesses.length)];
    var reputation = reputations[Math.floor(Math.random() * reputations.length)];
    return 'Corporation Name: ' + name + ', Business Area: ' + business + ', Reputation: ' + reputation;
}

module.exports = corporation;