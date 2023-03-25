// একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে 
// সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।

const arrow1 = x=> x/5;
// console.log(arrow1(20));
// তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 


// console.log(arrow2(5,5));
// এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

const arrow3 = (x,y,z)=> x*y*z;
// console.log(arrow3(2,2,2));


const arrow2 = (x,y)=> {
    const first=(x+2);
    const second=(y+2);
    const result= first*second;
    return result


};

// console.log(arrow2(2,5));

const array = [2,4,5,8,4,2,3,9];
const arrayMap = array.map(multiply=> multiply*5)
// console.log(arrayMap);

const arrayFilter = array.filter(num => num%2==0);
// console.log(arrayFilter);
// একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const products =[
    {phone:'mPhone', price: 51000},
    {phone:'jPhone', price: 5000},
    {phone:'tPhone', price: 2000}


]
const findArray = products.find(product=>product.price===5000);
// console.log(findArray);

const person ={
    name :'A',
    age:22,
    job:{
        post:"front end",
        salary:15000,
    }

}
const {name,age}=person;
const abir = name;
// console.log(abir);

const disArray = [3,5,6,7];
const [third] =[ disArray[2]];
const third3 = third;
// console.log(third3);
// তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

function threePara(x,y,z=7){
    const sum= x+y+z;
    return sum;
}
console.log(threePara(2,5));
