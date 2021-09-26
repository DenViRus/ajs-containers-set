import { Team, Character } from '../app.js';

test('check add new character', () => {
  const bowman1 = new Character('Michael', 'bowman');
  const myTeam1 = new Team();
  myTeam1.add(bowman1);
  const newMembers = new Set();
  newMembers.add({
    name: 'Michael',
    type: 'bowman',
    health: 100,
    level: 1,
  });

  const received = myTeam1.members;
  const expected = newMembers;

  expect(received).toEqual(expected);
});

test('check add new character', () => {
  const bowman1 = new Character('Michael', 'bowman');
  const myTeam1 = new Team();
  myTeam1.add(bowman1);
  const newMembers = new Set([
    {
      name: 'Michael',
      type: 'bowman',
      health: 100,
      level: 1,
    },
  ]);

  const received = myTeam1.members;
  const expected = newMembers;

  expect(received).toEqual(expected);
});

test('check add same character', () => {
  const bowman1 = new Character('Michael', 'bowman');
  const myTeam1 = new Team();
  myTeam1.add(bowman1);
  expect(() => {
    myTeam1.add(bowman1);
  }).toThrow();
});

test('check addAll characters', () => {
  const bowman1 = new Character('Michael', 'bowman');
  const bowman2 = new Character('Peter', 'bowman');
  const bowman3 = new Character('John', 'bowman');
  const swordsman1 = new Character('Richard', 'swordsman');
  const swordsman2 = new Character('Edward', 'swordsman');

  const myTeam1 = new Team();
  myTeam1.addAll(bowman1, bowman2, bowman3, swordsman1, swordsman2);
  const newMembers = new Set([
    {
      name: 'Michael',
      type: 'bowman',
      health: 100,
      level: 1,
    },
    {
      name: 'Peter',
      type: 'bowman',
      health: 100,
      level: 1,
    },
    {
      name: 'John',
      type: 'bowman',
      health: 100,
      level: 1,
    },
    {
      name: 'Richard',
      type: 'swordsman',
      health: 100,
      level: 1,
    },
    {
      name: 'Edward',
      type: 'swordsman',
      health: 100,
      level: 1,
    },
  ]);

  const received = myTeam1.members;
  const expected = newMembers;

  expect(received).toEqual(expected);
});

test('check addAll same characters', () => {
  const bowman1 = new Character('Michael', 'bowman');
  const bowman2 = new Character('Peter', 'bowman');
  const bowman3 = new Character('John', 'bowman');
  const swordsman1 = new Character('Richard', 'swordsman');
  const swordsman2 = new Character('Edward', 'swordsman');

  const myTeam1 = new Team();
  myTeam1.addAll(
    bowman1,
    bowman2,
    bowman3,
    swordsman1,
    swordsman2,
    bowman1,
    bowman3,
    swordsman2,
  );

  const received = myTeam1.members.size;
  const expected = 5;

  expect(received).toBe(expected);
});

test('check members toArray', () => {
  const bowman1 = new Character('Michael', 'bowman');
  const bowman2 = new Character('Peter', 'bowman');
  const swordsman1 = new Character('Richard', 'swordsman');
  const swordsman2 = new Character('Edward', 'swordsman');

  const myTeam1 = new Team();
  myTeam1.addAll(bowman1, bowman2, swordsman1, swordsman2);
  myTeam1.toArray();

  const newMembers = [
    {
      name: 'Michael',
      type: 'bowman',
      health: 100,
      level: 1,
    },
    {
      name: 'Peter',
      type: 'bowman',
      health: 100,
      level: 1,
    },
    {
      name: 'Richard',
      type: 'swordsman',
      health: 100,
      level: 1,
    },
    {
      name: 'Edward',
      type: 'swordsman',
      health: 100,
      level: 1,
    },
  ];

  const received = myTeam1.members;
  const expected = newMembers;

  expect(received).toEqual(expected);
});
