# app

### A deep dive into Node js Back-End Development

- Node js, Express js, RESTful APIs & MongoDB with Mongoose .

### Model-View-Cotoller Architetcure: MVC

- Fat Model/thin Controllers
  Offload as much logic as possible into the models ands , keep the controllers as simple and leans as possible.

ERROR HANDLING USING EXPRESS

Node Programming has two type errors

- operational errors
- programming errors

OPERATIONAL ERRORS
These error depend on the user, or network or system. They have nothing to do with the bugs in the code.
we just need to handle them in advance

# ERROR HANDLING

## PRORAMMING ERRORS

These are dificult to handle ,they are introduced in the code by programmers.

#### someways they are introduced is by:

- Reading properties that are undefined
- Passing a number where an object is expected
- Using await without async
- Using req.query instead of req.body

# AUTHENTICATION

### How does a JWT work?

JWTs work by encoding a set of claims into a compact, URL-safe string. This string can be easily transmitted over the network and verified by the receiver.

- The issuer of the JWT creates a new JWT object and sets the claims that it wants to include in the token.

- The issuer signs the JWT object using a secret key or a public/private key pair.

- The resulting JWT is a compact, URL-safe string that can be transmitted over the network.

- The receiver of the JWT verifies the signature of the JWT using the secret key or the public key.

# JWT authentication example

## jwt is like a passoprt, real life example

- think about someone who want to travel they need a passwort.

one has a national id , all they need is input the information on the id into the system to comfirm identicatoin and there after the system analyses this info and finds the person corrrecty identifies , so they process a passport which the applicant applied for in relation to the identiication initals put and then receive it and only if it its accurate and then proceed to the immigratioin office where the passport is handed for comfirmation and then given the rights to board the plane to their destination.

## programig example

A user provides their credentials (e.g., username and password) and sends them to the server.

The server validates the credentials. If they are correct, the server generates a JWT containing the user's information (in a claim) and signs it with a secret key.

The server sends the JWT back to the user.

The user stores the JWT (usually in the browser's local storage or as a cookie) and includes it in the Authorization header in subsequent requests to the server. If you’re using Descope, you can change how the JWT is stored here, under Token Response Method.

When the user sends a new request with the JWT, the server decodes the JWT, and verifies its signature. If the token is valid, the server processes the request and returns the appropriate response.
