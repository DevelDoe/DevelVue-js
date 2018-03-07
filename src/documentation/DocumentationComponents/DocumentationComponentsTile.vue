<template>
    <article name="documentationComponentsTile" class="documentation-article">
        <h3>Description</h3>
        <p>Displays a group of data fields or a single Simple List in visual group. The tile can be expanded and collapsed.</p>

        <h3>Example</h3>
        <div class="documentation-example">
            <ctds-tile :title="'Tile title'" :collapsed="false" :collapsible="true" :id="'my-tile'">
                Here is the tile content.
            </ctds-tile>
        </div>
        <pre><code>
&lt;template&gt;
...
    &lt;ctds-tile :title="'Tile title'" :collapsed="false" :collapsible="true" :id="'my-tile'"&gt;
        Here is the tile content.
    &lt;/ctds-tile&gt;
...
&lt;/template&gt;
        </code></pre>
        <h3>Future functionality</h3>
        <p></p>
        <ul>
            <li>Has full documentation.</li>
        </ul>
    </article>
</template>
<script>
import CtdsTile from '../../components/CtdsTile';

export default {
    components: {
        CtdsTile
    }
};
</script>
