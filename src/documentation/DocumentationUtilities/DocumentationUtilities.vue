<template>
    <documentation-page v-bind="{ name: name, title: title, summary: summary, sections: sections }">
        <component v-for="section in sections" :key="section.name" :is="section.name" :slot="section.name"></component>
    </documentation-page>
</template>
<script>
import DocumentationPage from '../DocumentationPage';
import DocumentationUtilitiesVeeValidate from './VeeValidate/DocumentationUtilitiesVeeValidate';

export default {
    data () {
        const openTile = true;
        return {
            name: 'utilities',
            title: 'Working with utilities',
            summary: 'Instructions for working with CTDS utilities.',
            sections: [
                { name: 'DocumentationUtilitiesVeeValidate', title: 'Vee-Validate', openTile }
            ]
        };
    },
    components: {
        DocumentationPage,
        DocumentationUtilitiesVeeValidate
    }
};
</script>
