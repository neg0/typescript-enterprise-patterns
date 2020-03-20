# Async/Await Pattern

I created a real world example of processing the authorisation of bank transaction for each user. 
Here We authorise user transaction first by sending a fake HTTP call to User Microservice (Emulated using 
`setTimeout`) and then by making another fake api call to external API of card issuer and then we return 
the promise.

__Async/Await__ pattern is a great way to organise and order your promise calls with an efficient error 
inspection thought `try/catch` instead of traditional `then` and `catch` and avoid callback hell.  