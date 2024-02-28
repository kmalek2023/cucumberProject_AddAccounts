package pages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabasePage2 {
	Connection connection;
	Statement statement;
	ResultSet resultSet;
	String columnValue;

	public String getDataFromDatabase(String columnName) {

		try {
			// set properties for MySQL
			Class.forName("com.mysql.cj.jdbc.Driver");
			// "jdbc:mysql:// + hostName: + portNumber/ + databaseName"
			String sqlUsername = "student";
			String sqlUrl = "jdbc:mysql://44.195.13.80:3306/august_2023";
			String sqlPasword = "Student@123";
			String sqlQuery = "SELECT * from login_data;";

			// Create connection to the DB
			connection = DriverManager.getConnection(sqlUrl, sqlUsername, sqlPasword);
			// Empower connection reference variable to execute queries
			statement = connection.createStatement();
			// Execute queries
			resultSet = statement.executeQuery(sqlQuery);

			while (resultSet.next()) {
				columnValue = resultSet.getString(columnName);
			}

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {

			if (resultSet != null) {
				try {
					resultSet.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}

			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}

		}
		return columnValue;
	}
}