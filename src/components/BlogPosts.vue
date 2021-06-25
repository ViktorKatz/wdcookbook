<template>
    <div id="BlogPosts">
        <b-container fluid>
            <b-row>
                <b-col>
                    <h3> {{ $t('blog.haveAlook') }} </h3>
                </b-col>
            </b-row>
            <b-row v-for="post in blogposts" v-bind:key="post.id">
                <b-col>
                    <BlogPost :author="post.author"
                              :title="post.title"
                              :text="post.text"
                              :img="post.img"
                              :date="post.date"
                              :linkmore="post.linkmore" />
                </b-col>
            </b-row>
        </b-container>
    </div>

</template>

<script>
    import blogposts from '@/data/blogposts.js'
    import BlogPost from '@/components/BlogPost'

    export default {
        name: 'BlogPosts',
        data: function () {
            return {
                blogposts: blogposts,
            }
        },
        components: {
            BlogPost
        }
    }

</script>