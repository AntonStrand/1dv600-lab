# Reflections assignment 2
## Tast 1
### Subtask A Identifying Use Cases
#### Planning
Create a use case diagram based on the vision, select one of the use cases and create a use case documentation/description of the .

##### Strategy
| Order | Task                                                                                                                   |
| :---: | ---                                                                                                                    |
| 1.    | Planning                                                                                                               |
| 2.    | Identify use cases                                                                                                     |
| 3.    | Create a use case diagram                                                                                              |
| 4.    | Write a use case document for one of the use cases                                                                     |
| 5.    | Create a activity diagram based on the use case documentation                                                          |
| 6.    | Write reflections                                                                                                      |

#### Reflection
I decided to make sure that I managed to do all the "shalls" before I did the "shoulds" therefore I will postpone the optional extra case document and activity until next iteration. I want to make sure that everything that needs to be included is done before I can continue with the optional tasks. The last time estimations have been way off after adding some extra contingency time to make sure that I manage to do everything within my given time frame. For this task, I decided to reduce the extra time a bit and try to get it closer to the actual time but with the risk of the time estimation would be tight. The estimation became a lot closer to the actual time spent. The use case diagram is including cases from the vision document as well.

___
<br><br>

### Subtask C Use Case Realization
#### Planning
Create a reversed engineered sequence diagram of the implementation of the use case "List books". 

##### Strategy
| Order | Task                                                                                                                   |
| :---: | ---                                                                                                                    |
| 1.    | Planning                                                                                                               |
| 2.    | Listing all parts of the sequence diagram                                                                              |
| 3.    | Creating the diagram                                                                                                   |
| 4.    | Writing the reflections                                                                                                |

#### Reflection
Due to the way I made my implementation, with a static JSON object containing an array of objects, the sequence diagram became a bit harder to do since there where nothing dynamically created and there for everything was made anonymously as well. The diagram looks a bit more as if the list were made in a sequence rather than as a static premade JSON object. But at the same time, it shows the essence of the things that are happening. The current implementation will be changed during the next iteration and the new implementation would probably make more sense as a sequence diagram. Otherwise, everything went smoothly and I manage to stick to the time estimation.
___

## Task 2 - Design
### Planning
Creating a sequence diagram of the implementation of loading the books from a xml-file. To be able to do this I need a good understanding of the current system and how to convert the xml into objects as well as how to format the object to fit the expected JSON-structure.

#### Strategy
| Order | Task                                                                                                                   |
| :---: | ---                                                                                                                    |
| 1.    | Planning                                                                                                               |
| 2.    | Go through the current system                                                                                          |
| 3.    | Look into how xml2js-module should be used                                                                             |
| 4.    | List object and methods that will be used in the implementation                                                        |
| 5.    | Create the sequence diagram                                                                                            |
| 6.    | Write reflection                                                                                                       |

### Reflection
Since the last subtask was quite similar to this one I could use the time from the other task as a template for estimating the time for this task. Most of the time was spent on researching the xml2js-module and to get to know the system a bit more. But after finding all the necessary information it was quite easy to list the needed steps to implement the functionality. When it was done it went even faster to convert it into a sequence diagram. The time estimation went quite well too. It's testimony that experience help when it comes to estimating time.
___

## Task 3
### Subtask A - Implement list books from XML
#### Planning
First follow the sequence diagram and then implement delete book. Since the point of this task was to try implement a feature without planning I won't write more than this.


#### Reflection
The implementation went really smooth and I could follow my sequence diagram exactly. The problem was first when I was going to save the XML again after deleting a book. I couldn't restore it to it the original structure. Due to the implementation everything still worked as it was supposed to but the XML structure was altered. In the end, I decided to implement it in another way than the sequence diagram just to keep the XML design. Designing and implementing listing the book took about 2h in total. Comming up with a new solution, rewrite the implementation, implement delete book and including all the time debugging took about 1,5h. If I had researched a bit more about how the module handled the conversion from object to XML during the design phase I would have saved a lot of time when implementing delete book.
___

## Reflections of the general planning and strategy
The plan was to work in iterations and first do the required tasks and later go back and do the optional. But due too it took a longer time to prepare for the test as well as I needed to work on the other course I had to prioritize and just stick to the required tasks. On the other hand, if I had worked in a more linear way I would probably have done all of the tasks because I would have had to prioritized differently to be able to finish in time.
