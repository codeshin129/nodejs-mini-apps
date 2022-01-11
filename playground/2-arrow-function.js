// standard way
const event1 = {
  name: "birthday party",
  printGuestList: function () {
    console.log("Guest list for " + this.name);
  },
};
//event1.printGuestList();
//result: Guest list for birthday party

// not working
const event2 = {
  name: "birthday party",
  printGuestList: () => {
    console.log("Guest list for " + this.name);
  },
};
// event2.printGuestList();
// result: Guest list for undefined
// reason1: arrow function inside an object does not have the access to "this" as a reference to the object
// reason2: it's a method

// works fine ES6
const event3 = {
  name: "birthday party",
  printGuestList() {
    console.log("Guest list for " + this.name);
  },
};
//event3.printGuestList();
// result: Guest list for birthday party

// not working
const event4 = {
  name: "birthday party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach(function (guest) {
      console.log(guest + " is attending " + this.name);
    });
  },
};

//event4.printGuestList();
// result:
// Guest list for birthday party
// Andrew is attending undefined
// Jen is attending undefined
// Mike is attending undefined

// works fine
const event5 = {
  name: "birthday party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};
event5.printGuestList();
