# Server

## install dependencies 

1. Install dependencies  
`yarn`

2. Download and install postgresql

3. Add a user to postgres with the username `postgres` and password `postgres`

4. Create a database called painappdev  
`createdb painappdev`

5. Start redis locally  
`redis-server`

6. In the server folder, start the server  
`yarn start`

7. You can now navigate to localhost 4000 / graphql and run queries and mutations like: signup, login, logout, forgotPassword


## Inserting mock data for search functions after installing dependencies

1. Run command to insert mock data into tables (conditions, symptoms)  
`psql painappdev < conditions.sql`  
`psql painappdev < symptoms.sql`