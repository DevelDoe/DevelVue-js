<template>
    <article name="DocumentationGuidelinesGeneral" class="documentation-article">
        <h3>Introduction</h3>
        <p>These guidelines are based off of the <a href="https://vuejs.org/v2/style-guide/" target="_blank">Vue.js Style Guide</a> and the <a href="https://standardjs.com/rules.html" target="_blank">Standard.js Coding Rules</a> with CTDS-based modifications.</p>
        
        <h3>Evolutionary framework</h3>
        <p>The CTDS JS Framework is a work in progress and subject to change. Often. The documentation found at <a href="https://ctds-js.kghcustoms.com/">https://ctds-js.kghcustoms.com/</a> is the current state of the Framework.</p>
        <p>That means that much of the example code will be replaced by reusable components and utilities/mixins. For example, the Fetch code always looks the same (almost). Such utilities will be continuously produced by the Core Team, with ongoing updates to the Guidelines and the rest of the documentation.</p>
        <p>To avoid technical debt, in addition to the rules laid out in below, have this mind-set:</p>
        <ul>
            <li>Use <router-link :to="{ name: 'DocumentationComponents' }">Framework Components</router-link>.</li>
            <li>Use <router-link :to="{ name: 'DocumentationUtilities' }">Framework Utilities</router-link>.</li>
            <li>
                <p>If there is no Framework Component or Utility that fits the Module's needs, add elements inline to the Module's template and logic in the Module's script.</p>
                <p>Use pure HTML, JavaScript, <a href="https://vuejs.org/v2/guide/" target="_blank">Vue.js</a>, and <a href="https://getbootstrap.com/docs/3.3/" target="_blank">Bootstrap 3.3</a>.</p>
            </li>
            <li>In the above case, if there is no information here in the Documentation about coming functionality, please contact Core. Building Block Module's GUI requirements should be covered predominately in the Framework.</li>
            <li>Remember to Keep It Clean and solve as little as possible in the Building Block Modules.</li>
            <li>
                <p>Do not break the template into Components that the Framework will cover.</p>
                <p><strong>Write inline!</strong> All Building Block-specific Components will be questioned.</p>
                <p>Rules for acceptable Components are detailed below.</p>
            </li>
        </ul>
        <p>This mind-set is the basis for each task and each review of a Pull Request.</p>
        <p>Learn it. Love it. Live it.</p>

        <h3>Prototype-driven development</h3>
        <p>When developing a module, follow this pattern:</p>
        <ol>
            <li>Rapid iterations with small changes.</li>
            <li>
                <p>After each iteration: Review.</p>
                <p>Review the code with a Front-End Friend&trade;.</p>
                <p>Review the interface with a BA.</p>
            </li>
            <li>Start with mock data. Adding the Back-End should be done when the Front-End is ripe.</li>
            <li>Large Pull Requests are dangerous and should be avoided. They will be heavily scrutinized.</li>
        </ol>

        <h3>Single File Components</h3>
        <p><a href="https://vuejs.org/v2/guide/single-file-components.html" target="_blank">Vue.js Single File Components (SFCs)</a> are used in CTDS Building Block Modules. The file structure and order for SFCs is:</p>
        <pre><code>
&lt;template&gt;...&lt;/template&gt;
&lt;script&gt;...&lt;/script&gt;
&lt;style lang="sass" scoped&gt;&lt;/style&gt;
        </code></pre>
        
        <p>The template portion of a SFC starts with a named HTML element. Usually a <code>div</code>. The name matches the Vue-file name, but in lower camelCase. Inside this element goes whatever component code that is needed.</p>
        <pre><code>
&lt;template&gt;
    &lt;div name="myModule"&gt;...&lt;/div&gt;
&lt;/template&gt;
        </code></pre>
        <p>The script portion of a SFC contains all logic specific to the component. If the script portion is getting too complex, then break the component into logical child components. Rules for this are defined further down.</p>
        <p>In the interest of keeping the files in a similar order, follow the <a href="https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended" target="_blank">Vue.js Style Guide</a> for the order of options into a SFC. Below is the most common set-up for CTDS Modules:</p>
        <pre><code>
&lt;script&gt;
import MyModuleChildComponent from './MyModuleChildComponent';

export default {
    components: {...},
    props: [ ... ],
    data () {
        return { ... };
    },
    computed: { ... },
    watch: { ... },
    mounted () { ... },
    methods: { ... }
};
&lt;/script&gt;
        </code></pre>
        <p>Use the <a href="https://vuejs.org/v2/guide/" target="_blank">Vue.js documentation</a> for a detailed explanation of the different options and their uses.</p>
        <p>The style portion of a SFC in a Building Block Module will be rejected 99.9% of the time. This is for consistency between all Modules in CTDS.</p>
        
        <h3>Linter</h3>
        <p>The Standard.js rules are enforced via ESLint, which is a part of the build process. There are two rules that have been overwritten:</p>
        <ol>
            <li>Use 4-spaces, instead of 2-spaces for tabbing.</li>
            <li>Always use semi-colon, instead of never use semi-colon.</li>
        </ol>
        <p>This should run while developing. Yet, this is a bit wonky at the moment. Double-check the build output to make sure that Lint has allowed the code to build, but there are still errors and warnings. Very short edit/build cycles makes it easier to find errors when they are introduced.</p>
        <p><em>Tip!</em> If using Visual Studio Code, add the ESLint Extension by Dirk Baeumer. This provides inline Linting in the editor.</p>
    </article>
</template>
