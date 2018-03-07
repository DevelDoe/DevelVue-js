<template>
    <article name="documentationPluginsShared" class="documentation-article">
        <p>These are instructions for how to use Vue-components shared by other building blocks in your code. Each of the following components are available in the global component library and do not need to be imported in your code.</p>
        <h3>Economic Operator Search Modal</h3>
        <p>The Organization building block shares a component called 'EconomicOperatorSearchModal'. Use this component if you need economic operator data for your own components.</p>
        <img src="../../assets/img/EconomicOperatorSearchModal.png">
        <h4>Example use</h4>
        <pre><code>&lt;template&gt;
    &lt;div name=&quot;exampleModule&quot;&gt;
        &lt;button @click=&quot;openModal&quot;&gt;Open modal&lt;/button&gt;
        &lt;economic-operator-search-modal
            :isVisible=&quot;isEOModalVisible&quot;
            @onCloseModal=&quot;closeModal&quot;
            @onEODblClick=&quot;onSelectEO&quot;&gt;
        &lt;/economic-operator-search-modal&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    data () {
        return {
            isEOModalVisible: false
        };
    },
    methods: {
        openModal () {
            isEOModalVisible = true;
        },
        closeModal () {
            isEOModalVisible = false;
        },
        onSelectEO (operator) {
            // do something with the emitted EO
        }
    }
};
&lt;/script&gt;</code></pre>
        <h4>Input props</h4>
        <dl class="dl-horizontal">
            <dt>isVisible</dt>
            <dd>Boolean variable determining whether the modal is visible or not.</dd>
        </dl>
        </dl>
        <h4>Events emitted</h4>
        <dl class="dl-horizontal">
            <dt>onCloseModal</dt>
            <dd>Event fired when the modal is closed. Triggered by selecting an economic operator, clicking outside the modal, or pressing <kbd>Esc</kbd>.</dd>
            <dt>onEODblClick</dt>
            <dd>Event fired when an economic operator is double clicked in the modal. Outputs an economic operator.</dd>
        </dl>
    </article>
</template>
