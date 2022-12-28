import { useRef } from 'react';
import classes from './NewCommentForm.module.css';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import '../UI/LoadingSpinner';
import LoadingSpinner from '../UI/LoadingSpinner';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, data, error, status } = useHttp(addComment);
  const location = useLocation();
  const params = useParams(); 
  const navigate = useNavigate();

  const submitFormHandler = (event) => {
    event.preventDefault();
    sendRequest({
      quoteId: params.quoteId,
      commentData: commentTextRef.current.value
    });
    if(status === 'completed') {
      commentTextRef.current.value = '';
      navigate(location.pathname);
    }
  };

  if(status === 'pending') {
    return (
      <LoadingSpinner />
    )
  }

  if(error) {
    return (
      <div className="centered" >{error}</div>
    )
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;