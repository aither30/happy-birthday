import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',       // Sesuaikan dengan host MySQL kamu
  user: 'root',            // Username MySQL
  password: 'password',    // Password MySQL
  database: 'nextjs_app',  // Nama database
});

export default db;
