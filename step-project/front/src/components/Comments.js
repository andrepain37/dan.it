import React, { useRef, useState, useEffect } from 'react';
import {Form, withFormik} from "formik";
import schema from "../validation/comments/schema";
import { Button } from '@material-ui/core';
import Input from '../components/Input';
import { connect, useDispatch } from 'react-redux';
import { commentPost, getComments } from '../store/posts/operations';


function Comments({lastComments, postId, isAllComments, scroll}) {

    const [isloadAllComments, setIsLoadAllComments] = useState(isAllComments);
    const dispatch = useDispatch();
    const commentsRow = useRef(null);

    const loadAllComments = () => {
        setIsLoadAllComments(true);
        dispatch(getComments(postId))
    }

    useEffect(
        () => {
            if (scroll) {
                const scrollComments = commentsRow.current
                
                scrollComments.scrollTop = scrollComments.scrollHeight;
            }
        },[scroll]
    );

    let comments = false;

    if (!!lastComments) {
        comments = lastComments.map(e => {
            return (
                <div className="comments-comment" key={e.id}>
                    <span className="comments-comment--name">{e.name}</span>
                    <span className="comments-comment--comment">{e.comment}</span>
                </div>
            )
        })

    }

    return (
        <section className="comments">
            {!!comments.length && !isloadAllComments && <span onClick={loadAllComments} className="comments-loader" >Загрузить все комментарии</span>}
            {!comments.length && <p className="comments-empty">Комментариев нету!</p>}
            <div className="comments_users" ref={commentsRow}>
                {comments}
            </div>
            <Form noValidate autoComplete="off" className="comments-form">
                <Input label="Добавить комментарий" name="add_comment" type="text" classes="comments-form__comment" />
                <Button color="primary" type="submit">
                    Отправить
                </Button>
            </Form>
        </section>
    );
}



const mapDispatchToProps = dispatch => {
    return {
        sendComment: (postId, comment) => dispatch(commentPost(postId, comment))
    }
}

export default connect(null, mapDispatchToProps)(withFormik({
    mapPropsToValues: () => ({
        add_comment: ''
    }),
    handleSubmit: (values, {props, resetForm}) => {


        const sendData = {
            postId: props.postId,
            comment: values.add_comment,
            resetValue: resetForm
        }

        props.sendComment(sendData);
    },
    validationSchema: schema
})(Comments));