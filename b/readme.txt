
פקודה ליצירת מאמן חדש:
Endpoint: POST /api/coaches
Description: יצירת מאמן חדש והוספתו למאגר המאמנים.
Parameters:

coachName: שם המאמן
expertise: תחומי התמחות של המאמן
bio: תיאור על הניסיון והקריירה של המאמן
Response: המאמן החדש עם מזהה ייחודי.
פקודה לעדכון פרטי מאמן:
Endpoint: PUT /api/coaches/:coachId
Description: עדכון פרטי מאמן קיים במאגר המאמנים.
Parameters:

coachId: מזהה המאמן שיש לעדכן את פרטיו
coachName (אופציונלי): השם המעודכן של המאמן
expertise (אופציונלי): תחומי התמחות מעודכנים של המאמן
bio (אופציונלי): התיאור המעודכן על הניסיון והקריירה של המאמן
Response: המאמן שעודכן.
פקודה לקבלת רשימת הזמנות למאמן מסוים:
Endpoint: GET /api/coaches/:coachId/orders
Description: קבלת רשימת הזמנות שנעשו למאמן מסוים.
Parameters:

coachId: מזהה המאמן שמבקשים את רשימת ההזמנות שלו
Response: רשימת הזמנות המאמן מסוים.
פקודה לשיפור מחיר המנוי החודשי של השחקן:
Endpoint: PUT /api/users/:userId/subscription
Description: עדכון מחיר המנוי החודשי של השחקן.
Parameters:

userId: מזהה השחקן שמבקשים לעדכן את מחיר המנוי החודשי שלו
price: המחיר המעודכן של המנוי החודשי
Response: השחקן שהמחיר של המנוי החודשי שלו עודכן.