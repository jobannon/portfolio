import React, { Component } from 'react';
import { Link } from '@material-ui/core';
import Butter from 'buttercms';

const butter = Butter('de55d3f93789d4c5c26fb07445b680e8bca843bd');

class BlogHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentWillMount() {
    const page = this.props.params.page || 1;

    this.fetchPosts(page);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loaded: false });

    const page = nextProps.params.page || 1;

    this.fetchPosts(page);
  }

  fetchPosts(page) {
    butter.post.list({ page, page_size: 10 }).then((resp) => {
      this.setState({
        loaded: true,
        resp: resp.data,
      });
    });
  }

  render() {
    if (this.state.loaded) {
      const { next_page, previous_page } = this.state.resp.meta;

      return (
        <div>
          {this.state.resp.data.map((post) => (
            <div key={post.slug}>
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
            </div>
          ))}

          <br />

          <div>
            {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}

            {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
          </div>
        </div>
      );
    }
    return (
      <div>
        Loading...
      </div>
    );
  }
}

export default BlogHome;
