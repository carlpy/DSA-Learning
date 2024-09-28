# DSA Learning  

In this repo you could find some of the data structures of the "A Common-Sense Guide to Data Structures and Algorithms: Level Up Your Core Programming Skills" from Jay Wengrow

  
# Algorithms 
These are some of the algorithms that you'll find through the book


### Bubble Sort

the elemental sorting algorithm (N(N-1)/2) O(N²) which is known for its simplicity rather than it's performance make n comparisons and n swaps per pass-through  

### Insertion Sort

It's more efficient than bubble sort N²/2 but still O(N²) ignoring constants lowering the number of swaps per pass-through having maximus one

 ### Selection Sort
 
this kind of sorting algorithm unlike the others before this has four types of steps removal, comparison, shifting and insertion the Big O analysis is for (N²+N) O(N²) in worst case escenarios but in average case escenarios Big O is (N²/2) still N²

# Data Structures
In this section you'll find built-in structures and abstract data structures that have many common use cases 

### Stack
Which motto defines by LIFO *Last in First Out*, which have several constraints which makes it particularly useful to store temporary values, such as the word editor you use, it underneath uses a stack to have a trace of every movement you make, and then, when you want it, get back to the *last movement* and then pop it out 


## How to run the examples

first run npm i to install the dependencies, nodemon in this case
```
npm i
```
then to run any example file
```
> nodemon src/the_file_to-run    
```