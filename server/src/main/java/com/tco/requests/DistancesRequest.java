package com.tco.requests;

import com.tco.misc.GreatCircleDistance;
import com.tco.misc.Place;
import com.tco.misc.Places;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DistancesRequest extends Request {

    private static final transient Logger log = LoggerFactory.getLogger(DistancesRequest.class);

    private Places places = new Places();
    private Double earthRadius;
    private List<Long> distances;

    @Override
    public void buildResponse() {
      distances = buildDistancesList();
      log.trace("buildResponse -> {}", this);
    }

    private List<Long> buildDistancesList() {
      List<Long> circleDistances = new ArrayList<>();

      if (places == null) {
        return circleDistances;
      }

      for (int i = 0; i < places.size(); i++) {
        if (i == places.size()-1) {  //last elem?
          circleDistances.add(GreatCircleDistance.calculateDistance(places.get(i), places.get(0), earthRadius));
        }
        else {
          circleDistances.add(GreatCircleDistance.calculateDistance(places.get(i), places.get(i+1), earthRadius));
        }
      }

      return circleDistances;
    }

  /* The following methods exist only for testing purposes and are not used
  during normal execution, including the constructor. */

    public DistancesRequest(double earthRadius, Places places) {
      super();
      this.earthRadius = earthRadius;
      this.requestType = "distances";
      this.places = places;
    }

    //getters and setters

    public Double getEarthRadius() {
      return earthRadius;
    }

    public Places getPlaces() {
      return places;
    }

    public List<Long> getDistances() {
      return distances;
    }

    public void setEarthRadius(Double rad) {
      earthRadius = rad;
    }
}
