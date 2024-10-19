import { HeaderOnly } from '~/components/Layout';
import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';
import Notification from '~/Pages/Notification';
import Find from '~/Pages/Find';
import DetailPost from '~/Pages/DetailPost';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Profile', component: Profile },
    { path: '/Notification', component: Notification },
    { path: '/Find', component: Find },
    { path: '/DetailPost', component: DetailPost },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
