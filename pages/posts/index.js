import axios from 'axios'
import Link from 'next/link'
import { List, Typography, Divider,Card } from 'antd';

const Post = ({posts=[]}) => {
    return (
        <List
            grid={{ gutter: 1, xs: 1, sm:1, md:2, lg:3 }}
            dataSource={posts}
            renderItem={item => (
                <List.Item>
                    <Card title={item.title}>
                        {item.body.substring(1,40)}
                        <Link href={`posts/${item.id}`}><a>
                            ادامه
                        </a></Link>
                    </Card>
                </List.Item>
            )}
        />

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