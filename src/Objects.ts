// In JS object can change dynamically so their shape can change throughout the program
// we will mention the property name of the object
// we donot want to modify the value so we write readonly
let employee: {
  readonly id: number;
  name?: string; //making this property optional
} = { id: 1 };
employee.name = "Anupama";

// NOTE: If we donot make property optional then we have to pass the value of that variable like name:"" while initilaize the object
// employee.id = 0; // will get error bcz we try to modify a readonly property
