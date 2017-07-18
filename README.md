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

### What is an algorithm?  (5 min)
  > Intuitively speaking, an algorithm is a step-by-step procedure (a “recipe”) for
  > performing a task (of solving a problem). [1]  
  
  >Informally, an algorithm is any well-defined computational procedure that takes
some value, or set of values, as **input** and produces some value, or set of values, as
**output**. An algorithm is thus a sequence of computational steps that **transform** the
input into the output. [10]
  
### Do we REALLY need to learn about algorithms and data structures? (5 min)

  Yes and no. 
  
### Excercise (10 mins)
How can we create an algorithm to make a tea? 

### Excercise (10 mins)
Solve Simple Array Sum on [Hackerrank](https://www.hackerrank.com/challenges/simple-array-sum/problem)  
  
### Everyday problems that need good algorithms (20 min)
  
  - **Navigation** - find the shortest path from A to B, say using [Google Maps](https://www.google.co.uk/maps/dir/Edinburgh/Glasgow/@55.938524,-3.9995526,10z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4887b800a5982623:0x64f2147b7ce71727!2m2!1d-3.188267!2d55.953252!1m5!1m1!1s0x488815562056ceeb:0x71e683b805ef511e!2m2!1d-4.251806!2d55.864237) to get the best route from Edinburgh to Glasgow. Visualise the search with [Dijkstra algorithm](https://qiao.github.io/PathFinding.js/visual/)  . Also check [route finding](https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/a/route-finding).

  - **Online banking** relies on public key cryptography - how to be sure that nobody can see your communication with the bank.  
    How would you send a password over insecure network?  
    Padlock and box exchange analogy.  
    Also, watch [RSA encryption: Step 1](https://www.khanacademy.org/computing/computer-science/cryptography/modern-crypt/v/intro-to-rsa-encryption) on Khan Academy
  
  - **Google** as a search engine  
  Before Google, search engines were not really reliable (they couldn't even find themselves!)
    
    > Our main goal is to improve the quality of web search engines... However, the Web of 1997 is quite different... "Junk results"  often wash out any results that a user is interested in. In fact, as of November 1997, **only one of the top four commercial search engines finds itself** (returns its own search page in response to its name in the top ten results). One of the main causes of this problem is that the number of documents in the indices has been increasing by many orders of magnitude, but the user's ability to look at documents has not. **People are still only willing to look at the first few tens of results**.(how often do you go to page 2) Because of this, as the collection size grows, we need tools that have **very high precision** (number of relevant documents returned, say in the top tens of results). Indeed, we want our notion of "relevant" to only include the very best documents since there may be tens of thousands of slightly relevant documents. This very high precision is important even at the expense of recall (the total number of relevant documents the system is able to return). [2] 
    

  - **Seaching for a book** in the library catalogue [DiscoverEd](https://discovered.ed.ac.uk/)  
    ![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/Alma_books.png "Alma books")  
    ![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/Alma_users.png "Alma users")  
  
  - **Detecting spam emails** - classification problem   
  
  ![alt text](http://www.revotas.com/blog/wp-content/uploads/2012/01/outlook-junk-e-mail.jpg "Spam")
  ![alt text](http://2.bp.blogspot.com/-xFzQcc77w2M/UBFM8zsVn_I/AAAAAAAAAQk/3EP4HUhGY1o/s1600/spam+classification.png "Spam classifier")    
  - **Postcode recognition**  
    [Ever wonder how mail is sorted?](https://www.youtube.com/watch?v=bB7dhE_TW9g) @1:00  
    
    ![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/HandwrittenDigits1.png "Handwritten digits")  
    
    ![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/sample02.png "Handwritten digits enclosed")  
    
    [Automatic Number Plate Recognition](https://www.police.uk/information-and-advice/automatic-number-plate-recognition/)
    
  - Real time **face recognition** on the airports  
    Is there a cat on this image?  
    ![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/binary.png "Binary image")   
    And now?   
    ![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/hex.png "Hex image")    
    How about now?  
    ![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/mick.jpg "Mick's image")  
    [HEX to Binary](http://www.online-toolz.com/tools/hex-binary-convertor.php)
  - **Computer graphics**  
  - **Amazon recommendation system**  

### Excercise (15 mins)
You are given an array of numbers: `[32, 16, 13, 9, 1, 99, 34, 64]`. In how many ways we can sort its elements? We are not interested here in using any programming language, just plain English.   

![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/sorting_problem.png "Sorting problem") 

### Why do we need (better) algorithms? (10 min)
  - drives innovation - new algorithm may create a new business opportunity - [Blackford Analysis Ltd](http://www.research-innovation.ed.ac.uk/Entrepreneurs/Enterprise-showcase/Blackford-Analysis-Ltd)
  - there are a lot of problems that still need to be solved, so chellange and fun
  - helps improve the performance - competition! [Matrix multiplication algorithm](https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm)
   - computers are stupid, so they need exact instructions
    
### Excercise (15 mins)

Arrays - DS on [Hackerrank](https://www.hackerrank.com/challenges/arrays-ds/problem)   

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
    
### What are characteristics of a good algorithm? (5 min)
  - efficient (speed and space)
  - correct
  - simple  
  
### How do we evaluate algoritms? (10 min)

  The running time of a program depends on a number of factors such as:
  - The input given to the program ([input size example](https://github.com/Michael-Antczak/Intro-to-computer-science/tree/master/examples/size_of_input))
  - The running time of the algorithm on which the program is based.  
  - The quality of the implementation and the quality of the code generated by
the compiler 
  - The machine used to execute the program  
  
 ### [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation)  
 
 ![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/big_O.png "Big Oh") 
 
 ![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/asymptotic_notation.png "Asymptotic notation") 
  
  Also check the [StackOverFlow](https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation)
  
  **Functions used in complexity analysis**  
  
  ![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/complexity_functions.png "Functions comparison") 

https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation

# Abstract Data Types

1. What is a data structure?
  > Data structure is a systematic way of organising data and
  > making it accessible in certain ways. [1]
  
Check the basic data types on [FreeCodeCamp](https://medium.freecodecamp.org/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b) 

  
### Stack

[Example JS implementation](https://codepen.io/beaucarnes/pen/yMBGbR?editors=0012)  
Maximum Element on [Hackerrank](https://www.hackerrank.com/challenges/maximum-element/problem)  

### Queue

[Example JS implementation](https://codepen.io/beaucarnes/pen/QpaQRG?editors=0011)   

### Hackerrank

# Sorting

**Sorting algorithm** is an algorithm that puts elements of a list in a certain order, i.e. numerical or alphabetical. Check [sort function in JavaScript](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).  

**Sorting algorithms** [animation](https://www.toptal.com/developers/sorting-algorithms)  

### [Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort)  
  (sorting cards)

```
for i = 1 to length(A)
    j ← i
    while j > 0 and A[j-1] > A[j]
        swap A[j] and A[j-1]
        j ← j - 1
    end while
end for
```

[Insertion sort JS code](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/examples/size_of_input/sorting/insertion_sort.js)

### [Selection sort](https://en.wikipedia.org/wiki/Selection_sort)  

Selection sort on [Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/selection-sort-pseudocode)

```
SelectionSort(A)
// GOAL: place the elements of A in ascending order
1  n := length[A]
2  for i := 1 to n
3     // GOAL: place the correct number in A[i]
4     j := FindIndexOfSmallest( A, i, n )
5     swap A[i] with A[j]
      // L.I. A[1..i] the i smallest numbers sorted
6  end-for
7  end-procedure


FindIndexOfSmallest( A, i, n )
// GOAL: return j in the range [i,n] such 
//       that A[j]<=A[k] for all k in range [i,n]
1  smallestAt := i ;
2  for j := (i+1) to n
3     if ( A[j] < A[smallestAt] ) smallestAt := j
      // L.I. A[smallestAt] smallest among A[i..j]
4  end-for
5  return smallestAt
6  end-procedure
```

### [Merge sort](https://en.wikipedia.org/wiki/Merge_sort)  
An example of [Divide and conquer algorithm](https://en.wikipedia.org/wiki/Divide_and_conquer_algorithm)

Visualisation of the merge sort  
![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/Merge-sort-example-300px.gif "Merge sort")   
By Swfung8 - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=14961648

### [Quicksort](https://en.wikipedia.org/wiki/Quicksort)

```
algorithm quicksort(A, lo, hi) is
    if lo < hi then
        p := partition(A, lo, hi)
        quicksort(A, lo, p – 1)
        quicksort(A, p + 1, hi)

algorithm partition(A, lo, hi) is
    pivot := A[hi]
    i := lo - 1    
    for j := lo to hi - 1 do
        if A[j] ≤ pivot then
            i := i + 1
            if A[j] < pivot then
                swap A[i] with A[j]
    if A[hi] < A[i + 1] then
        swap A[i + 1] with A[hi]
    return i + 1
```

[Visualise](http://me.dt.in.th/page/Quicksort/)

### Comparison 
![alt text](https://github.com/Michael-Antczak/Intro-to-computer-science/blob/master/resources/choosing_sorting_algorithm.png "Choose sorting algorithm") 

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
8. [Sorting Algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm) at Wikipedia
9. [Sorting Algorithms](https://brilliant.org/wiki/sorting-algorithms/) at Brilliant
10. [Introduction to Algorithms](https://www.amazon.co.uk/Introduction-Algorithms-Thomas-H-Cormen/dp/0262533057/ref=sr_1_1?ie=UTF8&qid=1500301567&sr=8-1&keywords=introduction+to+algorithms) by Thomas H. Cormen
11. [Selection sort pseudocode](http://www.cs.miami.edu/home/burt/learning/Csc517.051/) from the University of Miami
12. [Big Oh notation on StackOverflow](https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation)
13. [10 Common Data Structures Explained with Videos + Exercises](https://medium.freecodecamp.org/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b)
