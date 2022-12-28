import QuoteForm from '../components/quotes/QuoteForm';
import { useNavigate } from 'react-router-dom';
import { addQuote } from '../lib/api';
import useHttp from '../hooks/use-http';
import { useEffect } from 'react';

const NewQuote = () => {
    const navigate = useNavigate();
    const { sendRequest, status } = useHttp(addQuote);

    useEffect(() => {
        if(status === 'completed') {
            navigate('/quotes');
        }
    }, [status]);

    const onDataAddHandler = (newData) => {
        sendRequest(newData);
    }

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={onDataAddHandler} />
    )
}

export default NewQuote;