<template>
    <article name="documentationGuidelinesCodeStyle" class="documentation-article">
        <h3>General</h3>
        <p>The <a href="https://vuejs.org/v2/style-guide/" target="_blank">Vue.js Style Guide</a> and <a href="https://github.com/ryanmcdermott/clean-code-javascript" target="_blank">Clean Code JavaScript</a> are good sources of inspiration. The most important rules are found below.</p>

        <h3>Vue components</h3>
        <p>Vue component:</p>
        <ul>
            <li>...file names are written in PascalCase. Example: <code>MyModule.vue</code>.</li>
            <li>...are referred to in PascalCase in scripts. Example: <code>import MyModule from './modules/MyModule/MyModule';</code>.</li>
            <li>...are referred to in kebab-case in templates. Example: <code>&lt;my-module&gt;&lt;/my-module&gt;</code>.</li>
        </ul>

        <h3>Variables</h3>
        <p>Variables:</p>
        <ul>
            <li>...are in camelCase. Example: <code>const myVariable = 'a';</code>.</li>
            <li>
                <p>...have meaningful and pronouceable names. Example: <code>const myVariable = 'a';</code>, not <code>const myVar = 'a'</code>.</p>
                <p>The code is minified in the build. No need to write it that way.</p>
            </li>
            <li>...use <code>const</code> if they are defined once and never updated.</li>
            <li>...use <code>let</code> if they are defined and updated.</li>
        </ul>

        <h3>Functions</h3>
        <p>Functions:</p>
        <ul>
            <li>...are in camelCase. Example: <code>describeMyMethod () { ... }</code>.</li>
            <li>
                <p>...are defined without the <code>function</code> identifier.</p>
                <pre><code>
&lt;script&gt;
export default {
    computed: {
        myComputedVariable () { ... }
    },
    mounted () { ... },
    methods: {
        describeMyMethod () { ... }
    }
};
&lt;/script&gt;
                </code></pre>
            </li>
            <li>...say what they do. <code>fetchDataFromAPI () { ... }</code></li>
            <li>...do one thing. Split into multiple functions if the parent function is complex.</li>
            <li>
                <p>...are <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" target="_blank">arrow functions</a> if nested in a parent function.</p>
                <pre><code>
&lt;script&gt;
export default {
    methods: {
        reduceCollection (collection) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            return collection.reduce((reducer));
        }
    }
};
&lt;/script&gt;
                </code></pre>
            </li>
            <li>
                <p>...use objects as parameters, when there are more than two parameters. Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring" target="_blank">Object destructuring</a> to assign the values from the input object parameter to single variables.</p>
                <pre><code>
&lt;template&gt;
    &lt;div name="myModule" @click="createComponent({ name: 'Bengt', id: 'bork' })"&gt;...&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    methods: {
        createComponent ({ name, id }) { ... }
    }
};
&lt;/script&gt;
                </code></pre>
            </li>
            <li>...use native <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank">Object</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">Array</a> functions when possible.</li>
        </ul>

        <h3>Vue templates</h3>
        <p>Elements in Vue templates:</p>
        <ul>
            <li>...follow <a href="https://vuejs.org/v2/style-guide/#Element-attribute-order-recommended" target="_blank">Vue.js attribute order</a>.</li>
            <li>
                <p>...use <a href="https://vuejs.org/v2/style-guide/#Directive-shorthands-strongly-recommended" target="_blank">short-hand</a>:</p>
                <ul>
                    <li><code>&lt;div :myVariable="myVariable"&gt;...&lt;/div&gt;</code>, not <code>&lt;div v-bind:myVariable="myVariable"&gt;...&lt;/div&gt;</code>.</li>
                    <li><code>&lt;div @click="describeEvents"&gt;...&lt;/div&gt;</code>, not <code>&lt;div v-on:click="describeEvents"&gt;...&lt;/div&gt;</code>.</li>
                </ul>
            </li>
            <li>
                <p>...split attributes into their own rows if there are many attributes.</p>
                <pre><code>
&lt;template&gt;
    &lt;div name="myModule"
        v-for="item in myCollection"
        :key
        @click="onClickItem"&gt;...&lt;/div&gt;
&lt;/template&gt;
                </code></pre>
            </li>
        </ul>
    </article>
</template>
