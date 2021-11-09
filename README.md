# LIBRARY MANAGEMENT SOFTWARE.
Author - 
        Hemalatha K            
        Yogesh Kumar R V        : https://github.com/yogivirat
Checkout our Team Github        : https://github.com/Hermoine-Harry @Hermoine-Harry

This is a Open Source Desktop Application for School/College Library developed purely from Webkits(HTML, CSS, JS) and electron js. MySQL is used as database.

# Test Version
NOTE : You can use the test Version of this Software ( only for Windows User) by following these steps.

            1. Download this zip file "LMS-1.0.0-win"
            2. Download this sql file "lms-database.sql"

            3. Database Configuration. 

                i.      Open Your MySQL Workbench.
                ii.     Go to Server -->  Data Import.
                iii.    Select "Import from Self-Contained File".
                iv.     locate this "lms-database.sql" file.
                v.      Under "Default Schema to be Imported To" , Click new and Name the schema as "lms".
                vi.     Once you imported the database in your computer, under command section, Paste this Command
                            "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'AUTO@2019';"           **
                            
                            (Note ** : Since You are using this test version, it's neccesary to change your password to 'AUTO@2019' in order to acccess the data in lms database. 
                                       Therefore, Whenever you need to open your Workbench you need to enter "AUTO@2019" to get into database.

                                        Once You get satisfied using this Test version , You can changeback to your password by pasting this Command
                                   "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '@@@@@';"
                                   
                                   @@@@- Enter your password
                                    )
            4. Extract the "LMS-1.0.0-win" zip file and open LMS Application. Your LMS Application will be Opened.

            5. For Login Credential, Checkout this username and password
                        a. ADMIN 
                                Username : 2050502020   
                                Password : 2001-01-18
                        b. STUDENT
                                Username : 2050502020   
                                Password : 2001-01-18
                        c. STAFF
                                Username : 61119
                                Password : 1979-05-20
            
            6. You can Use this Software as reference for your LMS system.
        

# For Developers
Note : You can change the code according to your own interest. You can follow these steps

                1. Clone this Respository.
                2. Database Configuration. 

                i.      Open Your MySQL Workbench.
                ii.     Go to Server -->  Data Import.
                iii.    Select "Import from Self-Contained File".
                iv.     locate this "lms-database.sql" file.
                v.      Under "Default Schema to be Imported To" , Click new and Name the schema as "lms".

                3. Open this Project folder in your Computer. Right click your mouse and click on Open hyper here ( If you don't have, its recommended to install Hyper in computer)
                4. In The terminal, Initialise Npm and install these dependencies by typing these command one by one :
                            i.          npm init -y
                            ii.         npm i -D eletron@latest
                            iii.        npm i bootstrap jquery myql
                            iv.         npm i -D electron-builder
                5. Once you completed these steps, you are ready to change the code
            (NOTE :  Make sure you check every js file in this project and change into your database password in the database connection code) 
                6. to run the code, type 
                                    npm start      
                                    in your terminal.

                7. Once you completed your changes, Follow electron-builder to build your desktop project by following the steps in the given link
                        https://www.electron.build/
                         

                        
                            
Thank you for checking out our Project, Feel free to say if any mistakes made.....Happy Coding !!!
