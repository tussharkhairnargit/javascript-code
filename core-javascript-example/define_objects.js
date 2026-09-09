const obj1 = {
    name: "Object 1",
    value: 42,
    isActive: true,
};

const obj1 = {};
obj1.name = "Object 1";
obj1.value = 42;
obj1.isActive = true;

const obj5 = new Object();
obj5.name = "Object 5";
obj5.value = 672;
obj5.isActive = true;

const obj2 = Object.assign({}, obj1, {
    name: "Object 2",
    value: 84,
});

const obj3 = {
    ...obj1,
    name: "Object 3",
    value: 168,
};

const obj4 = Object.create({});
obj4.name = "Object 4";
obj4.value = 336;
obj4.isActive = false;

const obj5 = Object.prototype.create({});
obj5.name = "Object 5";
obj5.value = 672;
obj5.isActive = true;

class MyObject {
    constructor(name, value, isActive) {
        this.name = name;
        this.value = value;
        this.isActive = isActive;
    }
}

const obj6 = new MyObject("Object 6", 1344, true);



