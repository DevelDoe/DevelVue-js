<template>
    <documentation-page v-bind="{ name: name, title: title, summary: summary, sections: sections }">
        <component v-for="section in sections" :key="section.name" :is="section.name" :slot="section.name"></component>
    </documentation-page>
</template>
<script>
import DocumentationPage from '../DocumentationPage';
import DocumentationGuidelinesGeneral from './DocumentationGuidelinesGeneral';
import DocumentationGuidelinesCodeStyle from './DocumentationGuidelinesCodeStyle';
import DocumentationGuidelinesModuleComponents from './DocumentationGuidelinesModuleComponents';
import DocumentationGuidelinesData from './DocumentationGuidelinesData';

export default {
    data () {
        const openTile = true;
        return {
            name: 'guidelines',
            title: 'Coding Guidelines',
            summary: 'These are the rules to be met in the code base. Follow them in your code and enforce them when reviewing others code.',
            sections: [
                { name: 'DocumentationGuidelinesGeneral', title: 'General', openTile },
                { name: 'DocumentationGuidelinesCodeStyle', title: 'Code style', openTile },
                { name: 'DocumentationGuidelinesModuleComponents', title: 'Module components', openTile },
                { name: 'DocumentationGuidelinesData', title: 'Data', openTile }
            ]
        };
    },
    components: {
        DocumentationPage,
        DocumentationGuidelinesGeneral,
        DocumentationGuidelinesData,
        DocumentationGuidelinesModuleComponents,
        DocumentationGuidelinesCodeStyle
    }
};
</script>
