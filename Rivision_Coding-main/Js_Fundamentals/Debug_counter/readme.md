Explanation : 
Fix in the given Code : 
In the given code , inside settimeout , they used normal function as a callback function . but we write entire settimeout inside the object method , and we are accesing the count by using this . So here what is happeing is , for a normal function this keyword will refers to the it's memory phase only . So for every normal function there is not value with count varibale to access with this keyword . that's why we are not getting correct output here.

Solution : 
Instead of using normal function as a callback functions in the settimout , we can use arrow functions as a callback functions . Here arrow functions will access the count varible from it's lexical scope object method .

