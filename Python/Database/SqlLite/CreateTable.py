# Import sqlite3:
import sqlite3 as db

# Create connection object for connecting to the db:
conn = db.connect('test.db')

# Create Cursor to allow use to transverse the db:
cursor = conn.cursor()

# Drop the table if it already exists:
cursor.execute("drop table if exists films")

#Create a Table:
cursor.execute("create table films(title text, year text, director text)")
print("Table created")

# Close the connection:
conn.close()


