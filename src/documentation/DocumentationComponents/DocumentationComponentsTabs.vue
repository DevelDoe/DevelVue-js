<template>
    <article name="documentationComponentsTabs" class="documentation-article">
        <h3>Description</h3>
        <p>Splits the main module into specific sub-modules, showing one sub-module at a time.</p>

        <h3>Example</h3>
        <div class="documentation-example">
            <ctds-tabs :tabs="tabs" :id="'my-tabs'">
                <component v-for="tab in tabs"
                    :key="tab.route"
                    :is="tab.route"
                    :slot="tab.route"
                    :default="tab.default"
                    :options="tab.options"></component>
            </ctds-tabs>
        </div>
        <pre><code>
&lt;template&gt;
...
    &lt;ctds-tabs :tabs="tabs" :id="'my-tabs'"&gt;
        &lt;component v-for="tab in tabs"
            :key="tab.route"
            :is="tab.route"
            :slot="tab.route"
            :default="tab.default"
            :options="tab.options"&gt;&lt;/component&gt;
    &lt;/ctds-tabs&gt;
...
&lt;/template&gt;
&lt;script&gt;
import MyModuleFirstTab from './MyModuleFirstTab';
import MyModuleSecondTab from './MyModuleSecondTab';

export default {
    components: {
        MyModuleFirstTab,
        MyModuleSecondTab
    },
    data () {
        const options = {
            option1: 'Tab #1',
            option2: 'Tab #2'
        };
        const optionsTab1 = Object.assign({ tab1Option: 'Tab 1 Option' }, options);
        const optionsTab2 = Object.assign({ tab2Option: 'Tab 2 Option' }, options);

        return {
            tabs: [
                {
                    title: 'First Tab',
                    route: 'MyModuleFirstTab',
                    default: false,
                    options: optionsTab1
                },
                {
                    title: 'Second Tab',
                    route: 'MyModuleSecondTab',
                    default: false,
                    options: optionsTab2
                }
            ]
        };
    }
};
&lt;/script&gt;
        </code></pre>

        <h3>Future functionality</h3>
        <ul>
            <li>Has full documentation.</li>
        </ul>
    </article>
</template>
<script>
import CtdsTabs from '../../components/CtdsTabs';
import DocumentationComponentsTabsFirstTab from './DocumentationComponentsTabsFirstTab';
import DocumentationComponentsTabsSecondTab from './DocumentationComponentsTabsSecondTab';

export default {
    components: {
        CtdsTabs,
        DocumentationComponentsTabsFirstTab,
        DocumentationComponentsTabsSecondTab
    },
    data () {
        const options = {
            option1: 'Tab #1',
            option2: 'Tab #2'
        };
        const optionsTab1 = Object.assign({ tab1Option: 'Tab 1 Option' }, options);
        const optionsTab2 = Object.assign({ tab2Option: 'Tab 2 Option' }, options);

        return {
            tabs: [
                {
                    title: 'First Tab',
                    route: 'DocumentationComponentsTabsFirstTab',
                    default: false,
                    options: optionsTab1
                },
                {
                    title: 'Second Tab',
                    route: 'DocumentationComponentsTabsSecondTab',
                    default: false,
                    options: optionsTab2
                }
            ]
        };
    }
};
</script>
