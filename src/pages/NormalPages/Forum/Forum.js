import Sidebar from './Sidebar';
import Post from './Post';
import Rightbar from './Rightbar';

export default function Forum() {
    return (
        <div className='bg-[#F9FAFB] py-10'>
            <div className='max-w-6xl w-full mx-auto flex justify-between justify-items-start'>
                <Sidebar />
                <Post />
                <Rightbar />
            </div>
        </div>
    )
        
}