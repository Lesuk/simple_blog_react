import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  card: {
    maxWidth: 960,
    margin: '30px auto'
  },

  rootInput: {
    width: "100%",
    maxWidth: 500
  }
};

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props).
      then(() => {
        // blog post has been created, navigate user to index
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props;

    return (
      <div>
        <Card style={style.card}>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <CardHeader
              title="Create new post"
            />
          <CardText>

              <div>
                <TextField {...title} hintText="Title" errorText={ title.touched ? title.error : null } style={style.rootInput} />
              </div>

              <div>
                <TextField {...categories} hintText="Categories" errorText={ categories.touched ? categories.error : null } style={style.rootInput} />
              </div>

              <div>
                <TextField {...content} hintText="Content" multiLine={true} errorText={ content.touched ? content.error : null } style={style.rootInput} />
              </div>
            </CardText>
            <CardActions expandable={true}>
              <RaisedButton label="Submit" primary={true} type="submit" />
              <RaisedButton label="Cancel" containerElement={<Link to={`/posts/${paramsId}`} />} />
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title){
    errors.title = 'Enter a title';
  }
  if(!values.categories){
    errors.categories = 'Enter a categories';
  }
  if(!values.content){
    errors.content = 'Enter a content';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
