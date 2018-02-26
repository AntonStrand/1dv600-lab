# Task 1 - Test plan
## The test objective for this iteration

## Test objects

## Test cases
### 1.1.1. List existing books
All books that are in ```books.xml``` should be presented in a list. The title and author should be shown.

#### Pre conditions
The content in ```books.xml``` must be replaced with the content in ```test/data/111books.xml```.
The server must be running.

#### Steps
1. Go to [http://localhost:9090/](http://localhost:9090/).
2. Click on ```Books``` in the menu.

#### Expected output
| Expected output                                                                     | Pass  | Fail  |
| ---                                                                                 | :---: | :---: |
| 4 books are listed                                                                  |       |       | 
| Each book has a ```Title``` and ```Author```                                        |       |       | 
| All book information should correspond to the items in ```books.xml```              |       |       | 

#### Comments
---
---
---

### 1.2.1. List books without any saved books
If there isn't any saved books in the system no books should be listed.

#### Pre conditions
The content in ```books.xml``` must be replaced with the content in ```test/data/121books.xml```.
The server must be running.

#### Steps
1. Go to [http://localhost:9090/](http://localhost:9090/).
2. Click on ```Books``` in the menu.

#### Expected output
| Expected output                                                                     | Pass  | Fail  |
| ---                                                                                 | :---: | :---: |
| No books are listed                                                                 |       |       | 
| The list headline with ```Title``` and ```Author``` is visible                      |       |       | 

#### Comments
||
|---|
||
||
||
