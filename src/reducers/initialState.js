let state = {
    posts: [],
    templates: [],
    categories: ['Blog', 'Settings'],
    token: localStorage.getItem('tokenAPI')
}

if (state.token) {
    state.categories.push('Templates');
}

export default state;


// , 'Settings', 'Templates'