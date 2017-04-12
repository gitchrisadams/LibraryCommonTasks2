# Import Sqlite:
import sqlite3 as db

# Connect to the database:
conn = db.connect('test.db')

# Create cursor to be able to transvers the database:
cursor = conn.cursor()

# Insert values into Table:
cursor.execute('insert into films values("Annie Hall","1977","Woody Allen")')
cursor.execute('insert into films values("The Godfather","1972","Francis Ford Coppola")')

# Commit the query:
conn.commit()

# Close the connection:
conn.close()

