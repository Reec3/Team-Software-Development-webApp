package com.tco.requests;

import com.tco.misc.SQLGuide;
import com.tco.misc.Place;
import com.tco.misc.Places;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class FindRequest extends Request {

    private static final transient Logger log = LoggerFactory.getLogger(FindRequest.class);

    private String match;
    private int limit;
    private int found;
    private Places places;

    @Override
    public void buildResponse() {
      places = SQLGuide.queryDatabase(match, limit);
      found = SQLGuide.getFound();
      log.trace("buildResponse -> {}", this);
    }

  /* The following methods exist only for testing purposes and are not used
  during normal execution, including the constructor. */

    public FindRequest() {
      this.requestType = "find";
    }

    public int getLimit() {
      return limit;
    }

    public void setLimit(int limit) {
      this.limit = limit;
    }

    public int getFound() {
      return found;
    }

    public void setFound(int found) {
      this.found = found;
    }

    public String getMatch() {
      return match;
    }

    public void setMatch(String match) {
      this.match = match;
    }

    public Places getPlaces() {
      return places;
    }

    public void setPlaces(Places places) {
      this.places = places;
    }

}
