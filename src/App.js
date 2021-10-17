import { useState, useRef, useCallback } from "react";
import useDocumentList from "./Hooks/useDocumentList";
import logo from "./logo.svg";
import './App.css';

function App() {

  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);

  const {
    hasMoreDocs,
    isLoading,
    error,
    documents
  } = useDocumentList(pageNum, query);

  const observer = useRef();
  const lastDocument = useCallback(doc => {
    if(isLoading) return;
    if(observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMoreDocs) {
        setPageNum(prevNum => prevNum + 1);
      }
    })
    if(doc) {
      observer.current.observe(doc);
    }
  }, [isLoading, hasMoreDocs]);

  function handleChange(e) {
    setQuery(e.target.value);
    setPageNum(1);
  };
  return (
    <div className="center">
      <h2 className="heading"> Keep Searching... </h2>
      <input className="search-box" type="search" value={query} onChange={handleChange}></input>
      <div className={documents.length > 0 ? "list-view" : "list-view-none"}>
      {documents.map((doc,index) => {
        if(documents.length === index + 1) {
          return <div ref={lastDocument} key={doc}> {doc} </div>
        }
        return (
          <div className="document" key={doc}> {doc} </div>
        )
      })}
      </div>
      <div>{ isLoading && <img src={logo} className="App-logo" alt = "Loading..."></img>}</div>
      <div>{error && "Something went wrong... Please try again!"}</div>
    </div>

  );
}

export default App;
