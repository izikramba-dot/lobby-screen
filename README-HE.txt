מסך לובי LIVE — התקנה

הקבצים מוכנים ל-Cloudflare Pages:
- public/index.html
- public/cleanliness.jpg
- functions/api/ynet.js
- functions/api/weather.js

למה צריך העלאה לשרת?
כותרות ynet מגיעות ב-RSS. דפדפן שפותח index.html כקובץ מקומי נחסם לעיתים על ידי CORS,
ולכן Functions מביאות את ה-RSS בצד השרת. כך החדשות יכולות להתעדכן אוטומטית.

העלאה:
1. צרו פרויקט Cloudflare Pages.
2. העלו את כל תיקיית lobby-live / או חברו Git.
3. ודאו ש-public היא תיקיית הקבצים הסטטיים.
4. לאחר הפריסה תקבלו כתובת https.
5. פתחו את הכתובת ב-Xiaomi Mi Box במצב מסך מלא / Kiosk.
6. הגדירו פתיחה אוטומטית של הכתובת בעת הפעלת הסטרימר.

עדכונים:
- שעה: כל שנייה
- מזג אוויר: כל 10 דקות
- ynet: כל 3 דקות
- רענון מלא: כל 6 שעות

הערה:
השימוש בכותרות ynet הוא דרך ערוץ ה-RSS הציבורי של ynet.
