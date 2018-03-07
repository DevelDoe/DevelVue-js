<template>
    <article name="documentationGuidelinesModuleComponents" class="documentation-article">
        <h3>Module</h3>
        <p>Below are the steps to add a new module to a Building Block plug-in. The documentation uses the name <code>MyModule</code> as an example. When reviewing code, make sure that these steps have been followed.</p>
        <p><em>Note:</em> To keep track of state follow the one routing path-per-module rule. New Route = New Module.</p>
        <ol>
            <li>In the Building Block-web folder, under <code>src/modules</code> add a new folder with name of the Module.</li>
            <li>In that folder add a Vue-file with the Module name. For example, in the folder <code>src/modules/MyModule</code> add <code>MyModule.vue</code>. Note that the folder and file follow PascalCase.</li>
            <li>
                <p>In the Building Block's <code>plugin.js</code> import and export the new Module.</p>
                <pre><code>
import MyModule from './modules/MyModule/MyModule';

export default {
    MyModule
};
                </code></pre>
            </li>
            <li>
                <p>In <code>router.js</code> add a route to the Module.</p>
                <pre><code>
showBuildingBlockVueView: function (module, id) {
    var path = '/Application/assets/js/cpm-bb.min.js';
    var modules = [
        { url: 'my-module', component: 'MyModule' }
    ];
    this.showVueView(path, modules, module, id);
},
                </code></pre>
                <p>The URL is in kebab-case and follows the module name as closely as possible. Navigating to that URL will show the Module.</p>
            </li>
        </ol>
        <p>Remember to follow the Guidelines regarding the Evolutionary Framework (described above).</p>

        <h3>Sub-components</h3>
        <p>The Guidelines state to avoid creating Sub-Components in Module-Components, especially when those components will be provided by the Framework in the future. This section describes the exceptions to that rule.</p>
        <p>Remember: Keep It Clean. Creating Sub-Components to keep the module code readable is desired when a Module is broken into multiple specific views. Those type of views are:</p>
        <ul>
            <li>Tabs</li>
            <li>Cards</li>
            <li>Modals</li>
        </ul>
        <p>See <router-link :to="{ name: 'DocumentationComponents' }">Framework Components</router-link> for a description of these components.</p>
        <p>The naming of the sub-components are <a href="https://vuejs.org/v2/style-guide/#Tightly-coupled-component-names-strongly-recommended" target="_blank">tightly coupled</a> to their parent Module.</p>
        <ul>
            <li>Tabs -> MyModuleFirstTab.vue</li>
            <li>
                <p>Cards have two levels. Naming should include descriptive name for that describes the content of the card, as well as "Card".</p>
                <ul>
                    <li>First-Level Cards -> MyModuleListCard.vue</li>
                    <li>Second-Level Cards -> MyModulesListCardItemCard.vue</li>
                </ul>
            </li>
            
            <li>Modals -> MyModuleModal.vue</li>
        </ul>
        <p>If unsure, talk to a Front-End Friend&trade;. Still unsure? Contact Core.</p>
    </article>
</template>
