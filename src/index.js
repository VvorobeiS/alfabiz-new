// Vendors
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fancyapps/ui/dist/fancybox.umd';
import 'nouislider/dist/nouislider.min';

// Common
import sliders from './modules/sliders';
import accordionsFilters from './modules/accordionsFilters';
import rangeSlider from './modules/rangeSlider';
import tabsEventsSlider from './modules/tabsEventsSlider';
import tabsGoodsContent from './modules/tabsGoodsContent';
import tabsGoodsSlider from './modules/tabsGoodsSlider';
import tabsContacts from './modules/tabsContacts';
import toggeleCatalog from './modules/toggleCatalog';
import toggleCollapse from './modules/toggleCollapse';
import toggleNavbar from './modules/toggleNavbar';
import map from './modules/map';

// Слайдеры
sliders();
// Аккордеоны для фильтров
accordionsFilters();
// Инициализация NoUiSlider
rangeSlider();
// Табы
tabsEventsSlider();
tabsGoodsContent();
tabsGoodsSlider();
tabsContacts();
// Активация кнопки Каталог
toggeleCatalog();
// Сворачиваемый контент
toggleCollapse();
// Фиксация меню при скролле
toggleNavbar();
map();
