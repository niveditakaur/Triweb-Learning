# MongoDB

This folder contains four text files with examples and explanations of common MongoDB operations and features. Each file provides instructions and code snippets to help you understand and implement the specified MongoDB functionalities.

1. **CRUD.text**

This file demonstrates the four basic CRUD operations using MongoDB.

* Create
* Read
* Update 
* Delete

<p align="center">
<img alt="crud" src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/b4326bb1-f9fc-436e-80d6-54282f0649a1" width='700'>
</p>

2. **Aggregation and $lookup.txt:** This file illustrates aggregation and the $lookup operation in MongoDB.

   ```bash
   db.customer.aggregate([
      {
         $lookup: {
            from: "books",
            localField: "favbooks",
            foreignField: "_id",
            as: "FavouriteBookData"
         }
      }      
   ])

<p align="center">
<img alt="agl" src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/6344c474-4fb4-493d-9432-a4b284c46330" width='700'>
</p>

3. **Validation.txt**
This file demonstrates document validation and ordered/unordered insertion.

* ORDERED INSERTION: Insert multiple documents with validation, following a specified order.

* UNORDERED INSERTION: Insert multiple documents with validation, without enforcing a specific order.

#### *Example unordered insertion*

<p align="center">
<img alt="unordered" src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/391b0a29-1bdb-4b27-bf37-51aca012d1bc" width='700'>
</p>

4. **inOperator.txt**

This file demonstrates the use of the $in and $nin operators in MongoDB queries.

<p align="center">
<img alt="unordered" src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/b64768b2-8aa4-4ab8-a340-78279996c980" width='700'>
</p>