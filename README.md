# Assign-1-L2

** What are some differences between interfaces and types in TypeScript?

In TypeScript, both interface and type are used to define the shape of an object, but there are some differences in capabilities and usage. Here's a comparison:

1.  Interface: An interface is a structure in TypeScript that defines what properties an object can have and what their type is.
    Example:
    interface User {
    name: string;
    age: number;
    }
    here Person is an interface, which describes an object whose name is a string and age is a number.

2.  Type is an alias or pseudonym that defines a type with a name. It can represent not only objects, but also primitive, union, intersection, tuple, etc.
    Example:
    type UserType = {
    name: string;
    age: number;
    };

Here, the exact same object type is specified using type.


** What is the use of the keyof keyword in TypeScript? Provide an example.

In TypeScript, the keyof keyword is used to get a union of the property names (keys) of a type as a string (or string literal) union. It's a type operator that helps make your code more flexible and type-safe, especially when working with generic types or creating utility types.

Example:
        interface Person {
        name: string;
        age: number;
        isStudent: boolean;
        }
        If you write:
            type PersonKeys = keyof Person;
        Then PersonKeys will be:type PersonKeys = "name" | "age" | "isStudent";

keyof extracts the keys of a type as a union.Useful in generic programming and type-safe functions.Helps prevent bugs when accessing object properties dynamically.
