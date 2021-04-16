import React from "react";
import ReactDOM from "react-dom";

import ReactGiphySearchbox from "react-giphy-searchbox";

export default function App() {
  return(
  <>
    <header>
      <h1>React Giphy Searchbox</h1>
      <p>
        <b>Basic responsive setup:</b> resize the browser window to see how the
        content respond to the resizing.
      </p>
      <p>
        Select a gif (clicking on it) and open the console to see the returned{" "}
        <a
          href="https://developers.giphy.com/docs/api/schema/#gif-object"
          target="_blank"
          rel="noopener noreferrer"
        >
          GIF object.
        </a>
      </p>
    </header>
    <div className="searchboxWrapper">
      <ReactGiphySearchbox
        apiKey="UhFUfdL0oZHHh20DVt0ztFH6GbBYnZov"
        onSelect={(item) => console.log(item)}
        masonryConfig={[
          { columns: 2, imageWidth: 110, gutter: 5 },
          { mq: "500spx", columns: 3, imageWidth: 120, gutter: 5 }
        ]}
      />
    </div>
    <footer>
      <a
        href="https://github.com/sergiop/react-giphy-searchbox"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
    </footer>
  </>
);
      }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
