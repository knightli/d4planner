const data = [
  { name: "Basic", requiredPoints: 0 },
  { name: "Core", requiredPoints: 2 },
  { name: "Defensive", requiredPoints: 6 },
  { name: "Brawling", requiredPoints: 11 },
  { name: "Weapon Mastery", requiredPoints: 16 },
  { name: "Ultimate", requiredPoints: 23 },
  { name: "Capstone", requiredPoints: 33 },
  {
    name: "Bash",
    description:
      "Generate Fury: {#}\nLucky Hit Chance: {#}%\nBash the enemy with your weapon, dealing {#}% damage. After bashing enemies {#} times, your next Bash will Stun for {#} seconds, this increases to {#} seconds if using a Two-Handed weapon.",
    maxPoints: 5,
    values: ["10", "50", "31", "4", "1.25", "2"],
    damageType: 0,
  },
  {
    name: "Enhanced Bash",
    description:
      "Damaging a Stunned enemy with Bash grants you {#}% Base Life ({#}) as Fortify. Double this amount when using a Two-Handed weapon.",
    maxPoints: 1,
    values: ["5", ""],
  },
  {
    name: "Battle Bash",
    description:
      "Damaging a Stunned enemy with Bash generates an additional {#} Fury, or {#} Fury if using a Two-Handed weapon.",
    maxPoints: 1,
    values: ["3", "4"],
  },
  {
    name: "Combat Bash",
    description:
      "After Critically Striking {#} times with Bash using a Two-Handed weapon your next Core or Weapon Mastery skill will Overpower.",
    maxPoints: 1,
    values: ["4"],
  },
  {
    name: "Lunging Strike",
    description:
      "Generate Fury: {#}\nLucky Hit Chance: {#}%\nLunge forward and strike an enemy for {#}% damage.",
    maxPoints: 5,
    values: ["9", "50", "31"],
    damageType: 0,
  },
  {
    name: "Enhanced Lunging Strike",
    description:
      "Lunging Strike deals x{#}% increased damage and Heals you for {#}% Maximum Life ({#}) when it damages a Healthy enemy.",
    maxPoints: 1,
    values: ["30", "2", ""],
  },
  {
    name: "Combat Lunging Strike",
    description:
      "Critical Strikes with Lunging Strike grant you Berserking for {#} seconds.",
    maxPoints: 1,
    values: ["1.5"],
  },
  {
    name: "Battle Lunging Strike",
    description:
      "Lunging Strike also inflicts {#}% Bleeding damage over {#} seconds.",
    maxPoints: 1,
    values: ["21", "5"],
  },
  {
    name: "Frenzy",
    description:
      "Generate Fury: {#}\nLucky Hit Chance: {#}%\nUnleash a rapid flurry of blows, dealing {#}% damage with each pair of hits.\n\nIf Frenzy hits an enemy, its Attack Speed is increased by +{#}% for {#} seconds, up to +{#}%.",
    maxPoints: 5,
    values: ["5", "30", "21", "20", "3", "60"],
    damageType: 0,
  },
  {
    name: "Enhanced Frenzy",
    description:
      "While Frenzy is granting +{#}% bonus Attack Speed, it also generates 1 additional Fury.",
    maxPoints: 1,
    values: ["60"],
  },
  {
    name: "Battle Frenzy",
    description:
      "While Berserking, your other skills gain {#}% Attack Speed for each stack of Frenzy you have.",
    maxPoints: 1,
    values: ["5"],
  },
  {
    name: "Combat Frenzy",
    description:
      "You gain x{#}% Damage Reduction for each stack of Frenzy you currently have.",
    maxPoints: 1,
    values: ["8"],
  },
  {
    name: "Flay",
    description:
      "Generate Fury: {#}\nLucky Hit Chance: {#}%\nFlay the enemy, dealing {#}% damage. Inflicts {#}% Bleeding damage over {#} seconds.",
    maxPoints: 5,
    values: ["9", "50", "5", "38", "5"],
    damageType: 0,
  },
  {
    name: "Enhanced Flay",
    description:
      "When Flay deals direct damage to an enemy, they take x{#}% increased Bleeding damage for the next {#} seconds.",
    maxPoints: 1,
    values: ["10", "3"],
  },
  {
    name: "Battle Flay",
    description:
      "Flay has a {#}% chance to make the enemy Vulnerable for 2 seconds. Double this chance when using a Two-Handed weapon.",
    maxPoints: 1,
    values: ["10"],
  },
  {
    name: "Combat Flay",
    description:
      "When Flay deals direct damage you gain {#}% damage reduction and {#} Thorns for {#} seconds.  This stacks up to {#} times.",
    maxPoints: 1,
    values: ["1", "4", "3", "5"],
  },
  {
    name: "Hammer of the Ancients",
    description:
      "Fury Cost: {#}\nLucky Hit Chance: {#}%\nSlam your hammer down with the fury of the Ancients, dealing {#}% damage to a concentrated area.",
    maxPoints: 5,
    values: ["35", "40", "59"],
    damageType: 0,
  },
  {
    name: "Enhanced Hammer of the Ancients",
    description:
      "Gain {#}% more Fury for {#} seconds for each enemy damaged by Hammer of the Ancients stacking up to {#} times.",
    maxPoints: 1,
    values: ["3", "5", "10"],
  },
  {
    name: "Violent Hammer of the Ancients",
    description:
      "After Overpowering with Hammer of the Ancients you deal {#}% more damage for {#} seconds.",
    maxPoints: 1,
    values: ["30", "2.5"],
  },
  {
    name: "Furious Hammer of the Ancients",
    description:
      "Hammer of the Ancients deals {#}% additional damage for each point of Fury you had when using it.",
    maxPoints: 1,
    values: ["1"],
  },
  {
    name: "Upheaval",
    description:
      "Fury Cost: {#}\nLucky Hit Chance: {#}%\nTear into the ground with your weapon and fling debris forward, dealing {#}% damage.",
    maxPoints: 5,
    values: ["40", "20", "73"],
    damageType: 0,
  },
  {
    name: "Enhanced Upheaval",
    description:
      "Upheaval has a {#}% chance to Stun all enemies it damages for {#} seconds.",
    maxPoints: 1,
    values: ["20", "2.5"],
  },
  {
    name: "Violent Upheaval",
    description:
      "If Upheaval deals damage to {#} or more enemies you gain Berserking for {#} seconds, or {#} seconds if it deals damage to {#} or more enemies.",
    maxPoints: 1,
    values: ["2", "2", "3", "4"],
  },
  {
    name: "Furious Upheaval",
    description:
      "Dealing direct damage to an enemy with a Skill that is not Upheaval causes your next cast of Upheaval to deal x{#}% increased damage, stacking up to {#} times.",
    maxPoints: 1,
    values: ["8", "10"],
  },
  {
    name: "Double Swing",
    description:
      "Fury Cost: {#}\nLucky Hit Chance: {#}%\nSweep your weapons from opposite directions, dealing {#}% damage with each weapon. Enemies caught in the center are damaged by both.",
    maxPoints: 5,
    values: ["25", "30", "38"],
    damageType: 0,
  },
  {
    name: "Enhanced Double Swing",
    description:
      "If Double Swing damages a Stunned or Knocked Down enemy, gain {#} Fury.",
    maxPoints: 1,
    values: ["25"],
  },
  {
    name: "Furious Double Swing",
    description:
      "Casting Double Swing while Berserking grants {#} additional seconds of Berserking.",
    maxPoints: 1,
    values: ["2"],
  },
  {
    name: "Violent Double Swing",
    description:
      "Hitting an enemy with both hits of Double Swing makes them Vulnerable for {#} second.",
    maxPoints: 1,
    values: ["1"],
  },
  {
    name: "Pressure Point",
    description:
      "Lucky Hit: Your Core skills have up to a {#}% chance to make enemies Vulnerable for 2 seconds.",
    maxPoints: 3,
    values: ["{10/20/30}"],
  },
  {
    name: "Rend",
    description:
      "Fury Cost: {#}\nLucky Hit Chance: {#}%\nCleave enemies in front of you, dealing {#}% damage and inflicting {#}% Bleeding damage over {#} seconds.",
    maxPoints: 5,
    values: ["35", "33", "13", "101", "5"],
    damageType: 0,
  },
  {
    name: "Enhanced Rend",
    description:
      "Dealing direct damage with Rend extends the duration of Vulnerable on enemies by {#} seconds.",
    maxPoints: 1,
    values: ["2"],
  },
  {
    name: "Violent Rend",
    description:
      "Rend deals x{#}% increased Bleeding damage to enemies that are already Bleeding.",
    maxPoints: 1,
    values: ["12"],
  },
  {
    name: "Furious Rend",
    description:
      "Direct damage with Rend grants {#} Fury per enemy hit, up to a maximum of {#} Fury.",
    maxPoints: 1,
    values: ["4", "20"],
  },
  {
    name: "Whirlwind",
    description:
      "Fury Cost: {#} per second\nLucky Hit Chance: {#}%\nRapidly attack surrounding enemies for {#}% damage.",
    maxPoints: 5,
    values: ["20", "20", "12"],
    damageType: 0,
  },
  {
    name: "Enhanced Whirlwind",
    description:
      "Gain {#} Fury each time Whirlwind deals direct damage to an enemy, or {#} Fury against Elite enemies.",
    maxPoints: 1,
    values: ["1", "3"],
  },
  {
    name: "Furious Whirlwind",
    description:
      "While using a Slashing weapon, Whirlwind also inflicts {#}% Bleeding damage over {#} seconds.",
    maxPoints: 1,
    values: ["26", "5"],
  },
  {
    name: "Violent Whirlwind",
    description:
      "After using Whirlwind for {#} seconds, Whirlwind deals x{#}% increased damage until it is cancelled.",
    maxPoints: 1,
    values: ["2", "30"],
  },
  {
    name: "Endless Fury",
    description:
      "Basic skills generate x{#}% more Fury when using Two-Handed weapons.",
    maxPoints: 3,
    values: ["{5/10/15}"],
  },
  {
    name: "Challenging Shout",
    description:
      "Cooldown: {#} seconds\nTaunt Nearby enemies and gain x{#}% Damage Reduction for {#} seconds.",
    maxPoints: 5,
    values: ["25.0", "40", "8"],
  },
  {
    name: "Enhanced Challenging Shout",
    description:
      "While Challenging Shout is active, gain x{#}% bonus Maximum Life.",
    maxPoints: 1,
    values: ["20"],
  },
  {
    name: "Strategic Challenging Shout",
    description:
      "While Challenging Shout is active, gain Thorns equal to +{#}% of your Maximum Life.",
    maxPoints: 1,
    values: ["50"],
  },
  {
    name: "Tactical Challenging Shout",
    description:
      "While Challenging Shout is active you gain {#} Fury each time you take damage.",
    maxPoints: 1,
    values: ["3"],
  },
  {
    name: "Iron Skin",
    description:
      "Cooldown: {#} seconds\nSteel yourself, gaining a Barrier that absorbs {#}% of your missing Life for {#} seconds.",
    maxPoints: 5,
    values: ["14.0", "50", "5"],
  },
  {
    name: "Enhanced Iron Skin",
    description: "Iron Skin absorbs +{#}% more Missing Life.",
    maxPoints: 1,
    values: ["10"],
  },
  {
    name: "Tactical Iron Skin",
    description:
      "While Iron Skin is active, restore Life equal to {#}% of the Barrier's original amount per second.",
    maxPoints: 1,
    values: ["10"],
  },
  {
    name: "Strategic Iron Skin",
    description:
      "Iron Skin also grants {#}% Base Life ({#}) as Fortify. Double this amount if cast while below {#}% Life.",
    maxPoints: 1,
    values: ["9", "", "50"],
  },
  {
    name: "Outburst",
    description:
      "Gain {#} Thorns. Also gain {#} Thorns for each {#} bonus Maximum Life you have.",
    maxPoints: 3,
    values: ["{2/4/6}", "2", "2"],
  },
  {
    name: "Tough as Nails",
    description: "Increase your Thorns by +{#}%.",
    maxPoints: 3,
    values: ["{20/40/60}"],
  },
  {
    name: "Ground Stomp",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nSmash the ground, dealing {#}% damage and Stunning surrounding enemies for {#} seconds.",
    maxPoints: 5,
    values: ["16.0", "33", "10", "3"],
    damageType: 0,
  },
  {
    name: "Enhanced Ground Stomp",
    description: "Increase Ground Stomp’s duration by {#} second.",
    maxPoints: 1,
    values: ["1"],
  },
  {
    name: "Tactical Ground Stomp",
    description: "Ground Stomp generates {#} Fury.",
    maxPoints: 1,
    values: ["25"],
  },
  {
    name: "Strategic Ground Stomp",
    description:
      "Reduce the Cooldown of your Ultimate skill by {#} second for each enemy damaged by Ground Stomp.",
    maxPoints: 1,
    values: ["1"],
  },
  {
    name: "Rallying Cry",
    description:
      "Cooldown: {#} seconds\nBellow a rallying cry, granting allies +{#}% increased Movement Speed, and x{#}% increased Resource Generation for {#} seconds.",
    maxPoints: 5,
    values: ["25.0", "30", "50", "6"],
  },
  {
    name: "Enhanced Rallying Cry",
    description: "Rallying Cry grants Unstoppable while active.",
    maxPoints: 1,
  },
  {
    name: "Strategic Rallying Cry",
    description:
      "Rallying Cry grants {#}% Base Life ({#}) as Fortify. While Rallying Cry is active, you gain an additional {#}% Base Life ({#}) as Fortify each time you take or deal direct damage.",
    maxPoints: 1,
    values: ["10", "", "2", ""],
  },
  {
    name: "Tactical Rallying Cry",
    description:
      "Rallying Cry grants {#} Fury. You gain +{#}% increased Resource Generation from Rallying Cry",
    maxPoints: 1,
    values: ["25", "50"],
  },
  {
    name: "Imposing Presence",
    description: "Gain x{#}% additional Maximum Life.",
    maxPoints: 3,
    values: ["{5/10/15}"],
  },
  {
    name: "Martial Vigor",
    description: "Damage Reduction against Elites is increased by x{#}%.",
    maxPoints: 3,
    values: ["{4/8/12}"],
  },
  {
    name: "Charge",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nBecome Unstoppable and rush forward, pushing enemies with you then swinging through them for {#}% damage and Knocking them Back.",
    maxPoints: 5,
    values: ["17.0", "33", "26"],
    damageType: 0,
  },
  {
    name: "Enhanced Charge",
    description:
      "Enemies who are Knocked Back into terrain by Charge take {#}% damage and are Stunned for {#} seconds.",
    maxPoints: 1,
    values: ["16", "3"],
  },
  {
    name: "Power Charge",
    description:
      "Reduce Charge's Cooldown by {#} seconds if it Knocks Back an enemy into terrain.",
    maxPoints: 1,
    values: ["3"],
  },
  {
    name: "Mighty Charge",
    description:
      "Damaging enemies with Charge makes them Vulnerable for {#} seconds.",
    maxPoints: 1,
    values: ["2"],
  },
  {
    name: "War Cry",
    description:
      "Cooldown: {#} seconds\nBellow a mighty war cry. You and Nearby allies deal x{#}% increased damage for {#} seconds.",
    maxPoints: 5,
    values: ["25.0", "15", "8"],
  },
  {
    name: "Enhanced War Cry",
    description: "War Cry grants you Berserking for {#} seconds.",
    maxPoints: 1,
    values: ["3"],
  },
  {
    name: "Power War Cry",
    description:
      "If at least {#} enemies are nearby when War Cry is cast, its damage bonus is increased by {#}%.",
    maxPoints: 1,
    values: ["4", "15"],
  },
  {
    name: "Mighty War Cry",
    description: "War Cry grants {#}% Base Life ({#}) as Fortify.",
    maxPoints: 1,
    values: ["28", ""],
  },
  {
    name: "Booming Voice",
    description: "Shout skill durations are increased by x{#}%.",
    maxPoints: 3,
    values: ["{10/20/30}"],
  },
  {
    name: "Raid Leader",
    description:
      "Your Shouts also Heal allies for {#}% of their Maximum Life per second.",
    maxPoints: 3,
    values: ["{1/2/3}"],
  },
  {
    name: "Guttural Yell",
    description:
      "Your Shout Skills cause enemies to deal x{#}% less damage for {#} seconds.",
    maxPoints: 3,
    values: ["{8/16/24}", "5"],
  },
  {
    name: "Leap",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nLeap forward and then slam down, dealing {#}% damage and Knocking Back surrounding enemies on impact.",
    maxPoints: 5,
    values: ["17.0", "33", "34"],
    damageType: 0,
  },
  {
    name: "Enhanced Leap",
    description:
      "If Leap doesn't damage any enemies, its Cooldown is reduced by {#} seconds.",
    maxPoints: 1,
    values: ["4"],
  },
  {
    name: "Mighty Leap",
    description: "Enemies damaged by Leap are Slowed by {#}% for {#} seconds.",
    maxPoints: 1,
    values: ["50", "5"],
  },
  {
    name: "Power Leap",
    description: "If Leap damages at least one enemy, gain {#} Fury.",
    maxPoints: 1,
    values: ["40"],
  },
  {
    name: "Kick",
    description:
      "Charges: {#}\nCharge Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nThrow a powerful kick that deals {#}% damage and Knocks Back enemies in front of you. Enemies who are Knocked Back into terrain take an additional {#}% damage and are Stunned for {#} seconds.",
    maxPoints: 5,
    values: ["2", "17.0", "100", "19", "57", "3"],
    damageType: 0,
  },
  {
    name: "Enhanced Kick",
    description: "Kick makes enemies it damages Vulnerable for {#} seconds.",
    maxPoints: 1,
    values: ["4"],
  },
  {
    name: "Mighty Kick",
    description:
      "Kicked enemies deal {#}% damage to enemies they collide with while being Knocked Back. Enemies damaged this way are Knocked Down for {#} seconds.",
    maxPoints: 1,
    values: ["54", "2"],
  },
  {
    name: "Power Kick",
    description:
      "If Kick damages an enemy, it consumes all of your Fury and deals an additional {#}% damage per {#} Fury spent. Kick no longer Knocks Back enemies.",
    maxPoints: 1,
    values: ["21", "10"],
  },
  {
    name: "Aggressive Resistance",
    description: "Gain {#}% Damage Reduction while Berserking.",
    maxPoints: 3,
    values: ["{4/8/12}"],
  },
  {
    name: "Prolific Fury",
    description: "While Berserking, Fury Generation is increased by x{#}%.",
    maxPoints: 3,
    values: ["{6/12/18}"],
  },
  {
    name: "Battle Frenzy",
    description:
      "When a Brawling Skill damages at least one enemy, gain Berserking for {#} seconds.",
    maxPoints: 3,
    values: ["{1/2/3}"],
  },
  {
    name: "Swiftness",
    description: "Movement Speed is increased by +{#}%.",
    maxPoints: 3,
    values: ["{4/8/12}"],
  },
  {
    name: "Quick Impulses",
    description: "Reduce the duration of Control Impairing Effects by x{#}%.",
    maxPoints: 3,
    values: ["{6/12/18}"],
  },
  {
    name: "Steel Grasp",
    description:
      "Charges: {#}\nCharge Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nThrow out a trio of chains that deal {#}% damage and Pull In enemies.",
    maxPoints: 5,
    values: ["2", "11.0", "25", "24"],
    damageType: 0,
  },
  {
    name: "Enhanced Steel Grasp",
    description: "Steel Grasp also makes enemies Vulnerable for {#} seconds.",
    maxPoints: 1,
    values: ["2.5"],
  },
  {
    name: "Warrior's Steel Grasp",
    description: "Steel Grasp gains {#} additional Charge.",
    maxPoints: 1,
    values: ["1"],
  },
  {
    name: "Fighter's Steel Grasp",
    description:
      "If Steel Grasp damages an enemy, gain Berserking for {#} seconds.",
    maxPoints: 1,
    values: ["2"],
  },
  {
    name: "Thick Skin",
    description:
      "Each time you take direct damage gain {#}% Base Life ({#}) as Fortify.",
    maxPoints: 3,
    values: ["{0.4/0.7/1.1}", ""],
  },
  {
    name: "Counteroffensive",
    description:
      "While Fortified for over {#}% of your Maximum Life, you deal x{#}% increased damage.",
    maxPoints: 3,
    values: ["50", "{5/10/15}"],
  },
  {
    name: "Defensive Posture",
    description:
      "Increase the Damage Reduction gained while you are Fortified by an additional +{#}%.",
    maxPoints: 3,
    values: ["{3/6/9}"],
  },
  {
    name: "Death Blow",
    description:
      "Charges: {#}\nCharge Cooldown: {#} seconds\nCooldown: {#} seconds\nLucky Hit Chance: {#}%\nAttempt a killing strike, dealing {#}% damage to enemies in front of you.\n\nIf this kills an enemy, the Cooldown is reset.",
    maxPoints: 5,
    values: ["", "", "15.0", "50", "126"],
    damageType: 0,
  },
  {
    name: "Enhanced Death Blow",
    description: "Death Blow deals x{#}% increased damage to bosses.",
    maxPoints: 1,
    values: ["100"],
  },
  {
    name: "Warrior's Death Blow",
    description:
      "If Death Blow damages at least one enemy, gain Berserking for {#} seconds.",
    maxPoints: 1,
    values: ["3"],
  },
  {
    name: "Fighter's Death Blow",
    description: "If Death Blow damages at least one enemy, gain {#} Fury.",
    maxPoints: 1,
    values: ["20"],
  },
  {
    name: "Pit Fighter",
    description:
      "You deal x{#}% increased damage to Close enemies and gain {#}% Distant Damage Reduction.",
    maxPoints: 3,
    values: ["{3/6/9}", "{2/4/6}"],
  },
  {
    name: "Slaying Strike",
    description: "You deal x{#}% increased damage against Injured enemies.",
    maxPoints: 3,
    values: ["{8/15/23}"],
  },
  {
    name: "Expose Vulnerability",
    description:
      "Dealing direct damage with a Weapon Mastery skill causes your next Core Skill to make enemies Vulnerable for {#} seconds.",
    maxPoints: 3,
    values: ["{1.5/3/4.5}"],
  },
  {
    name: "No Mercy",
    description:
      "You deal x{#}% increased damage against Immobilized, Stunned, or Slowed enemies.",
    maxPoints: 3,
    values: ["{5/9/13}"],
  },
  {
    name: "Rupture",
    description:
      "Cooldown: {#} seconds\nCharges: {#}\nCharge Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nSkewer enemies in front of you, dealing {#}% damage, then rip your weapon out, damaging enemies for their total Bleeding amount and removing all Bleeding damage from them.",
    maxPoints: 5,
    values: ["15.0", "", "", "50", "14"],
    damageType: 0,
  },
  {
    name: "Enhanced Rupture",
    description:
      "If an enemy dies while being skewered by Rupture, then reset its Cooldown. Enemies who survive take x{#}% increased Bleeding damage for the next {#} seconds.",
    maxPoints: 1,
    values: ["20", "8"],
  },
  {
    name: "Fighter's Rupture",
    description:
      "Enemies killed by Rupture Heal you for {#}% of your Maximum Life.",
    maxPoints: 1,
    values: ["15"],
  },
  {
    name: "Warrior's Rupture",
    description:
      "Killing enemies with Rupture increases your Attack Speed by +{#}% for {#} seconds.",
    maxPoints: 1,
    values: ["20", "4"],
  },
  {
    name: "Hamstring",
    description: "Your Bleeding effects Slow enemies by {#}%.",
    maxPoints: 3,
    values: ["{10/20/30}"],
  },
  {
    name: "Cut to the Bone",
    description:
      "Your Bleeding effects deal x{#}% increased damage to Vulnerable enemies.",
    maxPoints: 3,
    values: ["{6/12/18}"],
  },
  {
    name: "Call of the Ancients",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nCall upon 3 Ancients to aid you in battle for {#} seconds.\n\nKorlic leaps at enemies, dealing {#}% damage and swings his weapons in a frenzy, dealing {#}% damage per hit.\n\nTalic spins in a whirlwind rapidly attacking enemies for {#}% damage.\n\nMadawc upheaves the ground, dealing {#}% damage.",
    maxPoints: 1,
    values: ["50.0", "30", "6", "80", "30", "50", "150"],
    damageType: 0,
  },
  {
    name: "Prime Call of the Ancients",
    description:
      "While Call of the Ancients is active, gain +{#}% bonus Attack Speed and x{#}% increased damage.",
    maxPoints: 1,
    values: ["10", "10"],
  },
  {
    name: "Supreme Call of the Ancients",
    description:
      "Each of the Ancients gains additional power:\n\nKorlic: You gain 10 Fury each time Korlic damages an enemy with Frenzy.\nTalic: Enemies are Slowed by {#}% for {#} second when damaged by his Whirlwind.\nMadawc: {#}% chance to Stun enemies for {#} seconds when using his Upheaval.",
    maxPoints: 1,
    values: ["50", "1", "30", "3"],
  },
  {
    name: "Iron Maelstrom",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nActivate to attach a chain to your Two-Handed Bludgeoning weapon and slam the ground, dealing {#}% damage and Stunning them for {#} seconds.\n\nReactivate a second time to attach a chain to your Two-Handed Slashing weapon and swipe it in front of you, dealing {#}% damage and {#}% Bleeding damage over {#} seconds.\n\nReactivate a final time to attach a chain to your Dual Wield weapons and swing them around you, dealing {#}% damage per hit.",
    maxPoints: 1,
    values: ["60.0", "40", "63", "2", "21", "126", "5", "34"],
    damageType: 0,
  },
  {
    name: "Prime Iron Maelstrom",
    description:
      "Iron Maelstrom gains +{#}% increased Critical Strike Chance and deals x{#}% increased Critical Strike Damage",
    maxPoints: 1,
    values: ["10", "20"],
  },
  {
    name: "Supreme Iron Maelstrom",
    description:
      "Dealing direct damage to an enemy after swapping weapons reduces Iron Maelstrom's Cooldown by {#} second.",
    maxPoints: 1,
    values: ["1"],
  },
  {
    name: "Duelist",
    description:
      "Attack Speed is increased by +{#}% while using One-Handed weapons.",
    maxPoints: 3,
    values: ["{3/6/9}"],
  },
  {
    name: "Wrath of the Berserker",
    description:
      "Cooldown: {#} seconds\nLucky Hit Chance: {#}%\nGain Berserking and Unstoppable for {#} seconds.  For the next {#} seconds, dealing direct damage with Basic Skills grants Berserking for {#} seconds.",
    maxPoints: 1,
    values: ["60.0", "40", "5", "10", "5"],
  },
  {
    name: "Supreme Wrath of the Berserker",
    description:
      "While Wrath of the Berserker is active, gain +{#}% increased Movement Speed and increase Fury Generation by x{#}%",
    maxPoints: 1,
    values: ["50", "25"],
  },
  {
    name: "Prime Wrath of the Berserker",
    description:
      "While Wrath of the Berserker is active, every {#} Fury you spend increases Berserk's damage bonus by x{#}%",
    maxPoints: 1,
    values: ["20", "30"],
  },
  {
    name: "Tempered Fury",
    description: "Increase your Maximum Fury by {#}.",
    maxPoints: 3,
    values: ["{3/6/9}"],
  },
  {
    name: "Invigorating Fury",
    description:
      "Heals you for {#}% of your Maximum Life for each {#} Fury spent.",
    maxPoints: 3,
    values: ["{2/4/6}", "100"],
  },
  {
    name: "Furious Impulse",
    description: "Each time you swap weapons, gain {#} Fury.",
    maxPoints: 3,
    values: ["{2/4/6}"],
  },
  {
    name: "Wallop",
    description:
      "Your Skills using Bludgeoning weapons deal x{#}% increased damage if the enemy is Stunned or Vulnerable.",
    maxPoints: 3,
    values: ["{5/10/15}"],
  },
  {
    name: "Brute Force",
    description:
      "Your Overpower deals x{#}% increased damage when using a Two-Handed weapon",
    maxPoints: 3,
    values: ["{15/30/45}"],
  },
  {
    name: "Heavy Handed",
    description:
      "While using Two-Handed weapons you deal x{#}% increased Critical Strike Damage.",
    maxPoints: 3,
    values: ["{5/10/15}"],
  },
  {
    name: "Concussion",
    description:
      "Lucky Hit: Skills using Bludgeoning weapons have up to a {#}% chance to Stun enemies for {#} seconds, or up to a {#}% chance when using a Two-Handed Bludgeoning weapon.",
    maxPoints: 3,
    values: ["{10/20/30}", "3", "{15/30/45}"],
  },
  {
    name: "Unconstrained",
    description:
      "Increase Berserk's maximum duration by {#} seconds and increase its damage bonus by x{#}%.",
    maxPoints: 1,
    values: ["5", "25"],
  },
  {
    name: "Gushing Wounds",
    description:
      "Killing a Bleeding enemy creates an explosion that inflicts {#}% Bleeding damage over {#} seconds.",
    maxPoints: 1,
    values: ["12", "5"],
    damageType: 0,
  },
  {
    name: "Unbridled Rage",
    description:
      "Core Skills deal x{#}% increased damage, but cost x{#}% more.",
    maxPoints: 1,
    values: ["135", "100"],
  },
  {
    name: "Walking Arsenal",
    description:
      "Dealing direct damage with a Two-Handed Bludgeoning, Two-Handed Slashing, or Dual Wielded weapons grants x{#}% increased damage for {#} seconds.\n\nWhile all three damage bonuses are active, you gain an additional x{#}% increased damage.",
    maxPoints: 1,
    values: ["10", "6", "15"],
  },
];
export { data };
