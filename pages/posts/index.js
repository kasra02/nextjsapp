import axios from 'axios'

const Post = ({posts=[]}) => {
    return (
        <div>
            {posts.map(post=><div>{post.title}</div>)}
        </div>
    );
};

export async function getStaticProps(context) {
    const {data:posts} = await axios.get('https://jsonplaceholder.typicode.com/posts')

    if(!posts){
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return{
        props:{
            posts
        }
    }

}




export default Post