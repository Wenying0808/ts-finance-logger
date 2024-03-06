"use strict";
const logDetails = (uuid, item) => {
    console.log(`${item} has a uuid of ${uuid}`);
};
logDetails(30, "Box");
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
greet({ name: "wenying", uuid: 30 });
