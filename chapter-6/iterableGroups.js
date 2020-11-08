/*
Make the Group class from the previous exercise (the groups exercise) iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

class GroupIterator {
  constructor(group){
    this.group = group.group;
    this.i = 0;
  }

  next(){
    let value = this.group[this.i];
  
    let done = this.group[this.i] ? false : true;

    ++this.i;

    return {
      value,
      done
    }
  }
}

class Group {
  constructor(){
    this.group = [];
  }

  add(val){
    !this.group.some(el => el === val) && this.group.push(val);
  }

  delete(val){
    this.group.indexOf(val) !== -1 && this.group.splice(this.group.indexOf(val), 1);
  }

  has(val){
    return this.group.some(el => el === val);
  }

  print() {
    console.log(this.group);
  }

  static from(obj){
    let group = new Group();
    obj[Symbol.iterator] && obj.forEach(el => group.add(el));
    return group;
  }

  [Symbol.iterator](){
    return new GroupIterator(this);
  }
}

// Testing code
let group = new Group();
group.add(2);
group.add(1);

let iterator = group[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
