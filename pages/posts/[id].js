import axios from 'axios'
import { Tabs,Typography } from 'antd';
const { TabPane } = Tabs;
const { Title } = Typography;

const PostDetail = ({post={}}) => {
    return (
        <div className="card-container">
            <Title>{post.title}</Title>
            <Tabs type="card">
                <TabPane tab="Article" key="1">
                    <p>{post.body}</p>
                </TabPane>
                <TabPane tab="Tab Title 2" key="2">
                    <p>Content of Tab Pane 2</p>
                    <p>Content of Tab Pane 2</p>
                    <p>Content of Tab Pane 2</p>
                </TabPane>
                <TabPane tab="Tab Title 3" key="3">
                    <p>Content of Tab Pane 3</p>
                    <p>Content of Tab Pane 3</p>
                    <p>Content of Tab Pane 3</p>
                </TabPane>
            </Tabs>
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
