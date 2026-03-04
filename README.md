 ১.JSX-JavaScript XML এর সংক্ষিপ্ত রূপ। এটি একটি সিনট্যাক্স এক্সটেনশন যা React এ ব্যবহার করা হয়। JSX এর সাহায্যে আমরা HTML এর মতো কোড সরাসরি JavaScript এর মধ্যে লিখতে পারি। 
 JSX ব্যবহার করলে কোড লেখা সহজ ও পরিষ্কার হয়।
 এটি React কে বলে দেয় কোন DOM উপাদানগুলো রেন্ডার করতে হবে।
 এটি JavaScript এর সাথে HTML এর একসাথে ব্যবহার করতে দেয়।  
উদাহরণ:
const element = <h1>হ্যালো, React!</h1>;

২. Props:
Parent কম্পোনেন্ট থেকে Child কম্পোনেন্টে প্রেরণ করা হয়।
শুধুমাত্র parent কম্পোনেন্ট দ্বারা পরিবর্তন করা যায়।
ডেটা passing ও configuration এর জন্য।
Immutable.

State:
কম্পোনেন্টের নিজের অভ্যন্তরীণ ডেটা।
কম্পোনেন্ট নিজের মধ্যে পরিবর্তন করতে পারে ।
UI এর dynamic behavior নিয়ন্ত্রণের জন্য ।
Mutable.

৩. useState হল একটি React হুক যা State পরিচালনা করার জন্য ব্যবহৃত হয়। এটি ফাংশনাল কম্পোনেন্টের ভিতরে state তৈরি এবং পরিবর্তনের সুযোগ দেয়।

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // 0 হল initial state
  return (
    <div>
      <p>আপনার কাউন্ট: {count}</p>
      <button onClick={() => setCount(count + 1)}>বাড়াও</button>
    </div>
  );
}
count = state এর বর্তমান মান।
setCount = state update করার ফাংশন।
useState(0) = initial value 0.

৪. React এ state sharing করার জন্য সাধারণত নিম্নলিখিত পদ্ধতি ব্যবহৃত হয়:

i. Lifting State Up:
State কে common parent কম্পোনেন্টে রাখা।
Parent থেকে props এর মাধ্যমে child কম্পোনেন্টে পাঠানো।

ii. Context API :
Global state তৈরি করা যা পুরো component tree তে access করা যায়।

iii. State Management Library:
যেমন Redux, Zustand ইত্যাদি ব্যবহার করে centralized state রাখা।

উদাহরণ (Lifting State Up):
function Parent() {
  const [data, setData] = useState('Hello');
  return <Child message={data} />;
}
function Child({ message }) {
  return <h1>{message}</h1>;
}

৫. React এ ইভেন্ট হ্যান্ডলিং HTML এর মতো, তবে কয়েকটি পার্থক্য আছে:
i. Event এর নাম camelCase ফরম্যাটে হবে।
ii. ইভেন্ট হ্যান্ডলার একটি ফাংশন হতে হবে, string নয়।

উদাহরণ:
function Button() {
  const handleClick = () => {
    alert('বাটন টিপা হয়েছে!');
  };
  return <button onClick={handleClick}>Click Me</button>;
}

i. onClick হল ইভেন্।ট
ii. handleClick হল ফাংশন যা কল হবে ইভেন্ট ঘটলে ।
