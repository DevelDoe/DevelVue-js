<template>
    <article name="documentationComponentsCard" class="documentation-article">
        <h3>Description</h3>
        <p>Displays an Item that the User view or interact with. Can exist in two levels.</p>

        <h3>Example</h3>
        <div class="documentation-example">
            <div class="ctds-card">
                <div class="ctds-card-header">
                    <div class="ctds-card-header-title col-xs-9">
                        <h1>Card</h1>
                        <p>This is a Card-Component.</p>
                    </div>
                    <div class="col-xs-3">
                        <div class="row ctds-card-header-icon-buttons">
                            <button class="ctds-icon-button pull-right" @click="closeItem"><i class="fa fa-times"></i><span class="sr-only">Close</span></button>
                        </div>
                    </div>
                </div>
                <div class="ctds-card-body">
                    <p>This the card body.</p>
                </div>
            </div>
        </div>
        <pre><code>
&lt;template&gt;
...
    &lt;div class="ctds-card"&gt;
        &lt;div class="ctds-card-header"&gt;
            &lt;div class="ctds-card-header-title col-xs-9"&gt;
                &lt;h1&gt;Card&lt;/h1&gt;
                &lt;p&gt;This is a Card-Component.&lt;/p&gt;
            &lt;/div&gt;
            &lt;div class="col-xs-3"&gt;
                &lt;div class="row ctds-card-header-icon-buttons"&gt;
                    &lt;button class="ctds-icon-button pull-right" @click="closeItem"&gt;&lt;i class="fa fa-times"&gt;&lt;/i&gt;&lt;span class="sr-only"&gt;Close&lt;/span&gt;&lt;/button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="ctds-card-body"&gt;
            &lt;p&gt;This the card body.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
...
&lt;/template&gt;
&lt;script&gt;
export default {
    methods: {
        closeItem () {
            // Close item in card.
        }
    }
};
&lt;/script&gt;
        </code></pre>

        <h3>Future functionality</h3>
        <ul>
            <li>Has full documentation.</li>
            <li>Is a component: <code>&lt;ctds-card&gt;&lt;/ctds-card&gt;</code>.</li>
        </ul>
    </article>
</template>
<script>
export default {
    methods: {
        closeItem () {
            alert('Closing card!');
        }
    }
};
</script>
