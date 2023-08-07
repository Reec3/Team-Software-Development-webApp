package com.tco.misc;

import java.lang.Math;
import java.util.HashMap;

public class GreatCircleDistance{
    public static long calculateDistance(Place place1, Place place2, double radius) {
        double lat1 = Double.parseDouble(place1.get("latitude"));
        lat1 = Math.toRadians(lat1);    //very important
        double lat2 = Double.parseDouble(place2.get("latitude"));
        lat2 = Math.toRadians(lat2);    //very important
        double longDelta = Math.abs(Double.parseDouble(place1.get("longitude")) - Double.parseDouble(place2.get("longitude")));
        longDelta = Math.toRadians(longDelta);  //very important

        double numerator = calculateNumerator(lat1, lat2, longDelta);
        double denomenator = calculateDenomenator(lat1, lat2, longDelta);
        double centralAngle = calculateCentralAngle(numerator, denomenator);

        long arcLength = calculateArcLength(radius, centralAngle);
        
        return arcLength;
    }


    private static double calculateNumerator(double lat1, double lat2, double longDelta) {
        return Math.sqrt(Math.pow(Math.cos(lat2)*Math.sin(longDelta), 2) + Math.pow(Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(longDelta), 2));
    }

    private static double calculateDenomenator(double lat1, double lat2, double longDelta) {
        return (Math.sin(lat1)*Math.sin(lat2) + Math.cos(lat1)*Math.cos(lat2)*Math.cos(longDelta));
    }

    private static double calculateCentralAngle(double numerator, double denomenator) {
        return Math.atan2(numerator, denomenator);
    }

    private static long calculateArcLength(double radius, double centralAngle) {
        return Math.round(radius * centralAngle);
    }

}