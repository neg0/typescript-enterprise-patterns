# Prototype Pattern

In software engineering Prototype pattern refers to creating duplicate object while keeping performance in mind. This type of design pattern comes under creational pattern as this pattern provides one of the best ways to create an object.

It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects. This pattern is used to:

>* Avoid subclasses of an object creator in the client application, like the factory method pattern does.
>* Avoid the inherent cost of creating a new object in the standard way (e.g., using the 'new' keyword) when it is prohibitively expensive for a given application.

This pattern involves implementing a prototype interface which tells to create a clone of the current object. This pattern is used when creation of object directly is costly. For example, an object is to be created after a costly database operation. We can cache the object, returns its clone on next request and update the database as and when needed thus reducing database calls.