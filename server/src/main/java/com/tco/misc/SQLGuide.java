package com.tco.misc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.HashMap;
import java.lang.Exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SQLGuide {

	private static final Logger log = LoggerFactory.getLogger(SQLGuide.class);

	private final static String TABLE = "world INNER JOIN continent ON world.continent = continent.id INNER JOIN country ON world.iso_country = country.id INNER JOIN region ON world.iso_region = region.id";
	private final static String COLUMNS = "world.name,world.municipality,region.name AS region,country.name AS country,continent.name AS continent,latitude,longitude";
	private static Integer found;

	public static Places queryDatabase(String match, Integer limit) {
		try {
			found = Database.found(match);
			Places results = Database.places(match, limit);
			return results;
		} catch (Exception e) {
			log.error("queryDatabase exception -> {}", e.getMessage());
      return null;
		}
	}

  public static Integer getFound() {
    return found;
  }

	static class Database {
		static Integer found(String match) throws Exception {
			String sql = Select.found(match);
			try (
				// connect to the database and query
				Connection conn = DriverManager.getConnection(Credential.url(), Credential.USER, Credential.PASSWORD);
				Statement query = conn.createStatement();
				ResultSet results = query.executeQuery(sql)
			) {
				return count(results);
			} catch (Exception e) {
				throw e;
			}
		}

		private static Integer count(ResultSet results) throws Exception {
			if (results.next()) {
				return results.getInt("count");
			}
			throw new Exception("No count results in found query.");
		}


		static Places places(String match, Integer limit) throws Exception {
			String sql = Select.match(match, limit);
			try (
				// connect to the database and query
				Connection conn = DriverManager.getConnection(Credential.url(), Credential.USER, Credential.PASSWORD);
				Statement query = conn.createStatement();
				ResultSet results = query.executeQuery(sql)
			) {
				return convertQueryResultsToPlaces(results, COLUMNS);
			} catch (Exception e) {
				throw e;
			}
		}


		private static Places convertQueryResultsToPlaces(ResultSet results, String columns) throws Exception {
			int count = 0;
			String[] cols = columns.split(",");
			Places places = new Places();
			while (results.next()) {
				Place place = new Place();
				int i = 1;
				for (String col: cols) {
					place.put(simplifyName(col), results.getString(i++));
				}
				place.put("index", String.format("%d",++count));
				places.add(place);
			}
			return places;
		}

		private static String simplifyName(String col) {
			if (col.equals("world.name")) {
				col = "name";	
			}
			if (col.indexOf(".") != -1) {
				col = col.substring(0, col.indexOf("."));
			}
			return col;
		}
	}
	
	static class Credential {
		// shared user with read-only access
		final static String USER = "cs314-db";
		final static String PASSWORD = "eiK5liet1uej";
		// connection information when using port forwarding from localhost
		final static String URL = "jdbc:mariadb://faure.cs.colostate.edu/cs314";
		static String url() {
			return URL;
		}
	}

	static class Select {
		static String match(String match, int limit) {
			return statement(match, "DISTINCT " + COLUMNS, "LIMIT " + limit);
		}

		static String found(String match) {
			return statement(match, "COUNT(*) AS count ", "");
		}

		static String statement(String match, String data, String limit) {
			return "SELECT "
				+ data
				+ " FROM " + TABLE
				+ " WHERE world.name LIKE \"%" + match + "%\" "
				+ " OR municipality LIKE \"%" + match + "%\" "
				+ " OR region.name LIKE \"%" + match + "%\" "
				+ " OR country.name LIKE \"%" + match + "%\" "
				+ " OR continent.name LIKE \"%" + match + "%\" "
				+ limit
				+ " ;";
		}
	}
	
}