## **Laravel School Management System** 

**LAVSMS** is developed for educational institutions like schools and colleges built on Laravel 8

**SCREENSHOTS** 

**Dashboard**
<img src="https://i.ibb.co/D4T0z6T/dashboard.png" alt="dashboard" border="0">

**Login**
<img src="https://i.ibb.co/Rh1Bfwk/login.png" alt="login" border="0">

**Student Marksheet**
<img src="https://i.ibb.co/GCgv5ZR/marksheet.png" alt="marksheet" border="0">

**System Settings**
<img src="https://i.ibb.co/Kmrhw69/system-settings.png" alt="system-settings" border="0">

**Print Marksheet**
<div style="clear: both"> </div>
<img src="https://i.ibb.co/5c1GHCj/capture-20210530-115521-crop.png" alt="print-marksheet">

**Print Tabulation Sheet & Marksheet**
<img src="https://i.ibb.co/QmscPfn/capture-20210530-115802.png" alt="tabulation-sheet" border="0">

<hr />  

There are 7 types of user accounts. They include:
 
Administrators (Super Admin & Admin)
- Librarian
- Accountant
- Teacher
- Student
- Parent

**Requirements** 

Check Laravel 8 Requirements https://laravel.com/docs/8.x

**Installation**
- Install dependencies (composer install)
- Set Database Credentials & App Settings in dotenv file (.env)
- Migrate Database (php artisan migrate)
- Database seed (php artisan db:seed)

**Login Credentials**
After seeding. Login details as follows:

| Account Type  | Username | Email | Password |
| ------------- | -------- | ----- | -------- |
| Super Admin | cj | cj@cj.com | cj |
|  Admin | admin | admin@admin.com | cj |
|  Teacher | teacher | teacher@teacher.com | cj |
|  Parent | parent | parent@parent.com | cj |
|  Accountant | accountant | accountant@accountant.com | cj |
|  Student | student | student@student.com | cj |

#### **FUNCTIONS OF ACCOUNTS** 

**-- SUPER ADMIN**
- Only Super Admin can delete any record
- Create any user account
 
**-- Administrators (Super Admin & Admin)**

- Manage students class/sections
- View marksheet of students
- Create, Edit and manage all user accounts & profiles
- Create, Edit and manage Exams & Grades
- Create, Edit and manage Subjects
- Manage noticeboard of school
- Notices are visible in calendar in dashboard
- Edit system settings
- Manage Payments & fees

**-- ACCOUNTANT**
- Manage Payments & fees
- Print Payment Receipts

**-- LIBRARIAN**
- Manage Books in the Library

**-- TEACHER**
- Manage Own Class/Section
- Manage Exam Records for own Subjects
- Manage Timetable if Assigned as Class Teacher
- Manage own profile
- Upload Study Materials

**-- STUDENT**
- View teacher profile
- View own class subjects
- View own marks and class timetable
- View Payments
- View library and book status
- View noticeboard and school events in calendar
- Manage own profile

**-- PARENT**
- View teacher profile
- View own child's marksheet (Download/Print PDF)
- View own child's Timetable
- View own child's payments
- View noticeboard and school events in calendar
- Manage own profile

### **Contributing**

Your Contributions & suggestions are welcomed. Please use Pull Request

### **Security Vulnerabilities**

If you discover a security vulnerability within LAV_SMS, please send an e-mail to CJ Inspired via cjay.pub@gmail.com. All security vulnerabilities will be promptly addressed.

***Please Note*** that some sections of this project are in the work-in-progress stage and would be updated soon. These include:

- The Noticeboard/Calendar in the Dashboard Area
- Librarian/Acountant user pages
- Library Resources/Study Materials Upload for Students

### **Contact [CJ INSPIRED]**
- Phone : +2347068149559
