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
  
  - Google as a search engine  
  Before Google, search engines were not really reliable (they couldn't even find themselves!)
    
    > Our main goal is to improve the quality of web search engines... However, the Web of 1997 is quite different... "Junk results"  often wash out any results that a user is interested in. In fact, as of November 1997, **only one of the top four commercial search engines finds itself** (returns its own search page in response to its name in the top ten results). One of the main causes of this problem is that the number of documents in the indices has been increasing by many orders of magnitude, but the user's ability to look at documents has not. **People are still only willing to look at the first few tens of results**.(how often do you go to page 2) Because of this, as the collection size grows, we need tools that have **very high precision** (number of relevant documents returned, say in the top tens of results). Indeed, we want our notion of "relevant" to only include the very best documents since there may be tens of thousands of slightly relevant documents. This very high precision is important even at the expense of recall (the total number of relevant documents the system is able to return). [2] 
    

  - Seaching for a book in the library catalogue [DiscoverEd](https://discovered.ed.ac.uk/)
  
  - Detecting spam emails - classification problem   
  
  ![alt text](http://www.revotas.com/blog/wp-content/uploads/2012/01/outlook-junk-e-mail.jpg "Spam")
  ![alt text](http://2.bp.blogspot.com/-xFzQcc77w2M/UBFM8zsVn_I/AAAAAAAAAQk/3EP4HUhGY1o/s1600/spam+classification.png "Spam classifier")    
  - Computer graphics.  
  - Amazon recommendation system
  - Postcode recognition - mail sorting
  - Real time face recognition on the airports

### Excercise (15 mins)
You are given an array of numbers: `[32, 16, 13, 9, 1, 99, 34, 64]`. In how many ways we can sort its elements? We are not interested here in using any programming language, just plain English. 

### Why do we need (better) algorithms? 
  - drives innovation - new algorithm may create a new business opportunity - [Blackford Analysis Ltd](http://www.research-innovation.ed.ac.uk/Entrepreneurs/Enterprise-showcase/Blackford-Analysis-Ltd)
  - there are a lot of problems that still need to be solved, so chellange and fun
  - helps improve the performance - competition! [Matrix multiplication algorithm](https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm)
   - computers are stupid, so they need exact instructions
    
### When algorithms go wrong 

  - TripAdvisor  
    > My first project at TripAdvisor was to add **new sort options** to the web page
that listed **all the hotels in a city**. It was a quick task—just enough to become
familiar with the codebase—and I was able to get it done and pushed to production
in my first week. Shortly thereafter, I was in my manager’s office for our first
one-on-one meeting, and I watched as he clicked on the hotel listings for Paris,
selected the new sort option, and waited. And waited. And waited. It took nearly
two hours for the page to load. Well, it was probably closer to two minutes, (...) 
Later that night—much later—I figured out that my fancy new code was
**making two database calls every time it compared hotels during the sorting process.
It takes on the order of n log n comparisons to sort n items, so for Paris,
which has roughly 2,000 hotels, that works out to roughly 40,000 database calls
for a single page load**. I might not have melted that day, but our database server
nearly did. [4]
  
  - appending the DOM
  - Pokemon app
  - [Tay (bot)](https://en.wikipedia.org/wiki/Tay_(bot))
      > Microsoft had not given the bot an understanding of inappropriate behavior.(...) 
      > Because these tweets mentioned its own account (@TayandYou) in the process, they appeared in the feeds of 200,000+ Twitter followers, causing annoyance to some.
  - T-shirt company called [Solid Gold Bomb](http://www.bbc.com/future/story/20150820-the-bad-things-that-happen-when-algorithms-run-online-shops)
      > Fowler had set up an algorithm to upload thousands upon thousands of T-shirt designs to his online stores. The designs were based on the infamous “keep calm and carry on” catchphrase, a slogan which was originally dreamt up as a way of preserving morale in the event of a Nazi invasion of Britain. Fowler had decided to “parody” it by getting a computer programme to come up with random variations such as “keep calm and dance on” or “keep calm and play football”.
      
   - Google Apologizes For [Tagging Photos Of Black People As ‘Gorillas’](http://www.huffingtonpost.com/2015/07/02/google-black-people-goril_n_7717008.html)
      > When Jacky Alciné checked his Google Photos app earlier this week, he noticed it labeled photos of himself and a friend, both black, as “gorillas.”  
      
   ![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/Google-tagging.png "Google tagging")

### Excercise (15 mins)
[TODO] Factorial or Fibonnacci function. 
    
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
4. [Hello, Startup: A Programmer's Guide to Building Products, Technologies, and Teams](https://www.amazon.co.uk/Hello-Startup-Programmers-Building-Technologies/dp/1491909900/ref=sr_1_1?ie=UTF8&qid=1499961796&sr=8-1&keywords=hello+startup)
5. [What Will Happen When Your Company’s Algorithms Go Wrong?](https://hbr.org/2017/04/what-will-happen-when-your-companys-algorithms-go-wrong)
6. [Google Apologizes For Tagging Photos Of Black People As ‘Gorillas’](http://www.huffingtonpost.com/2015/07/02/google-black-people-goril_n_7717008.html)
7. [Google apologises for Photos app's racist blunder](http://www.bbc.co.uk/news/technology-33347866)
