import { useState } from 'react';
import { LOG } from '../utils/constants';
import { sendAPIRequest } from '../utils/restfulAPI';
import { getOriginalServerUrl } from '../utils/restfulAPI';

export function useSearch() {
  const [searchMatch, setSearchMatch] = useState("");
  const [searchType, setSearchType] = useState([""]);
  const [searchWhere, setSearchWhere] = useState([""]);
  const [numFound, setNumFound] = useState(0);
  const [foundPlaces, setFoundPlaces] = useState([]);
  const limit = 20

  const context = { searchMatch, setSearchMatch,
                    searchType, setSearchType,
                    searchWhere, setSearchWhere,
                    numFound, setNumFound,
                    foundPlaces, setFoundPlaces,
                    limit};

  const searchActions = {
    sendSearchRequest: async() => sendSearchRequest(context),
  };

  return {setSearchMatch, searchMatch, setSearchType, setSearchWhere, numFound, foundPlaces, searchActions};
}

async function sendSearchRequest(context) {

  let queryBody = { requestType: "find", match: context.searchMatch, limit: context.limit };

//   if (context.searchType && context.searchWhere) {
//     queryBody = { requestType: "find", match: context.searchMatch, type: context.searchType, where: context.searchWhere, limit: context.limit };
//   }
//   else if (context.searchType) {
//     queryBody = { requestType: "find", match: context.searchMatch, type: context.searchType, limit: context.limit };
//   }
//   else if (context.searchWhere) {
//     queryBody = { requestType: "find", match: context.searchMatch, where: context.searchWhere, limit: context.limit };
//   }
  const findResponse = await sendAPIRequest(queryBody, getOriginalServerUrl());

  if (findResponse) {
    context.setNumFound(findResponse.found);
    context.setFoundPlaces(findResponse.places);
  } else {
    LOG.error("Find request to server failed.");
  }
}
