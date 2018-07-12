import config from '../../config';
import { BlockBasedList } from './../../lib/index';
export default class Posts extends BlockBasedList {
    getInitialState(props) {
        return {
            root: true,
            newEntity: {
                titles: [],
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
            titles: (post.titles && post.titles.length > 0 && post.titles.map(t => t && t.title)) || [],
            texts: (post.texts && post.texts.length > 0 && post.texts.map(t => t && t.text)) || [],
            htmls: (post.htmls && post.htmls.length > 0 && post.htmls.map(t => t && t.html)) || [],
            images: (post.images && post.images.length > 0 && sortArrayForBlockModel(post.images.map(i => convertImage(i)))) || [],
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
            }) || [],
            texts: blockModel.texts.map((t, index) => {
                return {
                    text: t,
                    orderInTemplate: index
                }
            }) || [],
            htmls: blockModel.htmls.map((html, index) => {
                return {
                    html,
                    orderInTemplate: index
                }
            }) || [],            
            template: template,
            newImages: getNewImages(blockModel, originalPost),
            images: getImages(blockModel, originalPost),
            categories: originalPost.categories
        }
    }
}

function sortArrayForBlockModel(array) {
    let maxValue = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].orderInTemplate > maxValue) {
            maxValue = array[i].orderInTemplate;
        }
    }
    const result = new Array(maxValue + 1);
    for (let i = 0; i < array.length; i++) {
        result[array[i].orderInTemplate] = array[i];
    }
    return result;
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
    return blockModel.images.map((image, index) => {
        if (image !== null && image instanceof File) {
            image.orderInTemplate = index;
            return image;
        }
        return null;
    }).filter(i => i !== null);
}

function getImages(blockModel, originalPost) {
    return originalPost.images.filter((image) => {
        return blockModel.images.length > image.orderInTemplate
            && blockModel.images[image.orderInTemplate]
            && blockModel.images[image.orderInTemplate]._id;
    });
}





