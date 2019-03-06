import React from "react";

export function NameList({ searchValue }) {
  return (
    <div className="clearfix">
      {names.map(name => (
        <Name name={name} searchValue={searchValue} key={name} />
      ))}
    </div>
  );
}

export function Name({ name, searchValue }) {
  const matchesFilterAtIndex = name
    .toLowerCase()
    .indexOf(searchValue.toLowerCase());

  miningBitcoin(2);

  if (matchesFilterAtIndex >= 0 && searchValue !== "") {
    return (
      <div className="name">
        {name.substring(0, matchesFilterAtIndex)}
        <span className="highlight">
          {name.substring(
            matchesFilterAtIndex,
            matchesFilterAtIndex + searchValue.length
          )}
        </span>

        {name.substring(matchesFilterAtIndex + searchValue.length)}
      </div>
    );
  } else {
    return <div className="name">{name}</div>;
  }
}

export function sendAnalyticsPing(value) {
  performance.mark("analytics-start");
  miningBitcoin(25);
  performance.mark("analytics-end");
  performance.measure(
    "Analytics: " + value,
    "analytics-start",
    "analytics-end"
  );
}

function miningBitcoin(ms) {
  let now = Date.now();
  while (Date.now() < now + ms) {
    // noop
  }
}

const names = [
  "Ada Moreno",
  "Ada Stewart",
  "Adele Valdez",
  "Adeline Knight",
  "Agnes Newman",
  "Alfred Stephens",
  "Allie Harris",
  "Andre Owen",
  "Andrew Clark",
  "Angel Murray",
  "Arthur Osborne",
  "Arthur Woods",
  "Barbara Holt",
  "Billy Baker",
  "Brian Vaughn",
  "Calvin Edwards",
  "Carl Pierce",
  "Charles Sanchez",
  "Charlie Hicks",
  "Charlie Matthews",
  "Chase Ruiz",
  "Chester Chandler",
  "Christopher Marsh",
  "Cordelia Brock",
  "Corey Gonzalez",
  "Cornelia Gordon",
  "Cory Lane",
  "Daisy Pena",
  "Dan Abramov",
  "Dollie Wilkerson",
  "Dominic Gannaway",
  "Dorothy Singleton",
  "Eddie Horton",
  "Lottie Harper",
  "Louis McBride",
  "Mabel Daniels",
  "Mabelle Bowman",
  "Martha Moreno",
  "Martin Simpson",
  "Mary Powers",
  "Mary Snyder",
  "Matthew Collier",
  "Maurice Myers",
  "Myra Jennings",
  "Myra Stephens",
  "Nellie Potter",
  "Nora Cannon",
  "Ola Bryant",
  "Paul Coleman",
  "Pearl Moss",
  "Phoebe Underwood",
  "Rachel May",
  "Sebastian Markbåge",
  "Shawn Lloyd",
  "Shawn Lynch",
  "Sophie Alpert",
  "Stella Lane",
  "Steve Byrd",
  "Steve Schmidt",
  "Sunil Pai",
  "Teresa Doyle",
  "Timothy Gray",
  "Timothy Harvey",
  "Todd Stewart",
  "Todd Washington"
];
