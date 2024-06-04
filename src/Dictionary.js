import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handlePhotosResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }
  function search() {
    let apiKey = "a471f3ac24t4fe3ab44b13f5c03c6o13";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let apiKeyPhotos = "a471f3ac24t4fe3ab44b13f5c03c6o13";
    let apiUrlPhotos = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKeyPhotos}`;
    axios.get(apiUrlPhotos).then(handlePhotosResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }

  function handeKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handeKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">ie: coding, food, travel...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
