import { useState, useEffect } from 'react';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, error, data } = useHttp(getAllComments, true);
  const params = useParams();

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  console.log(status, data, error);
  if(status === 'pending') {
    return (
      <div className="centered" >
        <LoadingSpinner />
      </div>
    )
  }

  if(error) {
    return (
      <div className="centered" >
        {error}
      </div>
    ) 
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments</p>
      {data && <CommentsList comments={data}/>}
    </section>
  );
};

export default Comments;