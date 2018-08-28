# Value Object Pattern

In the context of the enterprise application; attributes of an element of the model, classified as Value Object. In computer science, a value object is a small object that represents a simple entity whose equality is not based on identity: i.e. two value objects are equal when they have the same value, not necessarily being the same object. 

Value Objects are small objects with the maximum of two or three properties which are used quite widely with Entity Pattern. Their identity is based on their state rather than on their object identity. This way, you can have multiple copies of the same conceptual value object. For example, the Coordinate object could be part of an Entity of Location which describes Coordinate, we could do the same with Address; by creating an Object Value Address that could hold: address, country code, and postcode. 