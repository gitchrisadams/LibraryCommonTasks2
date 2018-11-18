## Install dependencies:
```
pip install -r requirements.txt
```

## Setting up MYQL
Google setting up MYSQL for your O.S.
For Ubuntu 16 search Google for: "Set up mysql on ubuntu 16"

### These two websites are useful:
#### Setting up mysql:
https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-16-04

#### Setting up Django w/ Mysql: (If links are outdated, Google for similar)
https://www.digitalocean.com/community/tutorials/how-to-create-a-django-app-and-connect-it-to-a-database

#### Important steps are:
Get mysql setup and create a user or use root.
Create a database and table to store users.
Get this information into your /etc/mysql/my.conf or what is defined in settings.py in Databases area.

### MySQL crash course:
#### Login as root:
mysql -u root -p
Enter password, now you'll be in mysql, type exit to exit mysql

#### In the MYSQL command promt:
#### showing all databases:
```
show databases;
```

#### Use a database/get into it:
```
use whateverDatabaseNameHere;
```

#### Once in database, show tables:
```
show tables;
```

#### Showing data in a table:
```
select * from TableNameHere
```

## Run the Django server
python manage.py runserver
