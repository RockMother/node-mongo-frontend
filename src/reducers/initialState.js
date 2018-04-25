let state = {
    posts: [],
    templates: [],
    categories: ['Art', 'Store', 'Contacts'],
    token: localStorage.getItem('tokenAPI')
}

if (state.token) {
    state.categories.push('Templates');
}

export default state;


// , 'Settings', 'Templates'