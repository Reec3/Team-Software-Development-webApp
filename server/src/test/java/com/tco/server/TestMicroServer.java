package com.tco.server;

import org.json.JSONObject;
import org.json.JSONArray;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.IOException;
import java.net.ServerSocket;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import spark.Spark;

public class TestMicroServer {

    public final static int TEST_SERVER_PORT = getRandomPort();
    public final static String BASE_URL = "http://localhost:" + TEST_SERVER_PORT;

    private static int getRandomPort() {
        try ( ServerSocket socket = new ServerSocket(0)) {
            return socket.getLocalPort();
        } catch (Exception e) {
            return 8000;
        }
    }

    @BeforeAll
    public static void initialize() {
        new MicroServer(TEST_SERVER_PORT);
    }

    @BeforeEach
    public void WaitForMicroServerToBeReady() {
        // make sure spark is started before making the request
        Spark.awaitInitialization();
    }

    @AfterAll
    public static void stopSparkInternal() {
        Spark.stop();
        Spark.awaitStop();
    }

    public static HttpResponse postRequest(String endPointPath, String requestBodyJSON) throws IOException {
       
        HttpPost request = new HttpPost(BASE_URL + endPointPath);
        request.setEntity(new StringEntity(requestBodyJSON, ContentType.APPLICATION_JSON));

        HttpClient httpClient = HttpClientBuilder.create().build();
        return httpClient.execute(request);
    }

    @Test
    @DisplayName("base: Valid config request succeeds with 200 status")
    public void testValidConfigRequest() throws IOException {
        String requestBodyJSON = new JSONObject()
                .put("requestType", "config")
                .toString();

        HttpResponse response = postRequest("/api/config", requestBodyJSON);
        assertEquals(200, response.getStatusLine().getStatusCode());
    }
    
    @Test
    @DisplayName("victor45: Valid distances request succeeds with 200 status")
    public void testValidDistancesRequest() throws IOException {
        JSONObject place1 = new JSONObject();
        place1.put("latitude", "-90.0");
        place1.put("longitude", "90.0");
        JSONArray places = new JSONArray();
        places.put(place1);
        String requestBodyJSON = new JSONObject()
                .put("requestType", "distances")
                .put("places", places)
                .put("earthRadius", 3900)
                .toString();

        HttpResponse response = postRequest("/api/distances", requestBodyJSON);
        assertEquals(200, response.getStatusLine().getStatusCode());
    }

    @Test
    @DisplayName("victor45: Invalid distances request missing a property responds with 400 status")
    public void testInvalidDistancesRequestMissingProperty() throws IOException {
        //this request is missing the "places" property
        String requestBodyJSON = new JSONObject()
                .put("requestType", "distances")
                .put("earthRadius", 1)
                .toString();

        HttpResponse response = postRequest("/api/distances", requestBodyJSON);
        assertEquals(400, response.getStatusLine().getStatusCode());
    }

    @Test
    @DisplayName("victor45: Invalid distances request with illegal property value responds with 400 status")
    public void testInvalidDistancesRequestIllegalValue() throws IOException {
        //this request has an earthRadius value of 0, when min value is 1
        String requestBodyJSON = new JSONObject()
                .put("requestType", "distances")
                .put("places", new JSONArray())
                .put("earthRadius", 0)
                .toString();

        HttpResponse response = postRequest("/api/distances", requestBodyJSON);
        assertEquals(400, response.getStatusLine().getStatusCode());
    }

    @Test
    @DisplayName("victor45: Valid find request succeeds with 200 status")
    public void testValidFindRequest() throws IOException {
        String requestBodyJSON = new JSONObject()
                .put("requestType", "find")
                .put("match", "dave")
                .put("limit", 26)
                .toString();

        HttpResponse response = postRequest("/api/find", requestBodyJSON);
        assertEquals(200, response.getStatusLine().getStatusCode());
    }

    @Test
    @DisplayName("victor45: Invalid find request with illegal property value responds with 400 status")
    public void testInvalidFindRequestIllegalValue() throws IOException {
        //this request has a limit value of -2, when min value is 0
        String requestBodyJSON = new JSONObject()
                .put("requestType", "find")
                .put("match", "dave")
                .put("limit", -2)
                .toString();

        HttpResponse response = postRequest("/api/find", requestBodyJSON);
        assertEquals(400, response.getStatusLine().getStatusCode());
    }

    @Test
    @DisplayName("victor45: Invalid find request missing a property responds with 400 status")
    public void testInvalidFindRequestMissingProperty() throws IOException {
        //this request is missing the "match" property
        String requestBodyJSON = new JSONObject()
                .put("requestType", "find")
                .put("limit", 50)
                .toString();

        HttpResponse response = postRequest("/api/find", requestBodyJSON);
        assertEquals(400, response.getStatusLine().getStatusCode());
    }

    @Test
    @DisplayName("victor45: Valid tour request succeeds with 200 status")
    public void testValidTourRequest() throws IOException {
        String requestBodyJSON = new JSONObject()
                .put("requestType", "tour")
                .put("earthRadius", 500)
                .put("response", 1)
                .put("places", new JSONArray())
                .toString();

        HttpResponse response = postRequest("/api/tour", requestBodyJSON);
        assertEquals(200, response.getStatusLine().getStatusCode());
    }

    @Test
    @DisplayName("victor45: Invalid tour request missing a property responds with 400 status")
    public void testInvalidTourRequestMissingProperty() throws IOException {
        //this request is missing the "response" property
        String requestBodyJSON = new JSONObject()
                .put("requestType", "tour")
                .put("earthRadius", 500)
                .put("places", new JSONArray())
                .toString();

        HttpResponse response = postRequest("/api/tour", requestBodyJSON);
        assertEquals(400, response.getStatusLine().getStatusCode());
    }

    @Test
    @DisplayName("victor45: Invalid tour request with illegal property value responds with 400 status")
    public void testInvalidTourRequestIllegalValue() throws IOException {
        //this request has an earthradius of -10, when minimum is 1
        String requestBodyJSON = new JSONObject()
                .put("requestType", "tour")
                .put("earthRadius", -10)
                .put("response", 1)
                .put("places", new JSONArray())
                .toString();

        HttpResponse response = postRequest("/api/tour", requestBodyJSON);
        assertEquals(400, response.getStatusLine().getStatusCode());
    }

    @Test
    @DisplayName("base: An invalid request responds with 400 status")
    public void testInvalidRequest() throws IOException {
        String invalidJSON = "{ 'invalid': 'request' }";

        HttpResponse response = postRequest("/api/config", invalidJSON);
        assertEquals(400, response.getStatusLine().getStatusCode());
    }

    @Test
    @DisplayName("ebmartin: An invalid endpoint responds with 404 status")
    public void testInvalidEndpoint() throws IOException {
        String invalidRequestJSON = "{ }";

        HttpResponse response = postRequest("/api/invalid", invalidRequestJSON);
        assertEquals(404, response.getStatusLine().getStatusCode());
    }
}
