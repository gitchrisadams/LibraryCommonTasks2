# Import Sqlite:
import sqlite3 as db

# Connect to the database:
conn = db.connect('test.db')

# Retrieve data from db by row:
conn.row_factory = db.Row

# Create cursor to be able to transvers the database:
cursor = conn.cursor()

# Select everything from the films table:
cursor.execute("select * from films")

# Fetch all the rows in db:
rows = cursor.fetchall()

# Loop through the rows to display the data:
for row in rows:
    print("%s %s %s" % (row["title"], row["year"], row["director"]))

# Commit the query:
conn.commit()

# Close the connection:
conn.close()

