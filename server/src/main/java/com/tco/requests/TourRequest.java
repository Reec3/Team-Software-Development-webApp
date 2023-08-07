package com.tco.requests;

import com.tco.misc.OptimizeTrip;
import com.tco.misc.Place;
import com.tco.misc.Places;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TourRequest extends Request {

    private static final transient Logger log = LoggerFactory.getLogger(DistancesRequest.class);

    private Places places = new Places();
    private Double earthRadius;
    private Integer response;

    @Override
    public void buildResponse() {
      places = getOptimalRoute();
      log.trace("buildResponse -> {}", this);
    }

    private Places getOptimalRoute() {
      //nearest neighbor optimization
      return OptimizeTrip.findOptimalTrip(places, earthRadius);
    }

  /* The following methods exist only for testing purposes and are not used
  during normal execution, including the constructor. */
    
    public TourRequest(Places places, Double earthRadius) {
      super();
      this.earthRadius = earthRadius;
      this.requestType = "tour";
      this.places = places;
    }

    //getters and setters

    public Places getPlaces() {
      return places;
    }

    public Double getEarthRadius() {
      return earthRadius;
    }

    public Integer getResponse() {
      return response;
    }

    public void setResponse(Integer newResponse) {
      response = newResponse;
    }
}
