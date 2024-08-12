package database

import (
    "database/sql"
    "log"
    "os"

    _ "github.com/go-sql-driver/mysql"  // Update to MySQL driver
)

var DB *sql.DB

func InitDB() {
    connStr := os.Getenv("MYSQL_CONN")  // Update environment variable name
    var err error
    DB, err = sql.Open("mysql", connStr)  // Update driver name
    if err != nil {
        log.Fatalf("Error opening database: %v", err)
    }

    if err = DB.Ping(); err != nil {
        log.Fatalf("Error pinging database: %v", err)
    }

    log.Println("Connected to MySQL!")
}
