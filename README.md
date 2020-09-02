#  Aprendendo Português
By Renata and Minh.

## The Project

_Aprendendo Português_ is an app for learning Portuguese using the flashcard system and spaced repetition. It can be accessed in any browser, data is stored in a single file and there is no level of difficulty. You need to have an account in order to access the app. Once that is done, you can check your Dashboard daily and see your progress. Each word displayed will show how many times that word was guessed correctly and incorrectly.

## Links

* Live: [Aprendendo Português App]()
* Aprendendo Português Client: [GitHub](https://github.com/thinkful-ei-panda/spaced-repetition-minh-renata-client)

## Technology Used

Front-End: _ReactJS | CSS_

Back-End: _NodeJS | ExpressJS_

## API Documentation

| Method | Path               | Purpose                                                        |
| ------ | ------------------ | -------------------------------------------------------------- |
| POST   | /api/user          | Register a new user                                            |
| GET    | /api/language      | Get all the words the user is learning                         |
| GET    | /api/language/head | Get the guesses the user made                                  |
| POST   | /api/language/guess| Registers the guess the user made                              |
| POST   | /api/auth          | Checks the authorization                                       |
| POST   | /api/auth/token    | Checks for validation on username & password                   |

## Screenshots

![example]()

## To setup your local environment

If using user `dunder-mifflin`:

```bash
mv example.env .env
createdb -U dunder-mifflin spaced-repetition
createdb -U dunder-mifflin spaced-repetition-test
```

If your `dunder-mifflin` user has a password be sure to set it in `.env` for all appropriate fields. Or if using a different user, update appropriately.

```bash
npm install
npm run migrate
env MIGRATION_DB_NAME=spaced-repetition-test npm run migrate
```

And `npm test` should work at this point

## Configuring PostgreSQL

For tests involving time to run properly, configure your PostgreSQL database to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
   1. E.g. for an OS X, Homebrew install: `/usr/local/var/postgres/postgresql.conf`
   2. E.g. on Windows, _maybe_: `C:\Program Files\PostgreSQL\11.2\data\postgresql.conf`
   3. E.g  on Ubuntu 18.04 probably: '/etc/postgresql/10/main/postgresql.conf'
2. Find the `timezone` line and set it to `UTC`:

```conf
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
```

## Scripts

* Start the application `npm start`
* Start nodemon for the application `npm run dev`
* Run the tests mode `npm test`
* Run the migrations up `npm run migrate`
* Run the migrations down `npm run migrate -- 0`
