import QuotesList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const AllQuotes = () => {
    const {sendRequest, status, data, error} = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
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

    if(!data || data.length === 0) {
        return (
            <div className="centered">
                <NoQuotesFound />
            </div>
        )
    }

    return (
        <QuotesList quotes={data}/>
    )
}

export default AllQuotes;