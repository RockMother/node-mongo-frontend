import React, {Component} from 'react';
import './Post.css';

import PostTemplate from './PostTemplate';
import config from '../../config';

import Buttons from "./elements/Buttons";
import postActions from '../../actions/postActions';
import TemplateSelector from './elements/TemplateSelector/TemplateSelector';

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState(props);

        this.savePost = this.savePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.cancelClicked = this.cancelClicked.bind(this);
        this.setEdit = this.setEdit.bind(this);

        this.imageAdded = this.imageAdded.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.onTemplateSelected = this.onTemplateSelected.bind(this);
    }

    getInitialState(props) {
        const images = [];
        if (props.post.images && props.post.images.length > 0) {
            props.post.images.forEach((image, index) => {
                images.push({
                    url: config.API_URL + '/image/' + image.imageId,
                    imageName: image.imageName
                });
            });
        }
        return {
            post: Object.assign({}, props.post),
            images,
            isEdit: false
        }
    }

    setEdit() {
        if (!this.state.isEdit)
            this.setState({isEdit: !this.state.isEdit});
    }

    cancelClicked() {
        this.setState(this.getInitialState(this.props));
        this.setState({isEdit: false});
    }

    componentWillReceiveProps(newProps) {
        this.setState(this.getInitialState(newProps));
    }

    async savePost() {
        await postActions.savePost(this.state.post);
        this.setState({isEdit: false});
    }

    deletePost() {
        postActions.deletePost(this.props.post._id);
    }

    onTemplateSelected(template) {
        const post = this.state.post;
        post.template = template;
        this.setState({post});
    }

    titleChanged(title) {
        const post = this.state.post;
        post.title = title;
        this.setState({post});
    }

    imageAdded(image) {
        const post = this.state.post;
        post.newImages = post.newImages || [];
        post.newImages.push(image);
        const images = this.state.images.concat({
            imageName: image.name,
            url: image.preview
        });
        this.setState({post, images});
    }

    render() {
        return (
            <div className={this.state.isEdit ? "block edit" : "block" + (this.props.post._id ? "" : " new")} onClick={this.setEdit}>
                {/*We need some render here*/}
                {
                    this.state.post.template ? <PostTemplate
                        template={this.state.post.template}
                        isEdit={this.state.isEdit}
                        title={this.state.post.title}
                        images={this.state.images}
                        imageAdded={this.imageAdded}
                        titleChanged={this.titleChanged}
                    /> : ""
                }
                {/*End of render*/}
                {this.state.isEdit ?
                    <Buttons saveClicked={this.savePost}
                        deleteClicked={this.deletePost}
                        cancelClicked={this.cancelClicked} /> : ''}

                {this.state.isEdit ? <TemplateSelector
                    selectedTemplate={this.state.post.template}
                    onTemplateSelected={this.onTemplateSelected} /> : ""}
            </div>
        );
    }
}

export default Post;