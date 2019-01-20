import React from "react";

export const names = [
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
  "Elmer Allen",
  "Elnora Bass",
  "Elnora Nichols",
  "Esther Byrd",
  "Esther Delgado",
  "Ethan Hicks",
  "Etta Wells",
  "Evelyn Davidson",
  "Frank Holloway",
  "Fred Reed",
  "Frederick Cunningham",
  "Frederick Welch",
  "Gene McKenzie",
  "Georgia Montgomery",
  "Gerald Ballard",
  "Gordon Lewis",
  "Gordon Wilson",
  "Harriett Fletcher",
  "Helen Love",
  "Helen Weaver",
  "Helena Cunningham",
  "Howard King",
  "Ian Rhodes",
  "Inez Holmes",
  "Isabel Owens",
  "Jared McDaniel",
  "Jason Anderson",
  "Jeffrey Hardy",
  "Jim Graham",
  "Jordan Sparks",
  "Jordan Wilkins",
  "Katharine Stewart",
  "Katherine Schwartz",
  "Kathryn Patton",
  "Keith Cross",
  "Lena McGuire",
  "Leo Hines",
  "Lewis Barton",
  "Lewis Webster",
  "Lizzie Peters",
  "Lois Bishop",
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

export function NamePlates({ names, filterValue }) {
  return (
    <div className="clearfix">
      {names.map(name => (
        <NamePlate name={name} filterValue={filterValue} key={name} />
      ))}
    </div>
  );
}

export function NamePlate({ name, filterValue }) {
  const matchesFilterAtIndex = name
    .toLowerCase()
    .indexOf(filterValue.toLowerCase());

  miningBitcoin(3);

  if (matchesFilterAtIndex >= 0) {
    return (
      <div className="nameplate">
        {name.substring(0, matchesFilterAtIndex)}
        <span className="highlight">
          {name.substring(
            matchesFilterAtIndex,
            matchesFilterAtIndex + filterValue.length
          )}
        </span>

        {name.substring(matchesFilterAtIndex + filterValue.length)}
      </div>
    );
  } else {
    return <div className="nameplate">{name}</div>;
  }
}

export function sendAnalyticsPing(value) {
  performance.mark("analytics-start");
  miningBitcoin(50);
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
