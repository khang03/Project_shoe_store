import { HeaderOnly } from '~/components/Layout';
import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';
import Notification from '~/Pages/Notification';
import Find from '~/Pages/Find';
import DetailPost from '~/Pages/DetailPost';
import Chat from '~/Pages/Chat';
import ProfileOther from '~/Pages/ProfileOther';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Profile', component: Profile },
    { path: '/ProfileOther', component: ProfileOther },
    { path: '/Notification', component: Notification },
    { path: '/Find', component: Find },
    { path: '/Chat', component: Chat },
    { path: '/DetailPost/:id', component: DetailPost },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
