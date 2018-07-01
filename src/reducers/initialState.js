let state = {
    posts: [],
    templates: [],
    categories: ['Blog'],
    token: localStorage.getItem('tokenAPI')
}

if (state.token) {
    state.categories.push('Dev');
    state.categories.push('Templates');
}

export default state;


// , 'Settings', 'Templates'