export class Team {
  constructor() {
    this.members = new Set();
  }

  add(newCharacter) {
    if (this.members.has(newCharacter)) {
      throw new Error('Tакой персонаж уже существует в команде');
    } else {
      this.members.add(newCharacter);
    }
  }

  addAll(...newCharacters) {
    newCharacters.forEach((character) => this.members.add(character));
  }

  toArray() {
    this.members = [...this.members];
  }
}
