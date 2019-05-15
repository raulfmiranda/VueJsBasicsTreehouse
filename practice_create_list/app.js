var posts = [
    {
        title: 'The Cat of Stanford',
        summary: 'The summary of The Cat of Stanford',
        thumbnail: 'https://placeimg.com/75/75/any',
        alt: 'alt',
        votes: 0
    },
    {
        title: 'Dog Nation',
        summary: 'The summary of Dog Nation',
        thumbnail: 'https://placeimg.com/75/75/any',
        alt: 'alt',
        votes: 0
    },
    {
        title: 'My Test Data',
        summary: 'The summary of my test data',
        thumbnail: 'https://placeimg.com/75/75/any',
        alt: 'alt',
        votes: 0
    }
];

function sortPosts(items) {
    items.sort(function(a, b){
        return (b.votes - a.votes);
    });
    return items;
}

Vue.component('post-form', {
    data: function () {
        return {
            title: '',
            summary: ''
        }
    },
    template: "#postForm",
    props: ['items'],
    methods: {
        add: function() {
            this.items.push({
                title: this.title,
                summary: this.summary,
                thumbnail: 'https://placeimg.com/75/75/any',
                alt: 'alt',
                votes: 0
            });
            this.title = '';
            this.summary = '';
        }
    }
});

Vue.component('post-list', {
    template: "#postList",
    props: ['items'],
    methods: {
        increment: function(post) {
            post.votes++;
            this.items = sortPosts(this.items);
        },
        decrement: function(post) {
            if (post.votes > 0)
                post.votes--;
            this.items = sortPosts(this.items);
        },
    }
});

var app = new Vue({
    el: '#app',
    data: {
        posts: posts
    }
}); 