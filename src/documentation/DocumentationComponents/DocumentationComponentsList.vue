<template>
    <article name="documentationComponentsList" class="documentation-article">
        <h3>Description</h3>
        <p>Displays a Collection of Items in a Grid.</p>
        <p>A user can:</p>
        <ul>
            <li>View data in multiple Items in a Collection.</li>
            <li>Add a new Item to a Collection.</li>
            <li>Interact with an existing Item in a Collection.</li>
        </ul>
        <p>Adding/interacting with Items is covered in coming sections about specific types of Lists.</p>

        <h3>Example</h3>
        <h4>Static List</h4>
        <div class="documentation-example">
            <div class="ctds-tile">
                <header class="ctds-tile-header" @click="toggleTile">
                    <button class="ctds-icon-button pull-right">
                        <i :class="staticTileOpenCloseClasses"></i><span class="sr-only">{{ staticTileOpenCloseLabel }}</span>
                    </button>
                    <h3>Static List Example</h3>
                </header>
                <table v-if="staticTile.isOpenTile" class="ctds-tile-body ctds-grid">
                    <thead>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        <tr><td>First row</td></tr>
                        <tr><td>Second row</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        <pre><code>
&lt;template&gt;
...
    &lt;div class="ctds-tile"&gt;
        &lt;header class="ctds-tile-header" @click="toggleTile"&gt;
            &lt;button class="ctds-icon-button pull-right"&gt;
                &lt;i :class="staticTileOpenCloseClasses"&gt;&lt;/i&gt;&lt;span class="sr-only"&gt;{{ staticTile.labelString }}&lt;/span&gt;
            &lt;/button&gt;
            &lt;h3&gt;Static List Example&lt;/h3&gt;
        &lt;/header&gt;
        &lt;table v-if="staticTile.isOpenTile" class="ctds-tile-body ctds-grid"&gt;
            &lt;thead&gt;
                &lt;th&gt;Name&lt;/th&gt;
            &lt;/thead&gt;
            &lt;tbody&gt;
                &lt;tr&gt;&lt;td&gt;First row&lt;/td&gt;&lt;/tr&gt;
                &lt;tr&gt;&lt;td&gt;Second row&lt;/td&gt;&lt;/tr&gt;
            &lt;/tbody&gt;
        &lt;/table&gt;
    &lt;/div&gt;
...
&lt;/template&gt;
&lt;script&gt;
export default {
    data () {
        return {
            staticTile: {
                isOpenTile: true
            }
        }
    },
    computed: {
        staticTileOpenCloseLabel () {
            return `${this.staticTile.isOpenTile ? 'Close' : 'Open'} tile`;
        },
        staticTileOpenCloseClasses () {
            const isOpen = this.staticTile.isOpenTile;
            return {
                fa: true,
                'fa-angle-up': isOpen,
                'fa-angle-down': !isOpen
            };
        }
    },
    methods: {
        toggleTile () {
            this.staticTile.isOpenTile = !this.staticTile.isOpenTile;
        }
    }
};
&lt;/script&gt;
        </code></pre>

        <h3>Future functionality</h3>
        <ul>
            <li>Is a component: <code>&lt;ctds-list&gt;&lt;/ctds-list&gt;</code>.</li>
            <li>Columns can be sorted.</li>
        </ul>
    </article>
</template>
<script>
export default {
    data () {
        return {
            staticTile: {
                isOpenTile: true,
                labelString: '{{ staticTileOpenCloseLabel }}'
            }
        };
    },
    computed: {
        staticTileOpenCloseLabel () {
            return `${this.staticTile.isOpenTile ? 'Close' : 'Open'} tile`;
        },
        staticTileOpenCloseClasses () {
            const isOpen = this.staticTile.isOpenTile;
            return {
                fa: true,
                'fa-angle-up': isOpen,
                'fa-angle-down': !isOpen
            };
        }
    },
    methods: {
        toggleTile () {
            this.staticTile.isOpenTile = !this.staticTile.isOpenTile;
        }
    }
};
</script>
