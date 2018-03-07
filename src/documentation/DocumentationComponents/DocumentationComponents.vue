<template>
    <documentation-page v-bind="{ name: name, title: title, summary: summary, sections: sections }">
        <component v-for="section in sections" :key="section.name" :is="section.name" :slot="section.name"></component>
    </documentation-page>
</template>
<script>
import DocumentationPage from '../DocumentationPage';
import DocumentationComponentsUsage from './DocumentationComponentsUsage';
import DocumentationComponentsList from './DocumentationComponentsList';
import DocumentationComponentsListNavigation from './DocumentationComponentsListNavigation';
import DocumentationComponentsListSimple from './DocumentationComponentsListSimple';
import DocumentationComponentsListEditable from './DocumentationComponentsListEditable';
import DocumentationComponentsSearchBar from './DocumentationComponentsSearchBar';
import DocumentationComponentsCard from './DocumentationComponentsCard';
import DocumentationComponentsTabs from './DocumentationComponentsTabs';
import DocumentationComponentsTile from './DocumentationComponentsTile';
import DocumentationComponentsDataField from './DocumentationComponentsDataField';
import DocumentationComponentsDataFieldCollection from './DocumentationComponentsDataFieldCollection';
import DocumentationComponentsDataFieldDateTime from './DocumentationComponentsDataFieldDateTime';
import DocumentationComponentsButton from './DocumentationComponentsButton';
import DocumentationComponentsModal from './DocumentationComponentsModal';
import DocumentationComponentsFeedback from './DocumentationComponentsFeedback';
import DocumentationComponentsBucket from './DocumentationComponentsBucket';

export default {
    data () {
        const openTile = true;
        return {
            name: 'components',
            title: 'CTDS Components',
            summary: 'These are the reusable components found in the CTDS JS Framework. Below are live and code examples, as well as current and coming functionality.',
            sections: [
                { name: 'DocumentationComponentsUsage', title: 'Usage', openTile },
                { name: 'DocumentationComponentsList', title: 'List', openTile },
                { name: 'DocumentationComponentsListNavigation', title: 'Navigation List', openTile },
                { name: 'DocumentationComponentsListSimple', title: 'Simple List', openTile },
                { name: 'DocumentationComponentsListEditable', title: 'Editable List', openTile },
                { name: 'DocumentationComponentsSearchBar', title: 'Search Bar', openTile },
                { name: 'DocumentationComponentsCard', title: 'Card', openTile },
                { name: 'DocumentationComponentsTabs', title: 'Tabs', openTile },
                { name: 'DocumentationComponentsTile', title: 'Tile', openTile },
                { name: 'DocumentationComponentsDataField', title: 'Data Field', openTile },
                { name: 'DocumentationComponentsDataFieldCollection', title: 'Data Field - collection', openTile },
                { name: 'DocumentationComponentsDataFieldDateTime', title: 'Data Field - date/time', openTile },
                { name: 'DocumentationComponentsButton', title: 'Button', openTile },
                { name: 'DocumentationComponentsModal', title: 'Modal', openTile },
                { name: 'DocumentationComponentsFeedback', title: 'Feedback', openTile },
                { name: 'DocumentationComponentsBucket', title: 'Bucket', openTile }
            ]
        };
    },
    components: {
        DocumentationPage,
        DocumentationComponentsUsage,
        DocumentationComponentsList,
        DocumentationComponentsListNavigation,
        DocumentationComponentsListSimple,
        DocumentationComponentsListEditable,
        DocumentationComponentsSearchBar,
        DocumentationComponentsCard,
        DocumentationComponentsTabs,
        DocumentationComponentsTile,
        DocumentationComponentsDataField,
        DocumentationComponentsDataFieldCollection,
        DocumentationComponentsDataFieldDateTime,
        DocumentationComponentsButton,
        DocumentationComponentsModal,
        DocumentationComponentsFeedback,
        DocumentationComponentsBucket
    }
};
</script>
