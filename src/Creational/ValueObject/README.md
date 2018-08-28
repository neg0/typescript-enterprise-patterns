# Value Object Pattern

In the context of the enterprise application; attributes of an element of the model, classified as Value Object. 

Value Objects are small objects with the maximum of two or three properties which are used quite widely with Entity Pattern. Their identity is based on their state rather than on their object identity. This way, you can have multiple copies of the same conceptual value object. For example, the Coordinate object could be part of an Entity of Location which describes Coordinate, we could do the same with Address; by creating an Object Value Address that could hold: address, country code, and postcode. 