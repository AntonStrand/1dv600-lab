# Knowledge - Things you should know after completing the theme

## Questions for you to answer for the Modeling and Design Themes 

1. ### Explain and exemplify static and dynamic models.

   __Static Modeling__ is used to represent the static constituents of a Software such as:
    1. Classes
    2. Objects
    3. Interfaces
    4. Their relationship with each other

    Static Modeling include class and object diagrams.

    __Dynamic Modeling__ represents the behavior of the static constituents, their relationships and interfaces. And also to represents the interaction, workflow, and different states of the static constituents in a software.

    1. Interaction Diagram
    2. Object Diagram
    3. Activity Diagram
    4. Sequence Diagram
    5. Communication Diagram
___

2. ### Provide a brief account for all UML diagrams
    [Reference](https://www.smartdraw.com/uml-diagram/#UMLTypes)
   #### Structural UML diagrams (Static)
  | Diagram name | Description |
  | --- | --- |
  | Class diagram | Classes represent an abstraction of entities with common characteristics. Associations represent the relationships between classes. |
  | Package diagram | Away to group classes into related groups to minimize dependencies between packages. |
  |Object diagram _instance diagram_ | Object diagrams describe the static structure of a system at a particular time. They can be used to test class diagrams for accuracy. |
  | Component diagram | Describes the organization and wiring of the physical components in a system. A component is a logical unit block of the system, a slightly higher abstraction than classes. |
  | Composite structure diagram | Composite structure diagrams show the internal part of a class. (See 16)|
  | Deployment diagram | Show the hardware of the system and the software in that system. |
  | Profile diagram | Part of UML 2 - (rarely used) |

    #### Behavioral UML diagrams (Dynamic)

    1. Activity diagram
        * Describe the steps performed in a UML use case.
        * Demonstrate the logic of an algorithm.
        * Illustrate a business process or workflow between users and the system.
        * Simplify and improve any process by clarifying complicated use cases.
        * Model software architecture elements, such as method, function, and operation.

    2. Sequence diagram - _Interaction diagram_
        * It shows the interactions between the different objects in the system, and between actors and the objects in a system and in which order these accur.

    3. Use case diagram
        * Shows how the system interacts with the actors and use cases.

    4. State diagram
        * Describe the states an object or interaction might be in as well as transition between states. 
        * It shows how the system respond to external and internal events.
        * State machine represents the various states of an object that change in response to events during its lifetime. Here, a state refers to the condition of an object during its existence in memory.

    5. Communication diagram (Collaboration diagram) - _Interaction diagram_
        * Collaboration diagram describes the organization of objects in a system taking part in the message flow.
        * Similar to sequence diagram but doesn't care about time and instead using a numbering scheme to describe the order of events.

    6. Interaction overview diagram - _Interaction diagram_
        * A collection of _interaction diagrams_ and the order they happen. (Interaction timeline)

    7. Timing diagram - _Interaction diagram_
        * They represents the behavior of objects in a given time frame.
        * The time the takes for a process to completed.
        * The time each process is active in the system.
        * Away to get an overview of where the time is spent.
___

3. ### Are UML class diagrams static or dynamic models?
    Static.
___

4. ### Describe the purpose of the UML Use Case diagram?
    An easy overview of the functionality of the system using actors and use cases.

    - Makes it easier to discuss the goal of the project with both clients and developers.
    - Representing the goals of system - user interactions
    - Defining and organizing functional requirements in a system
    - Specifying the context and requirements of a system
    - (Modeling the basic flow of events in a use case) <- Might be a part of Activity diagram.
___

5. ### Enumerate and explain the key parts of a UML Use Case diagram.
    - Actors - See below.
    - Use cases - Specific functionality in the system.
    - Relationship between these two. (Association)
    - System bounderies - Show the scope of the system.
___

  #### Extra notes about use cases in general
    - __Actors__ - the users that interact with a system. An actor can be a person, an organization, or an outside system that interacts with your application or system. They must be external objects that produce or consume data.
    - __System__ - a specific sequence of actions and interactions between actors and the system. A system may also be referred to as a scenario.
    - __Goals__ - the end result of most use cases. A successful diagram should describe the activities and variants used to reach the goal.

  #### Use case description / documentation

    __Initiation__
    __Pre__ and __post__ conditions
    __Primary__ flow of events
    __Alternative__ and __secondary__ flow of events
    Use case __relationships__

    Flows of events
      - Primary path to achive the goal 
      - Alternative (Secondary) path to achive the goal
      - Exeptional paths terminate without achiving the goal
       
    Use case is to tell a story of how to fullfil a goal, or a set of stories of both failing and reaching.

  #### List of parts in a use case description / documentation
    1. Primary actor        : The Actor(s) using the system to achieve a goal. Might be the one that triggers the scenario.
    2. Secondary actor      : Actors that the system needs assistance from to achieve the primary actor’s goal.
    3. Initiation / Trigger : What will start the use case.
    4. Pre condition        : The condition(s) for the use case to happened.
    5. Post condition       : The goal of the use case.
    6. Main scenario        : List of activities if everything goes as expected.
    7. Secondary scenario   : List of activities of possible alternative scenarios.
___

6. ### Discuss and exemplify how UML distinguishes objects from classes.
    Classes is the parts of the system while objects are instances of classes and providing a snap shot of the system while executing.
___

7. ### Enumerate the UML object diagrams (instance)
    All diagrams that contains instances / objects to explain the current state.

    1. Object diagram
    2. Sequence diagram
    3. State diagram (State machine diagram)
    4. Communication diagram (Collaboration diagram)
    5. Timing diagram
___

8. ### What are the elements of the UML object diagram?
    1. __Objects__ - are instances of a class. If a car is a class, a 2007 Nissan Altima is an object of a class. The objects in the class “Parents” are your specific parents, for instance, Elaine and Gary.
    2. __Class titles__ - the specific attributes of the class. In the family tree object diagram, this is the name, gender, and age of the family members. These can be listed as items on the object, or even in the properties of the object itself (such as color).
    3. __Class attributes__ - a rectangle with two tabs that indicates a software element.
    4. __Links__ - these are the lines connecting one object to another. 
___

9. ### What is a conceptual model?
    Identify the important objects, refine them, and define their relationships and behavior and draw them in a simple diagram. (an abstract definition for the objects)
    All UML diagrams are a conseptual model.
___

10. ### Describe key properties of UML associations and how they are modeled.
    1. Name - Describe the associations
    2. Roles - Specifice the role that the classifiers has to each other. (Used in design purpose)
      1. Navigation (direction) - How the classifiers associate to each other.
      2. Multiplicity - Number of instances.
      3. Name - Name of the role

    They are modeled with lines and arrows.

    _Aggregations_ and _compositions_ are subsets of association mostly used in the analyse phase.
___

11. ### What do associations in UML class diagrams represent?
    The relation between classes.
___

12. ### Discuss the goals with the Unified Modeling Language (UML)
    By using a unified language it's easier to communicate between companies and clients. Everyone is on board.
    UML is used to make it easier to create and maintain a system.
___

13. ### What are the goals of UML?
    See answer above.
__

14. ### What are the notations used in associations?
    Extra information about the associations.

    _See -> 10. Describe key properties of UML associations and how they are modeled._
    1. Navigable - Indicated by an open arrow in the end of the association.
    2. Unnavigable - Indicated by a small x in the end of the association.
    3. Unspecified navigability - Shown by not decorating the association with either an arrow or the letter x
___

15. ### Discuss how associations can be “implemented” in programming languages
    The association will explain the relation between the classifiers.

    _E.g._ - The associations can show the inherence between classes.
    _E.g._ - Association roles can explain the need of instances of other classes within a class.
___

16. ### How do UML model interfaces and abstract classes? Provide an example of the notation.
    * The class and interface model has three compartment 
      1. First compartment represents the name of the class / interface.
      2. Second compartment represents the attributes of the class / interface.
      3. Third compartment represents operation (methods) of the class / interface.

    * Name, Attributes and Functions/Methods.

    * The interface is distiguage using _<<Interface>>_ or the name is written in _italic_.
___

17. ### What are the usages of the UML sequence diagram?
    To show how the system interact to use case over time. Near code implementation. Make a smooth transition from use case to implementation.
___
18. ### What is the dynamic behavior of a system?
    How the system changes during runtime. (State)
___
19. ### What is OO analysis?
    The analysis phase identifies the objects, their relationship, and behavior using the conceptual model (an _abstract_ definition for the objects).

    In the __object-oriented analysis__, we …

    1. __Elicit__ _requirements_: Define what does the software need to do, and what’s the problem the software trying to solve.
    2. __Specify__ _requirements_: Describe the requirements, usually, using use cases (and scenarios) or user stories.
    3. __Conceptual model__: Identify the important objects, refine them, and define their relationships and behavior and draw them in a simple diagram.
___

20. ### What is OO design?
    In design phase, we describe these objects (by creating class diagram from conceptual diagram — usually mapping conceptual model to class diagram), their attributes, behavior, and interactions.

    In the __object-oriented design__, we …

    1. __Describe the classes__ and their relationships using class diagram.
    2. __Describe the interaction__ between the objects using sequence diagram.
    3. __Apply__ software design principles and design patterns.
___

21. ### What is a system-of-system?
    A complex system that is seperated into smaller systems. Each system should work on their own.
___

22. ### What does the UML class diagram capture?
    It shows all the classes and their relation.
___

23. ### What is an activity diagram?
    An activity diagram is a graphical representation of a use case documentation/description. (Scenarios)
___

24. ### Exemplify how activity diagrams can model flow-of-events.
    Using associations (lines) and conditions.

      - Action: A step in the activity wherein the users or software perform a given task. In Lucidchart, actions are symbolized with round-edged rectangles.
      - Decision node: A conditional branch in the flow that is represented by a diamond. It includes a single input and two or more outputs.
      - Control flows: Another name for the connectors that show the flow between steps in the diagram.
      - Start node: Symbolizes the beginning of the activity. The start node is represented by a black circle.
      - End node: Represents the final step in the activity. The end node is represented by an outlined black circle.

    #### Flows of events
      - Primary path to achive the goal 
      - Alternative (Secondary) path to achive the goal
      - Exeptional paths terminate without achiving the goal
___

25. ### Discuss the stereotypes used in Robustness diagrams
    - Boundary - for a system boundary (for example, a Login screen)
    - Control - to specify an element is a controller of some process (as in the Model-View-Controller pattern)
    - Entity - the element is a persistent or data element
___

26. ### What are the differences between analysis and design?
    The distinction between analysis and design is often described as “what Vs how”.
    Analysis is used to define the problems and the design is how to solve them.
___

27. ### What are the purposes for modeling robustness diagrams?
    To validate use cases and indentify missing classifiers / entity.
___

28. ### What is a "generalization" in UML class diagrams and when is it used?
    Inherentence.
    Simply put, this describes the relationship of a parent class (generalization to its subclasses (specializations). Also known as “is-a” relationship.
    Open arrow head.
___

29. ### Explain why an object may be considered to be a state machine?
    An object/instance can, and probably will, change state during the execution. 
___

30. ### Discuss and exemplify how programming language constructs are mapped onto sequence diagram constructs?
    You can and should use class and instance names as well as method/function names. Names as loops and iterations are also a part of the sequence diagram.

    name:String is a instance of the class String called name.
    setName() is a method name.
___

31. ### What is the difference between a class diagram and an object diagram?
    A class diagram shows all the static classes and their relationship while the object diagram shows a snap shot of the system with "real" data and a deeper illustration of the algorithm.
___

32. ### What is the usage of an activity diagram?
    1. Demonstrate the logic of an algorithm.
    2. Describe the steps performed in a UML use case.
    3. Illustrate a business process or workflow between users and the system.
    4. Simplify and improve any process by clarifying complicated use cases.
    5. Model software architecture elements, such as method, function, and operation.
___

33. ### In what ways are systems-of-systems different from pure software systems?
    A pure system doesn't rely on another system to function. 
___

## Abilities - Things you should be able to do on your own after completing the themes

Diagrams are UML diagrams.

1. Create a Use Case model with actors, use cases, and simple <use> dependencies
2. Provide detailed use case descriptions with pre and post conditions, initiation, flow(s)-of-events, and termination(s)
3. Specify object-interactions in sequence diagrams, including basic selection and iteration blocks.
4. Describe basic activities with Activity diagrams, including choices and iterations.
5. Describe flows-of-events with activity or sequence diagrams.
6. Create basic Class diagrams with classes and associations
7. Model class hierarchies with interfaces and "generalizations"
8. Create robustness diagrams with Boundary, Control, and Entity objects
9. Map responsibilities in robustness diagrams onto classes in class diagrams.

Besides creating, specifying, describing, model, map, you must always be able to explain andmotivate your models.


## Glossary
| Word           | Description |
| ---            | ---  |
| Classifier     | Represents a class, a type and/or an abstraction. |
| UML            | Unified Modeling Language |
| Actor          | An actor specifies a role played by a user or any other system that interacts with the subject (system). |
| Association    | A __structural relationship__ describing connections between two or more things. Graphically represented as a solid line withoptional stick arrow representing navigation. |
| Dependency     | A __semantic relationship__, in which a change in one thing (the independent thing) may cause changes in the other thing (thedependent thing). This relationship is also known as “using” relationship. Graphically represented as dashed line with stick arrow head.|
| Generalization | Is a __generalization-specialization relationship__. Simply put, this describes the relationship of a parent class (generalization to its subclasses (specializations). Also known as “is-a” relationship.|
| Use case | Use case is to tell a story of how to fullfil a goal, or a set of stories of both failing and reaching. It shows the interaction between a system and it’s environment (users or systems) within a particular situation. |


## FURPS+
FURPS is an acronym representing a model for classifying software quality attributes (functional and non-functional requirements):

- __Functionality__ - Capability (Size & Generality of Feature Set), Reusability (Compatibility, Interoperability, Portability), Security (Safety & Exploitability)
- __Usability (UX)__ - Human Factors, Aesthetics, Consistency, Documentation, Responsiveness
- __Reliability__ - Availability (Failure Frequency (Robustness/Durability/Resilience), Failure Extent & Time-Length (Recoverability/Survivability)), Predictability, (Stability), Accuracy (Frequency/Severity of Error)
- __Performance__ - Speed, Efficiency, Resource Consumption (power, ram, cache, etc.), Throughput, Capacity, Scalability
- __Supportability__ (Serviceability, Maintainability, Sustainability, Repair Speed) - Testability, Flexibility (Modifiability, Configurability, Adaptability, Extensibility, Modularity), Installability, Localizability



# Software design
## Knowledge

1. ### Software architecture and its role in software design.
    Software architecture give us the possibility to consider alternatives and evaluate to pick the ones that is most suitible for the requirements early on without having software.

    Targets risks.

    It's not a phase but something that is continues during the project's lifetime.

    ### System decomposition
    By dividing the system into substystems until each subsystem is easy to grasp, it becomes easier to design and plan.
    Then we can find the best "pieces" and join them back together to form the system.
    To make it easier to join the parts the decision needs to be made before decomposition.

      - How is the system divided in to subsystems?
      - Do we have all the parts?
      - Do the parts fit together?

    System concerns - (Global)
      - Functionality
      - System charactaristics and qualities (E.g. How can we guarantee performance and security in our system?)
      - System quality trade-offs (E.g perfomance vs. security) What is good enough?

    This will result in system integrity (the quality of state of being undivided). This mean that all the subsystems will fit together and work as one system.
___

2. ### Architectural decisions, patterns, and mechanism
    #### Architectural decisions
    Targets risks. Make critical system decisions early on to minimize both risks and the effect.
    There is rarely any guidence on which decisions you should make. Comes down to experience and domain.

    Decisions mitigate Coordination risks - Early decisions effects later decisions and this will (hopefully) allow all the pieces fit together.

    #### Architectual reasoning - decision making
    Enginering principles
    - Compare and pick the solution that best fits with the requirements.
    - Trying to predict the future and how well the decision will perform in production.

    __Important to document decision and why (rational to that decision)__
    It will help later on if changes might be made.

    #### Design decisions - locality
    __Global__ decisions effects the whole system. (system wide)(Critical system characteristics)
    __Local__ decisions effects a smaller part.

    Global decision effects local decisions and must there for be made first. It can be hard to define which decision that are global and which are local. Comes with experience. 

    ##### Example global decisions
    - Implement technology - Prescribes an architecture structure. (JS != Java, needs different things)
    - Decomposition into components
    - Component organization - Architecture patterns
    - Principle for quality concerns. (E.g. security -> session management, authentication (might be a local decision), user management)
___

3. ### Design activities and artefacts
    Mapping use cases to models
4. Design patterns, types of patterns and their role in software design
5. UML class models, Robustness diagrams, UML sequence diagrams
6. Use case Realizations
7. ### What is software design?
    * Purpose: 
      - Describe and understand the solution.
      - Create a model of the solution using the __language and technology__ of the implementers. Close to implementation languange and API, frameworks, middleware, etc.
    * Models a system of communicating objects performing different tasks.
    * Decisions regarding Implementation technology!
      - Language
      - Database
      - Etc.
    * It's about communication within the development team so we can align the team's effort.
___

## Abilities (theory, not practical)

1. Identify subsystems and allocate responsibilities
2. Recognize and apply architectural patterns
3. Understand the roll of architectural mechanisms and how they are applied

## Abilities

Create use case realizations with robustness diagrams, identify object responsibilities
Classify (create classes and class diagrams) based on identified responsibilities
Develop sequence diagrams to verify the robustness of class models
Apply the aforementioned abilities iteratively and incrementally