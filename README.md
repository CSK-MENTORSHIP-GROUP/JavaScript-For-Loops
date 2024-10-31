# Loops in Programming

Loops are structures that allow you to repeat a block of code multiple times, often until a certain condition is met. Instead of writing the same code repeatedly, loops enable you to automate tasks, making your code shorter and more efficient.

## Types of Loops

1. *For Loop*
2. *While Loop*
3. *Do-While Loop*
4. *For...Of Loop*
5. *For...In Loop*

---

### 1. For Loop

The *for loop* executes a block of code as long as a specified condition is true. This loop is especially useful when you know exactly how many times you want the code to run.

#### Syntax
```javascript

for (initialization; condition; increment/decrement) {
     Code to be executed
}
```
 ### 2-WHILE LOOP
 The while loop executes a block of code as long as a specified condition is true.
 this loop evaluates the condition before each iteration and continues running as long as the condition remains true.
 The loop terminates when the condition becomes false.

 ### syntax of for loop
```javascript
 while (condition) {
    Code block to be executed
}
```
### 3- DO-WHILE LOOP
A Do-While loop is  type of loop  that is similar to the while loop, but with one key difference:
the do-while loop guarantees that the block of code inside the loop will be executed at least once,
regardless of whether the condition is initially true or false.
The condition is checked after the code has run.

syntax of do-while loop
```javascript
do {   
         code block to be executed 
 } while (condition);
```
 ### 4-FOR-OF LOOP
  Used to go through each value in an iterable, like an array or string.
  iterable: Any object that can be iterated over (e.g., arrays, strings, maps).

  syntax of for-of loop 
 ```javascript 
  for ( variable of Iterable ) {
     Code block to be executed
}
```

### 5-FOR-IN LOOP
A *for-in loop*   allows you to iterate over the enumerable properties of an object. 
This loop is used to access the keys of an object one by one.

syntax of for-in loop
```javascript
for (let i in obj1) {
    Prints all the keys in
    obj1 on the console
    console.log(i);
}
```
