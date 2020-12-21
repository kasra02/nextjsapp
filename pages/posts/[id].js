import axios from 'axios'

const PostDetail = ({post={}}) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export async function getStaticPaths() {

    const {data:posts} = await axios.get('https://jsonplaceholder.typicode.com/posts')

    const truepath = posts.map(post=> ({params: { id: post.id.toString() },}))
    console.log(truepath)
    return {
        paths:truepath,
        fallback:true
    }
}

export async function getStaticProps({params}) {
    const {data:post} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    return {
        props:{
            post
        }
    }
}




export default PostDetail;
