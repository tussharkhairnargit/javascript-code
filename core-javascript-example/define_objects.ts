// Different ways to define objects in TypeScript

const obj1 = {
    name: "Object 1",
    value: 42,
    isActive: true,
};

const obj2 = Object.assign({}, obj1, {
    name: "Object 2",
    value: 84,
});

const obj3 = {
    ...obj1,
    name: "Object 3",
    value: 168,
};

class Obj5 {
    name: string | undefined;
    value: number | undefined;
    isActive: boolean | undefined;
}

const obj5 = new Obj5();
obj5.name = "Object 5";
obj5.value = 672;
obj5.isActive = true;

const obj4 = Object.create({});
obj4.name = "Object 4";
obj4.value = 336;
obj4.isActive = false;

const obj6 = Object.create(obj5);
obj6.name = "Object 6";
obj6.value = 1344;
obj6.isActive = false;
