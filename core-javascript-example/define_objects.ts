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

const obj4 = Object.create({});
obj4.name = "Object 4";
obj4.value = 336;
obj4.isActive = false;

class Obj5 {
    name: string | undefined;
    value: number | undefined;
    isActive: boolean | undefined;
}

const obj5 = new Obj5();
obj5.name = "Object 5";
obj5.value = 672;
obj5.isActive = true;

const obj.pro


