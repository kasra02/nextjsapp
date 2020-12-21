import axios from 'axios'
import Link from 'next/link'

const Post = ({posts=[]}) => {
    return (
        <div>
            {posts.map(post=>(
                <div>
                    {post.title}
                    <Link href={`/posts/${post.id}`}>
                        <a> link to {post.id} </a>
                    </Link>
                </div>
            ))}
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