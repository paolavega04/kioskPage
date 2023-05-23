import { Injectable } from '@angular/core';
import * as mysql from 'mysql2';

 

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private connection: mysql.Connection;

 

  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'metricas',
    });

 

    this.connection.connect((error) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database!');
      }
    });
  }

 

  executeQuery(query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

 

  closeConnection(): void {
    this.connection.end();
  }
}
