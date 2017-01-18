// sengaja ada koma di bagian akhir
// rekomendasi: new Array kurang efisien
// dibanding []
//
// Inisialisasi array
//
console.log("Inisialisasi array")
console.log("==================\n")
var arrMembers = ['one','two',,'three',];
var arrMembersNew = new Array('one','two');
var multiArrMembersNew = new Array(
  ['0-1','0-2'],
  ['1-1','1-2']
);
var multiArray = [
  ['0-0','0-1','0-2', '0-3'],
  ['1-0','1-1','1-2', '1-3'],
  ['2-0','2-1','2-2', '2-3'],
  ['3-0','3-1','3-2', '3-3'],
  ['4-0','4-1','4-2', '4-3'],
];
var arrDiffType = new Array('abc',1,null,true);

// Mengakses komponen array
console.log("Mengakses komponen array")
console.log("========================\n")
console.log(arrDiffType[0]);
console.log(arrDiffType[2]);
console.log(Array.isArray(arrMembers));
console.log(Array.isArray(arrMembers[1]));
console.log(arrMembers[0]);
console.log(arrMembers[2]);
console.log(arrMembers[3]);
console.log(arrMembers[4]);
console.log(multiArray[0][2]);
console.log(multiArray[1][2]);

// panjang array
console.log("Menampilkan panjang array")
console.log("=========================\n")
console.log(arrMembers.length);
console.log(arrMembersNew.length);
console.log(multiArrMembersNew.length);
console.log(multiArray.length);

// String array

console.log("String array")
console.log("============\n")

console.log("Definisi")
console.log("--------\n")
var str = "Refactory JavaScript Ninja"
var str2 = "Baddass Mobile Programmer"
var words = str.split(" ");
var words2 = str2.split(" ");

console.log("split string ke array")
console.log("---------------------\n")
console.log(words.length);
for (var a = 0; a < words.length; ++a) {
  console.log(words[a]);
}
console.log(words.join());
console.log("Mencari elemen array")
console.log("--------------------\n")
var position = words.indexOf("Refactory");
if (position >= 0) {
  console.log("Found at " + position);
}
console.log("Menggabungkan elemen array")
console.log("--------------------------\n")
console.log(words.concat(words2));
console.log(words.splice(0,2));
console.log("Menambah elemen array di belakang")
console.log("----------------------------------\n")
words2.push("Indonesia");
console.log(words2);
console.log("Menambah elemen array di depan")
console.log("------------------------------\n")
words2.unshift("Number 1");
console.log(words2);
console.log("Menghapus elemen array di belakang")
console.log("-----------------------------------\n")
words2.pop()
console.log(words2);
console.log("Sort elemen array")
console.log("-----------------\n")
console.log(words2.sort());
console.log(words2.reverse());
console.log("Now, found out how to delete element(s) from array");

console.log("Map")
console.log("---\n")
var numbers = [1, 5, 10, 15];
var roots = numbers.map(function(x){
     return x * 2;
});

console.log("Now, found out about filter");

