package com.tco.misc;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;



public class TestGreatCircleDistance {

    @Test
    @DisplayName("nchaffee: Testing points going across Northern Hemispheres.")
    public void testNorthHemi(){
        Place nwCenter = new Place();
        nwCenter.put("latitude", "45.000000");
        nwCenter.put("longitude", "-90.000000");
        Place neCenter = new Place();
        neCenter.put("latitude", "45.000000");
        neCenter.put("longitude", "90.000000");
        double earthRadius = 6371.0;

        assertEquals(10008, GreatCircleDistance.calculateDistance(nwCenter, neCenter, earthRadius));
    }

    @Test
    @DisplayName("nchaffee : Testing points going across Southern Hemisphere.")
    public void testSouthHemi(){ 
        Place seCenter = new Place();
        seCenter.put("latitude", "-45.000000");
        seCenter.put("longitude", "90.000000");
        Place swCenter = new Place();
        swCenter.put("latitude", "-45.000000");
        swCenter.put("longitude", "-90.000000");
        double earthRadius = 6371.0;

        assertEquals(10008, GreatCircleDistance.calculateDistance(seCenter, swCenter, earthRadius));
    }

    @Test
    @DisplayName("nchaffee : Testing points going across Southern and Northern Hemispheres.")
    public void testNESWHemi(){
        Place neCenter = new Place();
        neCenter.put("latitude", "45.000000");
        neCenter.put("longitude", "90.000000");
        Place swCenter = new Place();
        swCenter.put("latitude", "-45.000000");
        swCenter.put("longitude", "-90.000000");
        double earthRadius = 6371.0;

        assertEquals(20015, GreatCircleDistance.calculateDistance(neCenter, swCenter, earthRadius));
    }

    @Test
    @DisplayName("victor45: Test aurora to austin")
    public void testType() {
        Place aurora = new Place();
        aurora.put("latitude", "39.729444");
        aurora.put("longitude", "-104.831667");
        Place austin = new Place();
        austin.put("latitude", "30.266944");
        austin.put("longitude", "-97.743056");
        double earthRadius = 3959;

        assertEquals(766, GreatCircleDistance.calculateDistance(aurora, austin, earthRadius));
    }

    @Test
    @DisplayName("ebmartin: Test same place to same place")
    public void testSamePlace() {
        Place test1 = new Place();
        test1.put("latitude", "40.0000");
        test1.put("longitude", "-104.0000");
        Place test2 = new Place();
        test2.put("latitude", "40.0000");
        test2.put("longitude", "-104.0000");
        double earthRadius = 3959;

        assertEquals(0, GreatCircleDistance.calculateDistance(test1, test2, earthRadius));
    }

    @Test
    @DisplayName("ebmartin: Test within a mile distance")
    public void testClosePlace() {
        Place compSci = new Place();
        compSci.put("latitude", "40.57000");
        compSci.put("longitude", "-105.08");
        Place LSC = new Place();
        LSC.put("latitude", "40.57210");
        LSC.put("longitude", "-105.08");
        double earthRadius = 3959;

        assertEquals(0, GreatCircleDistance.calculateDistance(compSci, LSC, earthRadius));
    }
    @Test
    @DisplayName("reecedw: Test within a mile distance")
    public void testWestHemiToEastHemi() {
        Place ny = new Place();
        ny.put("latitude", "40.71282");
        ny.put("longitude", "-74.00586");
        Place paris = new Place();
        paris.put("latitude", "2.352223");
        paris.put("longitude", "48.856629");
        double earthRadius = 3959;

        assertEquals(7780, GreatCircleDistance.calculateDistance(ny, paris, earthRadius));
    }
    @Test
    @DisplayName("reecedw: Test constructor for GreatCircleDistance")
    public void testConstructor() {
        GreatCircleDistance test = new GreatCircleDistance();
        assertTrue(test instanceof GreatCircleDistance);
    }
}
