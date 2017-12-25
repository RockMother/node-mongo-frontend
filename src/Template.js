import React, {Component} from 'react';
import './Post.css';
// import Form from './Form';
// import Template from './Template';

class Template extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post: props.post,
        };

        this.mouseEnter = this.mouseEnter.bind(this);
    }

    mouseEnter() {
        // console.log('enter')
        this.state.post.viewForm()
    }

    render() {
        return (

            <div className="block" onMouseEnter={this.mouseEnter}>

                <div className="text">
            
                    <div className="id">{this.state.post._id}</div>
            
                    {/*<div id="title">{this.state.post.title}</div>*/}

                    <div id="text">{this.state.post.text}</div>

                    {/*<div id="categories">{this.state.post.categories[0].name}</div>*/}

                    {/*<div id="images">{this.state.post.images[0].name}</div>*/}





                    {/*{this.state.post.texts.map(text => <div key={text._id}>{text.name}</div>)}*/}
            
                    {/*{this.state.posts.map(post => <Post key={post._id} post={post} />)}*/}
                    {/*{this.state.posts.map(post => <Post key={post._id} post={post} />)}*/}
            
                    {/*<div contentEditable={true} id="texts">{this.state.post.texts.length}</div>*/}
                    {/*<div contentEditable={true} id="categories">{this.state.post.categories.length}</div>*/}
                    {/*<div contentEditable={true} id="images">{this.state.post.images.length}</div>*/}
            
                </div>

            </div>
            
        );
    }
}

export default Template;