import { useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import classes from '../components/UI/Comment.module.css';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => { 
    const params = useParams();
    const location = useLocation(); 
    const { sendRequest, status, data, error} = useHttp(getSingleQuote, true);
    const commentsPageLoaded = location.pathname.search('comments') != -1;

    useEffect(() => {
        sendRequest(params.quoteId);
    }, [sendRequest]);

    if(status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    }

    if(error) {
        return (
            <div className="centered">
                {error}
            </div>
        )
    }

    if(!data) {
        return (
            <div className="centered">
                <NoQuotesFound />
            </div>
        )
    }
    return (
        <>
            <HighlightedQuote author={data.author} text={data.text} />
            <Routes>
                <Route path="/comments" element={<Comments />} />
            </Routes>
            {
                !commentsPageLoaded &&
                <Link className={classes['comment-heading']} to={`${location.pathname}/comments`} >Load Comments</Link>
            }
        </>
    )
}

export default QuoteDetail;