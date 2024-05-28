import { landingPage } from '../scenes/public/landing';
import { homePage } from '../scenes/private/home';
import { createPage as createTourPage } from '../scenes/private/create/formTour';

export const routes = {
    public: [
        { path: '/', component: landingPage }
    ],
    private: [
        { path: '/home', component: homePage },
        { path: '/create', component: createTourPage}
    ]
}