import CtdsTabs from './components/CtdsTabs';
import CtdsTile from './components/CtdsTile';
import CtdsDataField from './components/CtdsDataField';
import './styles/framework.scss';

export default {
    install (Vue) {
        Vue.component(CtdsTabs.name, CtdsTabs);
        Vue.component(CtdsTile.name, CtdsTile);
        Vue.component(CtdsDataField.name, CtdsDataField);
    }
};
