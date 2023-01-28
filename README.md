# Social---Netwrok
Day 21 | Backend | Social network backend

There three things to learn through this project
1- Passport ( it has strategies ( it is like middlewares) for autheticatind user via Google or other 300 ways
2- Session ( log in log out sessions of which data we store in redis and database)
3- Coundnary ( basically to store the images works like google drive)

logging - we make the log of the user to see what is going right and what is wrong sometimes user may be some old version or it may be on 2g or something so he may not be able to login so we make the log using "MORGAN " we console log it and then 
we fix it in out next version.
 there are services like logdog to give you ui of all the data 
Create a .env file in config folder and add the following as key = value
PORT = 8000 (can be any port example: 3000)
DB_STRING = your database URI
CLOUD_NAME = your cloudinary cloud name
API_KEY = your cloudinary api key
API_SECRET = your cloudinary api secret