# Import sqlite3:
import sqlite3 as db

# Create connection object for connecting to the db:
conn = db.connect('test.db')

# Create Cursor to allow use to transverse the db:
cursor = conn.cursor()

# Delete item from database:
cursor.execute("delete from films where year = 1972")
print("Data successfully deleted.")

# Commit the query:
conn.commit()

# Close database:
conn.close();


