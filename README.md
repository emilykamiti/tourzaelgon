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
