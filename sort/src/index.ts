import { NumbersCollection } from "./collections/NumbersCollection";
import { CharacterCollection } from "./collections/CharacterCollection";
import { LinkedList } from "./collections/LinkedListCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const string = new CharacterCollection("ZYXW");
string.sort();
console.log(string.data);

const linkedList = new LinkedList();
linkedList.add(400);
linkedList.add(-10);
linkedList.add(-30);
linkedList.add(3);
linkedList.sort();
console.log(linkedList.print());
