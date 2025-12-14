import '../scss/main.scss';
import { initPortfolioSwiper } from './modules/sliders';
import { initHeaderMainSwiper } from './modules/sliders';
import { initMasterSwiper } from './modules/sliders';
import { initReviewsSwiper } from './modules/sliders';
import { initSidebar } from './modules/burger';

initReviewsSwiper();        
initPortfolioSwiper();
initHeaderMainSwiper();
initMasterSwiper();
initSidebar();