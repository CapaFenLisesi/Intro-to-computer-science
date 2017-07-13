# Introduction to Computer Science
This is a repo for the gentle introduction to Computer Science for our students at Code Your Future in Glasgow. 

# Things to do before the class
* Set up an account at [Hackerrank](https://www.hackerrank.com/)
* Watch the video [Work at Google — Example Coding/Engineering Interview](https://www.youtube.com/watch?v=XKu_SEDAykw)
* You are given an array of numbers: `[32, 16, 13, 9, 1, 99, 34, 64]`. Try to think in how many ways you can sort its elements. We are not interested here in using any programming language, just plain English. The following videos may help you to understand the idea behind the pseudocode: 
  - [Algorithms in pseudocode and flow diagrams](https://www.youtube.com/watch?v=XDWw4Ltfy5w)
  - [5 Minutes to Code: Programming Basics "Pseudocode"](https://www.youtube.com/watch?v=HhBrkpTqzqg)
  - [What's an algorithm? - David J. Malan](https://www.youtube.com/watch?v=6hfOvs8pY1k)

# Algorithms

### What is an algorithm?  
  > Intuitively speaking, an algorithm is a step-by-step procedure (a “recipe”) for
  > performing a task (of solving a problem). [1]
  
### Do we REALLY need to learn about algorithms and data structures?

  Yes and no. 
  
### Excercise (10 mins)
How can we create an algorithm to make a tea? 
  
### Everyday problems that need good algorithms
  
  - Navigation - find the shortest path from A to B, say using [Google Maps](https://www.google.co.uk/maps/dir/Edinburgh/Glasgow/@55.938524,-3.9995526,10z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4887b800a5982623:0x64f2147b7ce71727!2m2!1d-3.188267!2d55.953252!1m5!1m1!1s0x488815562056ceeb:0x71e683b805ef511e!2m2!1d-4.251806!2d55.864237) to get the best route from Edinburgh to Glasgow. Visualise the search with [Dijkstra algorithm](https://qiao.github.io/PathFinding.js/visual/)  . Also check [route finding](https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/a/route-finding).

  - Online banking relies on public key cryptography - how to be sure that nobody can see your communication with the bank. How would you send a password over insecure network? Padlock and box exchange. Also, watch [RSA encryption: Step 1](https://www.khanacademy.org/computing/computer-science/cryptography/modern-crypt/v/intro-to-rsa-encryption) on Khan Academy
  
  - Computer graphics.  
  
  - Google as a search engine  
  Before Google, search engines were not really reliable (they couldn't even find themselves!)
    
    > Our main goal is to improve the quality of web search engines... However, the Web of 1997 is quite different... "Junk results"  often wash out any results that a user is interested in. In fact, as of November 1997, **only one of the top four commercial search engines finds itself** (returns its own search page in response to its name in the top ten results). One of the main causes of this problem is that the number of documents in the indices has been increasing by many orders of magnitude, but the user's ability to look at documents has not. **People are still only willing to look at the first few tens of results**.(how often do you go to page 2) Because of this, as the collection size grows, we need tools that have **very high precision** (number of relevant documents returned, say in the top tens of results). Indeed, we want our notion of "relevant" to only include the very best documents since there may be tens of thousands of slightly relevant documents. This very high precision is important even at the expense of recall (the total number of relevant documents the system is able to return). [2] 
    

  - Seaching for a book in the library catalogue [DiscoverEd](https://discovered.ed.ac.uk/)
  
  - Detecting spam emails - classification problem   
  
  ![alt text](http://www.revotas.com/blog/wp-content/uploads/2012/01/outlook-junk-e-mail.jpg "Spam")
  ![alt text](http://2.bp.blogspot.com/-xFzQcc77w2M/UBFM8zsVn_I/AAAAAAAAAQk/3EP4HUhGY1o/s1600/spam+classification.png "Spam classifier")  
  - Amazon recommendation system
  
  - Real time face recognition on the airports

### Why do we need (better) algorithms? 
  - drives innovation - new algorithm may create a new business opportunity - [Blackford Analysis Ltd](http://www.research-innovation.ed.ac.uk/Entrepreneurs/Enterprise-showcase/Blackford-Analysis-Ltd)
  - there are a lot of problems that still need to be solved, so chellange and fun
  - computers are stupid, so they need exact instructions
  - helps improve the performance - competition! [Matrix multiplication algorithm](https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm)
    
### Excercise (15 mins)
You are given an array of numbers: `[32, 16, 13, 9, 1, 99, 34, 64]`. In how many ways we can sort its elements? We are not interested here in using any programming language, just plain English. 
    
### What are characteristics of a good algorithm? 
  - efficient (speed and space)
  - correct
  - simple
### How do we evaluate algoritms? 

https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation

# Abstract Data Types

1. What is a data structure?
  > Data structure is a systematic way of organising data and
  > making it accessible in certain ways. [1]

### Hackerrank

# Sorting

### Hackerrank

# Searching

### Hackerrank

# Resources
1. [Spam classification example](https://www.youtube.com/watch?v=4rdqvEtu8Ts) by [Andrew Ng](https://en.wikipedia.org/wiki/Andrew_Ng) 

# Bibliography

1. http://www.inf.ed.ac.uk/teaching/courses/inf2b/algnotes/note01.pdf
2. [The Anatomy of a Large-Scale Hypertextual Web Search Engine](http://infolab.stanford.edu/~backrub/google.html) by Sergey Brin and Lawrence Page
3. [The PageRank Citation Ranking: Bringing Order to the Web](http://ilpubs.stanford.edu:8090/422/1/1999-66.pdf)
