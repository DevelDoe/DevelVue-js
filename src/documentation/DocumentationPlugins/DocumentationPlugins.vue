<template>
    <documentation-page v-bind="{ name: name, title: title, summary: summary, sections: sections }">
        <component v-for="section in sections" :key="section.name" :is="section.name" :slot="section.name"></component>
    </documentation-page>
</template>
<script>
import DocumentationPage from '../DocumentationPage';
import DocumentationPluginsArchitecture from './DocumentationPluginsArchitecture';
import DocumentationPluginsNew from './DocumentationPluginsNew';
import DocumentationPluginsBuild from './DocumentationPluginsBuild';
import DocumentationPluginsSandbox from './DocumentationPluginsSandbox';
import DocumentationPluginsShared from './DocumentationPluginsShared';

export default {
    data () {
        const openTile = true;
        return {
            name: 'plugins',
            title: 'Working with Plugins',
            summary: 'Instructions for using the CTDS Building Block Plug-In architecture.',
            sections: [
                { name: 'DocumentationPluginsArchitecture', title: 'Architecture', openTile },
                { name: 'DocumentationPluginsNew', title: 'Adding a new plug-in', openTile },
                { name: 'DocumentationPluginsBuild', title: 'Build steps', openTile },
                { name: 'DocumentationPluginsSandbox', title: 'Sandbox', openTile },
                { name: 'DocumentationPluginsShared', title: 'Using shared components', openTile }
            ]
        };
    },
    components: {
        DocumentationPage,
        DocumentationPluginsArchitecture,
        DocumentationPluginsNew,
        DocumentationPluginsBuild,
        DocumentationPluginsSandbox,
        DocumentationPluginsShared
    }
};
</script>
