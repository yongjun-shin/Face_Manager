# STEP 1
import pymysql

# STEP 2: MySQL Connection 연결
con = pymysql.connect(host='3.35.156.217', user='popobaboya', password='1234',
                       db='face_manager', charset='utf8') # 한글처리 (charset = 'utf8')
 
# STEP 3: Connection 으로부터 Cursor 생성
cur = con.cursor()
 
# STEP 4: SQL문 실행 및 Fetch
sql = "SELECT * FROM Users"
cur.execute(sql)

#sql = "INSERT INTO Users (id, password, username, email, created_at) VALUES ('1003', '3456', 'james', 'gmail', '2023-06-14')"
sql = "INSERT INTO `face_manager`.`Users` (`id`, `password`, `username`, `email`, `created_at`) VALUES ('1002', '2345', 'chunsung', 'gmail', '2023-06-14')"
cur.execute(sql)
con.commit()

# 데이터 Fetch
rows = cur.fetchall()
print(rows)     # 전체 rows

# STEP 5: DB 연결 종료
con.close()