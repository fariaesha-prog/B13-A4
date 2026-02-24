<!--
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: The main difference between getElementById and getElementsByClassName is in ID it selects a singular Id which cant be changed later meaning its unique in the code. It also return element object and if theres nothing it returns null. It must be unique..But in getElementsByClassName all the elements are inside a class instead of id and it can be reused. It also returns empty collection instead of null

similarly the difference between querySelector and querySelectorforAll is that one returns single element while the other returns every elements in the code

2. How do you create and insert a new element into the DOM?
Ans: create by using document.createElement() and adding  by using element.innerText = ""
we can also use let and use parent-child method

3. What is Event Bubbling? And how does it work?
Ans: Event bubbling is used to target element in the parent element until it reaches the document which is the root

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is a method where instead of doing event bubbling multiple times we use a single event and attach it to the parent element. Its useful cuz it takes less time, easier to manage and gives clean code

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: the main difference is one prevent the default behavior of an element but it doesnt stop event bubbling and the other stops the bubbling while also preventing
-->