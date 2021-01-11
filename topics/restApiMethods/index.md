
# If you were to write an endpoint for checking if a resource exists, what path and method would you use?

The purpose of this question is to test the candidate’s knowledge of RESTful API standards. A common mistake when building endpoints is to use descriptive verbs in the path. For example:

GET /users/search
GET /posts/create
Instead, a truly RESTful path should only contain nouns—the method used on the endpoint should determine the action. For example:

POST /users (create a user model)
PUT /users/{id|slug} (replace a user model)
PATCH /users/{id|slug} (update part of a user model)
DELETE /users/{id|slug} (delete a user model)
GET /users/{id|slug} (retrieve a user model)
Determining whether a resource exists is an action that is frequently required in APIs, but is rarely done correctly according to the RESTful and industry standards. The commonly accepted way to determine if a resource exists, using the above “user” resource as an example, is like so:

HEAD /users/{id|slug}
This request will use the least amount of bandwidth as it will return no data, simply just a 200 (resource exists) or 404 (resource does not exist) HTTP status.