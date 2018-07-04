import config from '../../config';
import { BlockBasedList } from 'html-post-constructor';
export default class Posts extends BlockBasedList {
    getInitialState(props) {
        return {
            root: true,
            newEntity: {
                title: "",
                texts: [],
                categories: [{
                    name: props.category
                }],
                images: []
            }
        }
    }

    convertToBlockModel(post) {
        return {
            titles: (post.titles && post.titles.map(t => t.title)) || [],
            texts: (post.texts && post.texts.map(t => t.text)) || [],
            images: (post.images && post.images.length > 0 && post.images.map(i => convertImage(i))) || [],
            _id: post._id
        }
    }

    convertToModel(blockModel, originalPost, template) {
        return {
            _id: originalPost._id,
            titles: blockModel.titles.map((t, index) => {
                return {
                    title: t,
                    orderInTemplate: index
                }            
            }),
            texts: blockModel.texts.map((t, index) => {
                return {
                    text: t,
                    orderInTemplate: index
                }
            }),
            template: template,
            newImages: getNewImages(blockModel, originalPost),
            images: getImages(blockModel, originalPost),
            categories: originalPost.categories
        }
    }
}

function convertImage(image) {
        return {
            url: config.API_URL + '/image/' + image.imageId,
            imageName: image.imageName,
            orderInTemplate: image.orderInTemplate,
            _id: image._id
        }
}

function getNewImages(blockModel) {
    return blockModel.images.map((image, index)  => {
        if (image !== null && image instanceof File) {
            image.orderInTemplate = index;
            return image;
        }
        return null;
    }).filter(i => i !== null);
}

function getImages(blockModel, originalPost){
    return originalPost.images.filter((image) => {
        return blockModel.images.length > image.orderInTemplate 
            && blockModel.images[image.orderInTemplate] !== null
            && blockModel.images[image.orderInTemplate]._id;
    });
}





