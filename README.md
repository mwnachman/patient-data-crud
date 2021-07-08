# patient-data-crud

I decided to combine the address fields into one to keep the UI simple and because there was no use for the address in the app.  In a real app, I would want to keep the fields (ie, street address, city, state, zip) separated out so they could be queried separately.

Start the mysql server and add a database called "medical", then quit mysql. To create the schema and seed the database, navigate to the `/data` directory and run `mysql --local-infile=1 --user="YOUR_USERNAME" --database="medical" -p < "./ddl.sql";` from the terminal, and enter your password.  Start the mysql server.

Copy the contents of `/app/config-template.json` to a new file called `/app/config.json` and update passwords as necessary.

From the `/app` directory, run `npm install` to install dependencies. From the same directory in two terminal windows, run `npm start` and `npm run serve` to start the web server and koa server.  Navigate to `localhost:8080` to interact with the app.

