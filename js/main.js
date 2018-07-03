// ============== MAIN
var myList = new List();

myList.insert(1);
myList.insert(2);
myList.insert(3);
myList.insert(4);
myList.insert(5);
myList.insert(6);
myList.insert(7);
myList.print();
myList.deleteNode(4);
myList.print();

const list = new List();
list.insert(11);
list.insert(13);
list.print();

myList.mergeLists(list);
myList.print();

const Person_1 = {
  Name: "Jhon",
  Age: 23,
};

const Person_2 = {
    Name: "David",
    Age: 27,
};

const objList = new List();
objList.insert(Person_1);
objList.insert(Person_2);

for(var i =0; i <= objList.getSize(); i++){
  document.write(objList.getNode(i).Name + ' ');
}
