import { landingPage } from '../scenes/public/landing';
import { homePage } from '../scenes/private/home';
import { createPage as createTourPage } from '../scenes/private/create/formTour';
import { editPage } from '../scenes/private/edit/edit';
import { seeTours } from '../scenes/private/seeTours';

export const routes = {
    public: [
        { path: '/', component: landingPage }
    ],
    private: [
        { path: '/home', component: homePage },
        { path: '/create', component: createTourPage},
        { path: '/edit', component: editPage},
        { path: '/seeTours', component: seeTours}
    ]
}