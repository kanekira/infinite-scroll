import { useEffect, useState } from "react";
import axios from "axios";

function useDocumentList(pageNum, query) {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [documents, setDocuments] = useState([]);
    const [hasMoreDocs, setHasMoreDocs] = useState(false);

    useEffect(() => {
        setDocuments([]);
    },[query]);

    useEffect(() => {
        if (!query) {
            setLoading(false);
            return;
        }
        setLoading(true);
        setError(false);
        let cancel;
        axios({
            method: "GET",
            url: "http://openlibrary.org/search.json",
            params: {q: query, page: pageNum},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then((res) => {
            setDocuments(prevDocs => {
                return [...new Set([...prevDocs, ...res.data.docs.map(doc => doc.title)])]
            });
            setLoading(false);
            setHasMoreDocs(res.data.docs.length > 0);
        }).catch(e => {
            if(axios.isCancel(e)) return;
            setError(true);
        });
        return () => cancel();
    }, [pageNum, query]);

    return{
        documents, hasMoreDocs, error, isLoading
    };
}

export default useDocumentList;