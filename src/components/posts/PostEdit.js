import React, {Component} from 'react';
import './Post.css';
import './PostEdit.css';

import Title from './elements/Title';
import Images from './elements/Images';
import Code from './elements/Code';
import Text from './elements/Text';
import Appender from './elements/Appender';
import Categories from './elements/Categories';

import Buttons from "./elements/Buttons";

class PostEdit extends Component {

    constructor(props) {

        // if (props.post._id === "new")
        //     props.post.title = "";

        super(props);

        this.state = {
            post: props.post,
        };

        // this.savePost = this.savePost.bind(this);
        // this.cancelPost = this.cancelPost.bind(this);
        // this.deletePost = this.deletePost.bind(this);

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeImages = this.handleChangeImages.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);
    }

    handleChangeTitle(event) {

        let post = this.state.post;
        post.title =  event.target.value;
        this.setState({post: post});
    }

    handleChangeText(event) {

        let post = this.state.post;
        post.text =  event.target.value;
        this.setState({post: post});
    }

    handleChangeImages(event) {

        let post = this.state.post;
        post.images =  event.target.value;
        this.setState({post: post});
    }

    handleChangeCode(event) {

        let post = this.state.post;
        post.code =  event.target.value;
        this.setState({post: post});
    }


    onDrop(files) {
        console.log(files);

        let post = this.state.post;
        post.files =  files;
        this.setState({post: post});
    }

    render() {
        return (
            <div className="block edit">

                {/*Template elements here*/}

                <Title title={this.state.post.title} onChange={this.handleChangeTitle} />

                <Images images={this.state.post.images}/>

                <Text texts={this.state.post.texts} />

                {/*<Code onChange={this.handleChangeCode} />*/}

                {/*<Appender onChange={this.handleChangeCode} />*/}

                {/*End template elements*/}

                {/*<Categories categories={this.state.post.categories} />*/}

                <Buttons post={this.state.post} isEdit={this.props.isEdit} />

            </div>
        );
    }
}

export default PostEdit;