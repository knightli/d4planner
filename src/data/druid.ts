const data = [
  { name: "Basic" },
  { name: "Spirit" },
  { name: "Defensive" },
  { name: "Companion" },
  { name: "Wrath" },
  { name: "Ultimate" },
  { name: "Capstone" },
  {
    name: "Earthspike",
    description:
      "Cooldown: {#} seconds\nGenerate Spirit: {#}\nLucky Hit Chance: {#}%\nSunder the earth, impaling the first enemy hit for {#}% damage.",
    maxPoints: 5,
    values: ["", "8", "25", "16.8"],
  },
  {
    name: "Enhanced Earthspike",
    description: "Earthspike has an {#}% chance to Stun for {#} seconds.",
    maxPoints: 1,
    values: ["10", "2.5"],
  },
  {
    name: "Wild Earthspike",
    description:
      "Summon a second Earthspike when hitting an Immobilized or Stunned enemy.",
    maxPoints: 1,
  },
  {
    name: "Fierce Earthspike",
    description:
      "Fortify for {#}% of your Base Life ({#}) whenever Earth Spike damages enemies who are Stunned, Immobilized, or Knocked Back.",
    maxPoints: 1,
    values: ["0.96", ""],
  },
  {
    name: "Maul",
    description:
      "Generate Spirit: {#}\nLucky Hit Chance: {#}%\nShapeshift into a Werebear and maul enemies in front of you, dealing {#}% damage.",
    maxPoints: 5,
    values: ["11", "33", "21"],
  },
  {
    name: "Enhanced Maul",
    description:
      "If an enemy is hit by Maul, then Fortify for {#}% Base Life ({#}).",
    maxPoints: 1,
    values: ["0.64", ""],
  },
  {
    name: "Wild Maul",
    description:
      "Maul has a {#}% chance to Knock Down enemies for {#} seconds.",
    maxPoints: 1,
    values: ["15", "2"],
  },
  {
    name: "Fierce Maul",
    description: "Increases the range and radius of Maul by {#}%.",
    maxPoints: 1,
    values: ["4"],
  },
  {
    name: "Wind Shear",
    description:
      "Generate Spirit: {#}\nLucky Hit Chance: {#}%\nConjure a piercing blade of wind, dealing {#}% damage.",
    maxPoints: 5,
    values: ["12", "33", "17.85"],
  },
  {
    name: "Enhanced Wind Shear",
    description:
      "Wind Shear has a {#}% chance to make enemies Vulnerable for {#} seconds.",
    maxPoints: 1,
    values: ["35", "4"],
  },
  {
    name: "Fierce Wind Shear",
    description:
      "Each enemy hit by Wind Shear increases your movement speed by {#}% for {#} seconds, up to {#}%.",
    maxPoints: 1,
    values: ["5", "3", "20"],
  },
  {
    name: "Wild Wind Shear",
    description:
      "Wind Shear grants {#} additional Spirit for each enemy hit beyond the first.",
    maxPoints: 1,
    values: [""],
  },
  {
    name: "Storm Strike",
    description:
      "Generate Spirit: {#}\nLucky Hit Chance: {#}%\nElectricity gathers around your weapon, dealing {#}% damage to your target and chaining to up to {#} surrounding enemies, dealing {#}% less damage each time it chains.\n\nDealing damage with Storm Strike reduces your damage taken by {#}% for {#} seconds.",
    maxPoints: 5,
    values: ["15", "25", "28.35", "", "", "25", "3"],
  },
  {
    name: "Enhanced Storm Strike",
    description:
      "Storm Strike has a {#}% chance to Immobilize all enemies hit for {#} seconds.",
    maxPoints: 1,
    values: ["", ""],
  },
  {
    name: "Fierce Storm Strike",
    description:
      "Storm Strike has a {#}% chance to make enemies Vulnerable for {#} seconds.",
    maxPoints: 1,
    values: ["50", "3"],
  },
  {
    name: "Wild Storm Strike",
    description: "Storm Strike chains to {#} additional targets.",
    maxPoints: 1,
    values: [""],
  },
  {
    name: "Claw",
    description:
      "Generate Spirit: {#}\nLucky Hit Chance: {#}%\nShapeshift into a Werewolf and claw at an enemy for {#}% damage.",
    maxPoints: 5,
    values: ["9", "50", "21"],
  },
  {
    name: "Enhanced Claw",
    description: "Claw's Attack Speed is increased by +{#}%.",
    maxPoints: 1,
    values: ["10"],
  },
  {
    name: "Fierce Claw",
    description: "Claw poisons enemies for {#}% damage over {#} seconds.",
    maxPoints: 1,
    values: ["10.5", "3"],
  },
  {
    name: "Wild Claw",
    description:
      "Claw has an additional +{#}% Critical Strike Chance and deals x{#}% increased Critical Strike Damage.",
    maxPoints: 1,
    values: ["10", "15"],
  },
  {
    name: "Landslide",
    description:
      "Spirit Cost: {#}\nLucky Hit Chance: {#}%\nCrush enemies between 3 pillars of earth, dealing up to {#}% damage.",
    maxPoints: 5,
    values: ["30", "20", "78.75"],
  },
  {
    name: "Enhanced Landslide",
    description:
      "Enemies hit by all 3 Landslide pillars have a {#}% chance to be Immobilized for {#} seconds by the final hit.",
    maxPoints: 1,
    values: ["25", "3"],
  },
  {
    name: "Raging Landslide",
    description:
      "For {#} seconds after Landslide is cast, the Spirit cost is reduced by {#}.",
    maxPoints: 1,
    values: ["2", "10"],
  },
  {
    name: "Primal Landslide",
    description:
      "Landslide has a {#}% increased Critical Strike Chance and deals x{#}% increased Critical Strike Damage against enemies who are Stunned, Immobilized or Knocked Back.",
    maxPoints: 1,
    values: ["10", "30"],
  },
  {
    name: "Pulverize",
    description:
      "Spirit Cost: {#}\nLucky Hit Chance: {#}%\nShapeshift into a Werebear and slam the ground, dealing {#}% damage to surrounding enemies.",
    maxPoints: 5,
    values: ["35", "33", "52.5"],
  },
  {
    name: "Enhanced Pulverize",
    description:
      "Pulverize deals x{#}% increased bonus damage when hitting {#} or more enemies.",
    maxPoints: 1,
    values: ["20", "2"],
  },
  {
    name: "Primal Pulverize",
    description:
      "Enemies hit with Pulverize deal {#}% reduced damage for {#} seconds.",
    maxPoints: 1,
    values: ["15", "4"],
  },
  {
    name: "Raging Pulverize",
    description:
      "Pulverize has a {#}% chance to Immobilize all enemies hit for {#} seconds.",
    maxPoints: 1,
    values: ["20", "3"],
  },
  {
    name: "Tornado",
    description:
      "Spirit Cost: {#}\nLucky Hit Chance: {#}%\nConjure a swirling tornado that deals {#}% damage.",
    maxPoints: 5,
    values: ["40", "33", "105"],
  },
  {
    name: "Enhanced Tornado",
    description:
      "Each time you cast Tornado, you have a {#}% chance to spawn an additional Tornado.",
    maxPoints: 1,
    values: ["20"],
  },
  {
    name: "Raging Tornado",
    description:
      "Each time an enemy is damaged by a Tornado, they take x{#}% increased damage from Tornado for {#} seconds, stacking up to x{#}% increased damage.",
    maxPoints: 1,
    values: ["5", "3", "15"],
  },
  {
    name: "Primal Tornado",
    description:
      "Enemies damaged by Tornado are Slowed by {#}% for {#} seconds, stacking up to {#}%.",
    maxPoints: 1,
    values: ["8", "3", ""],
  },
  {
    name: "Shred",
    description:
      "Spirit Cost: {#}\nLucky Hit Chance: {#}%\nShapeshift into a Werewolf and perform a 3-combo attack.\n\n1st Attack: Dash towards the target and deal {#}% damage.\n2nd Attack: Deal {#}% damage.\n3rd Attack: Perform a larger finishing move dealing {#}% damage.",
    maxPoints: 5,
    values: ["35", "20", "", "", ""],
  },
  {
    name: "Enhanced Shred",
    description:
      "Shred gains {#}% attack speed and heals for {#}% of your maximum Life if an enemy is struck.",
    maxPoints: 1,
    values: ["", "2"],
  },
  {
    name: "Raging Shred",
    description:
      "Shred's third combo attack is larger and applies a potent poison to enemies hit dealing an additional {#}% damage over {#} seconds.",
    maxPoints: 1,
    values: ["", ""],
  },
  {
    name: "Primal Shred",
    description:
      "Shred's second combo attack also performs a dash. In addition, Shred's Critical Strike Chance is increased by +{#}% for the first two combo attacks.",
    maxPoints: 1,
    values: [""],
  },
  {
    name: "Lightning Storm",
    description:
      "Spirit Cost: {#} per strike\nLucky Hit Chance: {#}%\nConjure a growing lightning storm that deals {#}% damage per strike and increases the number of strikes the longer it is channeled up to a maximum of {#}.",
    maxPoints: 5,
    values: ["15", "15", "26.25", "5"],
  },
  {
    name: "Enhanced Lightning Storm",
    description:
      "The size of your Lightning Storm is preserved for {#} seconds after channeling.",
    maxPoints: 1,
    values: ["4"],
  },
  {
    name: "Primal Lightning Storm",
    description:
      "Lightning Storm has a {#}% chance to Immobilize enemies hit for {#} seconds.",
    maxPoints: 1,
    values: ["8", "3"],
  },
  {
    name: "Raging Lightning Storm",
    description: "Lightning Storm gains 1 additional lightning strike.",
    maxPoints: 1,
  },
  {
    name: "Heart of the Wild",
    description: "Maximum Spirit is increased by {#}.",
    maxPoints: 3,
    values: ["{3/6/9}"],
  },
  {
    name: "Wild Impulses",
    description:
      "Your Core skills cost x{#}% more Spirit but deal x{#}% increased damage.",
    maxPoints: 3,
    values: ["{5/10/15}", "{10/20/30}"],
  },
  {
    name: "Abundance",
    description: "Basic skills generate {#}% more Spirit.",
    maxPoints: 3,
    values: ["{5/10/15}"],
  },
  {
    name: "Predatory Instinct",
    description:
      "Critical Strike Chance against Close enemies is increased by {#}%.",
    maxPoints: 3,
    values: ["{3/6/9}"],
  },
  {
    name: "Iron Fur",
    description:
      "While in Werebear form, damage reduction is increased by {#}%.\n\nThis bonus persists for {#} seconds after leaving Werebear form.",
    maxPoints: 3,
    values: ["{3/6/9}", "3"],
  },
  {
    name: "Digitigrade Gait",
    description:
      "While in Werewolf form, your Movement Speed is increased by {#}%.\n\nThis bonus persists for {#} seconds after leaving Werewolf form.",
    maxPoints: 3,
    values: ["{4/8/12}", "3"],
  },
  {
    name: "Earthen Bulwark",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nRocks surround you for {#} seconds, granting a Barrier that absorbs {#}% of your Base Life ({#}) in damage.",
    maxPoints: 5,
    values: ["16.0", "50", "3", "10", ""],
  },
  {
    name: "Enhanced Earthen Bulwark",
    description: "Earthen Bulwark makes you Unstoppable while active.",
    maxPoints: 1,
  },
  {
    name: "Innate Earthen Bulwark",
    description:
      "Upon expiration, Earthen Bulwark shatters, dealing {#}% of the remaining Barrier amount to surrounding enemies.",
    maxPoints: 1,
    values: ["300"],
  },
  {
    name: "Preserving Earthen Bulwark",
    description:
      "Casting Earthen Bulwark grants {#}% Base Life ({#}) as Fortify.",
    maxPoints: 1,
    values: ["7.2", ""],
  },
  {
    name: "Debilitating Roar",
    description:
      "Cooldown: {#} seconds\nShapeshift into a Werebear and bellow a mighty roar, reducing damage dealt of Nearby enemies by {#}% for {#} seconds.",
    maxPoints: 5,
    values: ["22.0", "50", "4"],
  },
  {
    name: "Enhanced Debilitating Roar",
    description:
      "Debilitating Roar also Fortifies you for {#}% Base Life ({#}).",
    maxPoints: 1,
    values: ["8.8", ""],
  },
  {
    name: "Preserving Debilitating Roar",
    description:
      "Debilitating Roar also heals you for {#}% of your maximum Life each second for its duration.",
    maxPoints: 1,
    values: ["4"],
  },
  {
    name: "Innate Debilitating Roar",
    description:
      "Debilitating Roar also slows enemies by {#}% for its duration.",
    maxPoints: 1,
    values: ["40"],
  },
  {
    name: "Ancestral Fortitude",
    description: "Increase your non-physical resistances by {#}%.",
    maxPoints: 3,
    values: [""],
  },
  {
    name: "Vigilance",
    description:
      "You take {#}% reduced damage for {#} seconds after using a Defensive skill.",
    maxPoints: 3,
    values: ["", ""],
  },
  {
    name: "Blood Howl",
    description:
      "Cooldown: {#} seconds\nShapeshift into a Werewolf and howl furiously, restoring {#}% Life.",
    maxPoints: 5,
    values: ["15.0", "20.0"],
  },
  {
    name: "Enhanced Blood Howl",
    description: "Kills reduce the cooldown of Blood Howl by {#} second.",
    maxPoints: 1,
    values: ["1"],
  },
  {
    name: "Innate Blood Howl",
    description: "Blood Howl also generates {#} Spirit.",
    maxPoints: 1,
    values: ["20"],
  },
  {
    name: "Preserving Blood Howl",
    description:
      "Blood Howl also increases your Attack Speed by {#}% for {#} seconds.",
    maxPoints: 1,
    values: ["15", "4"],
  },
  {
    name: "Cyclone Armor",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nPassive: Powerful winds surround you, granting {#}% non-Physical damage reduction.\n\nActive: The winds rapidly expand, Knocking Back enemies and dealing {#}% damage.",
    maxPoints: 5,
    values: ["15.0", "25", "20", "15.75"],
  },
  {
    name: "Enhanced Cyclone Armor",
    description:
      "Enemies who are Knocked Back by Cyclone Armor are also Slowed by {#}% for {#} seconds.",
    maxPoints: 1,
    values: ["40", "3"],
  },
  {
    name: "Preserving Cyclone Armor",
    description:
      "Every {#} seconds, Cyclone Armor intensifies, reducing the next instance of non-Physical damage by an additional {#}%.",
    maxPoints: 1,
    values: ["10", "40"],
  },
  {
    name: "Innate Cyclone Armor",
    description:
      "Enemies Knocked Back by Cyclone Armor become Vulnerable for 2 seconds.",
    maxPoints: 1,
  },
  {
    name: "Ravens",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nActive: The target area is swarmed with ravens, dealing {#}% damage over {#} seconds.",
    maxPoints: 5,
    values: ["25.0", "33", "89.25", "6"],
  },
  {
    name: "Enhanced Ravens",
    description:
      "Passive: Ravens fly above you and periodically attack your enemies for {#}% damage every {#} seconds.",
    maxPoints: 1,
    values: ["13.85", "5"],
  },
  {
    name: "Brutal Ravens",
    description:
      "{#} additional Ravens appear when they periodically attack enemies.",
    maxPoints: 1,
    values: ["2"],
  },
  {
    name: "Ferocious Ravens",
    description:
      "Enemies inside the swarm of Ravens when it is activated become Vulnerable for {#} seconds.",
    maxPoints: 1,
    values: ["3"],
  },
  {
    name: "Call of the Wild",
    description:
      "You deal x{#}% increased Critical Strike Damage against your Wolves' focus target.\n\nRaven attacks deal x{#}% increased damage to Vulnerable enemies.\n\nVine Creeper's poison duration is increased by {#}%.",
    maxPoints: 3,
    values: ["{8/16/24}", "{8/16/24}", "{8/16/24}"],
  },
  {
    name: "Vine Creeper",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nPassive: A vine creeper periodically emerges from the ground every {#} seconds and poisons an enemy in the area for {#}% damage over {#} seconds.\n\nActive: Vines strangle all surrounding enemies, Immobilizing them for {#} seconds and poisoning them for {#}% damage over {#} seconds.",
    maxPoints: 5,
    values: ["20.0", "40", "7", "37.8", "6", "2", "31.5", "2"],
  },
  {
    name: "Enhanced Vine Creeper",
    description:
      "Vine Creeper's Immobilize duration is increased by {#} second.",
    maxPoints: 1,
    values: ["1"],
  },
  {
    name: "Ferocious Vine Creeper",
    description:
      "Vine Creeper's active poison duration is increased by {#} seconds.",
    maxPoints: 1,
    values: ["3"],
  },
  {
    name: "Brutal Vine Creeper",
    description:
      "Your chance to Critically Strike is increased by +{#}% against enemies strangled by Vine Creeper.",
    maxPoints: 1,
    values: ["20"],
  },
  {
    name: "Wolves",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nPassive: Summon {#} wolf companions that bite enemies for {#}% damage.\n\nActive: Direct the wolves to focus an enemy, leaping to them and striking for {#}% damage.",
    maxPoints: 5,
    values: ["14.0", "50", "2", "8.19", "36.75"],
  },
  {
    name: "Enhanced Wolves",
    description:
      "Wolves deal x{#}% increased damage to Immobilized, Stunned, Slowed, or poisoned enemies.",
    maxPoints: 1,
    values: ["20"],
  },
  {
    name: "Ferocious Wolves",
    description:
      "You deal x{#}% increased damage to your Wolves' focus target.",
    maxPoints: 1,
    values: ["10"],
  },
  {
    name: "Brutal Wolves",
    description:
      "Your Wolves' first attack against a focused enemy makes them Vulnerable for {#} seconds.",
    maxPoints: 1,
    values: ["2"],
  },
  {
    name: "Nature's Reach",
    description:
      "Deal x{#}% increased damage to Distant enemies.  Double this bonus if they are also Slowed, Stunned, Immobilized, or Knocked Back.",
    maxPoints: 3,
    values: ["{3/6/9}"],
  },
  {
    name: "Clarity",
    description: "Gain {#} Spirit when transforming into Human form.",
    maxPoints: 3,
    values: ["{2/4/6}"],
  },
  {
    name: "Elemental Exposure",
    description:
      "Lucky Hit: Your Storm skills have up to a {#}% chance to make enemies Vulnerable for {#} seconds.",
    maxPoints: 3,
    values: ["{20/40/60}", "1"],
  },
  {
    name: "Charged Atmosphere",
    description:
      "Every {#} seconds, a Lightning Strike hits a Nearby enemy dealing {#}% damage.",
    maxPoints: 3,
    values: ["{18/13.5/10}", "47.25"],
  },
  {
    name: "Electric Shock",
    description:
      "Lucky Hit: Dealing Lightning damage to enemies has a {#}% chance to Immobilize them for {#} seconds.\n\nIf the target is already Immobilized, the Lightning damage dealt to them is increased by x{#}% instead.",
    maxPoints: 3,
    values: ["{5/10/15}", "3", ""],
  },
  {
    name: "Bad Omen",
    description:
      "Lucky Hit: Up to a {#}% chance when dealing damage to a Vulnerable, Immobilized or Stunned enemy that a Lightning Strike also hits dealing {#}% damage.",
    maxPoints: 3,
    values: ["{10/20/30}", "57.25"],
  },
  {
    name: "Endless Tempest",
    description: "Increase the duration of Hurricane and Cataclysm by {#}%.",
    maxPoints: 3,
    values: ["{5/10/15}"],
  },
  {
    name: "Boulder",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nUnearth a large rolling boulder that Knocks Back and crushes enemies, dealing {#}% damage with each hit.",
    maxPoints: 5,
    values: ["10.0", "20", "34.65"],
  },
  {
    name: "Enhanced Boulder",
    description:
      "Enemies are slowed by {#}% for {#} seconds after being hit with Boulder.",
    maxPoints: 1,
    values: ["30", "2"],
  },
  {
    name: "Natural Boulder",
    description:
      "Your Basic skills grant {#}% bonus Spirit while damaging enemies who are Knocked Back by Boulder.",
    maxPoints: 1,
    values: ["75"],
  },
  {
    name: "Savage Boulder",
    description:
      "The first enemy damaged by Boulder is made Vulnerable for {#} seconds.",
    maxPoints: 1,
    values: ["3"],
  },
  {
    name: "Trample",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nShapeshift into a Werebear and charge forward, dealing {#}% damage and Knocking Back enemies.\n\nEnemies who are Knocked Back into terrain take an additional {#}% damage and are stunned for {#} seconds.",
    maxPoints: 5,
    values: ["14.0", "33", "26.25", "47.25", "3"],
  },
  {
    name: "Enhanced Trample",
    description: "You are Unstoppable during Trample.",
    maxPoints: 1,
  },
  {
    name: "Natural Trample",
    description: "Casting Trample grants {#}% Base Life ({#}) as Fortify.",
    maxPoints: 1,
    values: ["6", ""],
  },
  {
    name: "Savage Trample",
    description: "Casting Trample grants {#} Spirit.",
    maxPoints: 1,
    values: ["20"],
  },
  {
    name: "Crushing Earth",
    description:
      "Earth skills deal x{#}% increased damage to Slowed, Stunned, Immobilized or Knocked Back enemies.",
    maxPoints: 3,
    values: ["{5/10/15}"],
  },
  {
    name: "Safeguard",
    description:
      "Critical Strikes with Earth skills Fortify you for {#}% Base Life ({#}).",
    maxPoints: 3,
    values: ["0.88", ""],
  },
  {
    name: "Stone Guard",
    description:
      "While Fortified over {#}% of your Maximum Life, your Earth skills deal  x{#}% increased damage.",
    maxPoints: 3,
    values: ["50", "{4/8/12}"],
  },
  {
    name: "Hurricane",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nForm a hurricane around you that deals {#}% damage to surrounding enemies over {#} seconds.",
    maxPoints: 5,
    values: ["20.0", "33", "102.37", "8"],
  },
  {
    name: "Enhanced Hurricane",
    description:
      "Enemies who are damaged by Hurricane are Slowed by {#}% for {#} seconds.",
    maxPoints: 1,
    values: ["25", "2"],
  },
  {
    name: "Natural Hurricane",
    description:
      "Hurricane has a {#}% chance to make enemies Vulnerable for {#} seconds.",
    maxPoints: 1,
    values: ["15", "3"],
  },
  {
    name: "Savage Hurricane",
    description:
      "Enemies who are in Hurricane's radius have their damage reduced by {#}%.",
    maxPoints: 1,
    values: ["20"],
  },
  {
    name: "Rabies",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nShapeshift into a Werewolf and perform an infectious bite on the target dealing {#}% damage, and an additional {#}% damage over {#} seconds.\n\nInfected enemies spread Rabies to other surrounding targets.",
    maxPoints: 5,
    values: ["12.0", "50", "29.4", "55.65", "6"],
  },
  {
    name: "Enhanced Rabies",
    description:
      "Once Rabies infects {#} targets, it deals x{#}% increased Poison damage against all targets.",
    maxPoints: 1,
    values: ["4", "30"],
  },
  {
    name: "Natural Rabies",
    description:
      "The initial bite of Rabies heals you for {#}% of your maximum Life.",
    maxPoints: 1,
    values: ["10"],
  },
  {
    name: "Savage Rabies",
    description:
      "The initial bite of Rabies deals x{#}% increased damage against enemies who are Immobilized or Stunned.",
    maxPoints: 1,
    values: ["100"],
  },
  {
    name: "Mending",
    description:
      "While in Werebear form, you receive {#}% additional healing from all sources.",
    maxPoints: 3,
    values: ["{5/10/15}"],
  },
  {
    name: "Provocation",
    description:
      "Your next Werebear skill every {#} seconds is guaranteed to Overpower.",
    maxPoints: 3,
    values: ["30"],
  },
  {
    name: "Toxic Claws",
    description:
      "Critical strikes with Werewolf skills deal {#}% of their base damage as Poison damage over {#} seconds.",
    maxPoints: 3,
    values: ["{8/16/24}", "4"],
  },
  {
    name: "Neurotoxin",
    description: "Poisoned enemies are slowed by {#}%.",
    maxPoints: 3,
    values: ["{8/16/24}"],
  },
  {
    name: "Grizzly Rage",
    description:
      "Cooldown: {#} seconds\nShapeshift into  Dire Werebear for {#} seconds gaining x{#}% bonus damage and x{#}% damage reduction. Damage bonus is increased by +{#}% each second while in this form.\n\nKills extend the duration by {#} second up to +{#} additional seconds.",
    maxPoints: 1,
    values: ["60.0", "10", "20", "20", "3", "1", "10"],
  },
  {
    name: "Prime Grizzly Rage",
    description: "You are Unstoppable while Grizzly Rage is active.",
    maxPoints: 1,
  },
  {
    name: "Supreme Grizzly Rage",
    description:
      "Gain {#}% Base Life ({#}) as Fortify per second while Grizzly Rage is active.",
    maxPoints: 1,
    values: ["3.2", ""],
  },
  {
    name: "Petrify",
    description:
      "Cooldown: {#} seconds\nPetrify all Nearby enemies, Stunning them for {#} seconds. You deal x{#}% increased Critical Strike Damage to Petrified enemies.",
    maxPoints: 1,
    values: ["60.0", "3", "25"],
  },
  {
    name: "Prime Petrify",
    description: "Petrify's duration is increased by {#} second.",
    maxPoints: 1,
    values: ["1"],
  },
  {
    name: "Supreme Petrify",
    description: "Killing a Petrified enemy grants {#} Spirit.",
    maxPoints: 1,
    values: ["25"],
  },
  {
    name: "Defensive Posture",
    description:
      "Increases the amount of Fortify you gain from all sources by {#}%.",
    maxPoints: 3,
    values: ["{3/6/9}"],
  },
  {
    name: "Thick Hide",
    description:
      "Whenever you are Stunned, Immobilized, or Knocked Down, Fortify for {#}% Base Life ({#}).",
    maxPoints: 3,
    values: ["2.56", ""],
  },
  {
    name: "Unrestrained",
    description:
      "Reduce the duration of control impairing effects by {#}%.  Triple this effect while you are Fortified for over {#}% of your maximum Life.",
    maxPoints: 3,
    values: ["{3/6/9}", "20"],
  },
  {
    name: "Nature's Resolve",
    description:
      "{#}% chance when struck to Fortify you for {#}% Base Life ({#}).",
    maxPoints: 3,
    values: ["{5/10/15}", "1.76", ""],
  },
  {
    name: "Quickshift",
    description:
      "When a Shapeshifting skill transforms you into a different form, it deals x{#}% increased damage.",
    maxPoints: 3,
    values: ["{5/10/15}"],
  },
  {
    name: "Natural Fortitude",
    description: "Shapeshifting Fortifies you for {#}% Base Life ({#}).",
    maxPoints: 3,
    values: ["{0.56/1.12/1.68}", ""],
  },
  {
    name: "Heightened Senses",
    description:
      "Upon shapeshifting into a Werewolf or Werebear, gain {#}% damage reduction against Elites for {#} seconds.",
    maxPoints: 3,
    values: ["{4/8/12}", "3"],
  },
  {
    name: "Lacerate",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nShapeshift into a Werewolf, become Immune and quickly dash {#} times between enemies in the area dealing up to {#}% damage.",
    maxPoints: 1,
    values: ["50.0", "15", "10", "420"],
  },
  {
    name: "Prime Lacerate",
    description:
      "Each time Lacerate deals a Critical Strike, heal for {#}% of your maximum Life.",
    maxPoints: 1,
    values: ["3"],
  },
  {
    name: "Supreme Lacerate",
    description: "Lacerate's final strike deals x{#}% increased damage.",
    maxPoints: 1,
    values: ["200"],
  },
  {
    name: "Cataclysm",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nA massive storm follows you for {#} seconds. Tornadoes knock back enemies, and lightning strikes wildly dealing {#}% damage.",
    maxPoints: 1,
    values: ["80.0", "82", "8", "54.6"],
  },
  {
    name: "Prime Cataclysm",
    description: "Cataclysm's duration is increased by {#} seconds.",
    maxPoints: 1,
    values: ["2"],
  },
  {
    name: "Supreme Cataclysm",
    description:
      "Lightning strikes from Cataclysm make enemies Vulnerable for 2 seconds.",
    maxPoints: 1,
  },
  {
    name: "Defiance",
    description: "Nature Magic skills deal x{#}% increased damage to Elites.",
    maxPoints: 3,
    values: ["{4/8/12}"],
  },
  {
    name: "Circle of Life",
    description:
      "Nature Magic skills that consume Spirit restore {#}% of your maximum Life.",
    maxPoints: 3,
    values: ["{1/2/3}"],
  },
  {
    name: "Resonance",
    description:
      "Nature Magic skills deal x{#}% increased damage. Triple this bonus if an Earth skill is the next skill cast after a Storm skill, or a  Storm skill is the next skill cast after an  Earth skill.",
    maxPoints: 3,
    values: ["{2/4/6}"],
  },
  {
    name: "Natural Disaster",
    description:
      "Your Earth skills deal x{#}% increased damage to Vulnerable enemies.\n\nYour Storm skills deal x{#}% increased damage to enemies that are Stunned, Immobilized, or Knocked Back.",
    maxPoints: 3,
    values: ["{4/8/12}", "{4/8/12}"],
  },
  {
    name: "Nature's Fury",
    description:
      "Casting an Earth skill has a {#}% chance to trigger a free Storm skill of the same category.\n\nIn addition, casting a Storm skill has a {#}% chance to trigger a free Earth skill of the same category.",
    maxPoints: 1,
    values: ["20", "20"],
  },
  {
    name: "Earthen Might",
    description:
      "Lucky Hit: Damaging enemies with Earth skills has up to a {#}% chance to grant Earthen Might.\n\nThis chance is increased by {#}% for Critical Strikes, and is further increased by {#}% if the target is Stunned, Immobilized, or Knocked Back.\n\nEarthen Might restores all of your Spirit & grants you {#}% Critical Strike Chance for {#} seconds.",
    maxPoints: 1,
    values: ["5", "10", "10", "100", "5"],
  },
  {
    name: "Lupine Ferocity",
    description:
      "Every 6th Werewolf skill hit Critically Strikes and deals x{#}% increased damage.",
    maxPoints: 1,
    values: ["60"],
  },
  {
    name: "Bestial Rampage",
    description:
      "After being a Werewolf for {#} seconds, gain {#}% Attack Speed for {#} seconds.\n\nAfter being a Werebear for {#} seconds, deal x{#}% increased damage for {#} seconds.",
    maxPoints: 1,
    values: ["2.5", "20", "15", "2.5", "20", "15"],
  },
  {
    name: "Perfect Storm",
    description:
      "Your Storm skills grant {#} Spirit and deal x{#}% increased damage when damaging a Vulnerable, immobilized or slowed enemy.",
    maxPoints: 1,
    values: ["2", "20"],
  },
  {
    name: "Ursine Strength",
    description:
      "Gain {#}% additional maximum Life while in Werebear form and for {#} seconds after leaving Werebear form.\n\nWhile Healthy, deal x{#}% increased damage.",
    maxPoints: 1,
    values: ["20", "3", "20"],
  },
];
export { data };
