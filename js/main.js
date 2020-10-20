Vue.component('hello-world', {
    template: `
        <div>
            <h1 v-bind:class="{active: isActive}">Hello World{{ message }}</h1>
            <button v-on:click="slide">スライド</button>
        </div>`,
    props: ['message'],
    data() {
        return {
            isActive: true
        }
    },
    methods: {
        slide() {
            this.isActive = !this.isActive
        }
    }

})

Vue.component('button-counter', {
    template: `
        <p>
            カウント：{{ count }}
            <button v-on:click="countUp">Up</button>
            <button v-on:click="countDown">Down</button>
            <button v-on:click="reset">reset</button>
        </p>`,
    data() {
        return {
            count: 0
        }
    },
    methods: {
        countUp() {
            this.count++
        },
        countDown() {
            this.count--
        },
        reset() {
            this.count = 0
        }
    }
})

Vue.component('blog-post', {
    template: `
        <div>
            <h2>
                {{ post.title }}
            </h2>
            <p>
                {{ post.content }}
            </p>
        </div>
    `,
    props: ['post']
})

Vue.component('emit-event', {
    template: `
        <div>
            <input type="text" v-model="inputText">
            <button v-on:click="$emit('from-child')">送信ボタン</button>
        </div>`,
    data() {
        return {
            inputText: ''
        }
    },
    methods: {
        clickEvent() {
            this.$emit('from-child',this.inputText)
        }
    }
})
// ----------------------------------------------------------------------

let app = new Vue({
    el: "#app",
    data: {
        isActive: true,
        inputText: '',
        posts: [
            {'id': 0, 'title': 'vue.jsの基礎', 'content': 'about vue.js...'},
            {'id': 1, 'title': 'componentの基礎', 'content': 'about component...'},
            {'id': 2, 'title': 'Vue CLIの基礎', 'content': 'about Vue CLI...'},
        ]
    },
    methods: {
        slide() {
            this.isActive = !this.isActive
        },
        receiveMessage() {
            alert('子からイベント受けたよ')
        }
    }
})

let app2 = new Vue({
    el: "#app2",
    components: {
        'hello-view': {
            template: '<h1><slot>Hello View</slot></h1>'
        }
    }
})