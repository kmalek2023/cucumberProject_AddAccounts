package pages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

//import java.sql.Connection;

public class DatabasePage {
	Connection connection;
	Statement statement;
	ResultSet resultSet;
	String columnValue;

	public String getDataFromDatabaseTable(String columnName) {

		// set properites for MySQL - invoke MySQL driver
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			String sqlURL = "jdbc:mysql://44.195.13.80:3306/august_2023";
			String sqlUsername = "student";
			String sqlPassword = "Student@123";
			String sqlQuery = "SELECT * FROM login_data;";
			
			connection = DriverManager.getConnection(sqlURL, sqlUsername, sqlPassword);
			statement = connection.createStatement();
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
