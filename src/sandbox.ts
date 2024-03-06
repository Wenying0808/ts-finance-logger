type StringOrNum = string | number;
type ObjWithName = {name: string, uuid: StringOrNum};

const logDetails = (uuid: StringOrNum, item: string) => {
        console.log(`${item} has a uuid of ${uuid}`);
};

logDetails(30, "Box");

const greet = (user: ObjWithName) => {
    console.log(`${user.name} says hello`);
};

greet({name:"wenying", uuid: 30});