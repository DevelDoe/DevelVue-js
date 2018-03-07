<template>
    <article name="documentationComponentsListNavigation" class="documentation-article">
        <h3>Description</h3>
        <p>Displays a Collection of Items in a Grid and allows navigation to a Card-Component.</p>
        <p>A user can:</p>
        <ul>
            <li>View data in multiple Items in a Collection.</li>
            <li>Add a new Item to a Collection. Creating the Item in a Card-Component.</li>
            <li>Open an existing Item in a Collection in a Card-Component by double-clicking on the Item's row.</li>
        </ul>
        <p><em>Note:</em> Opening the card can either be:</p>
        <ul>
            <li>Inline. Keeps the Navigation List's current state.</li>
            <li>New URL. Navigates to a new page and loses the Navigation List's current state.</li>
        </ul>

        <h3>Example</h3>
        <h4>Navigation List - Inline</h4>
        <div class="documentation-example">
            <div v-if="isDisplayList">
                <div class="ctds-tile">
                    <header class="ctds-tile-header" @click="toggleInlineTile">
                        <button class="ctds-icon-button pull-right">
                            <i :class="navigationTileInlineOpenCloseClasses"></i><span class="sr-only">{{ navigationTileInlineOpenCloseLabel }}</span>
                        </button>
                        <h3>Navigation List Inline Example</h3>
                    </header>
                    <table v-if="navigationTileInline.isOpenTile" class="ctds-tile-body ctds-grid">
                        <thead>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                        </thead>
                        <tbody>
                            <tr class="ctds-grid-add-new-row">
                                <td :colspan="rows[0].columns.length">
                                    <button class="ctds-icon-button" @click="addNewInlineItem"><i class="fa fa-plus"></i>Add new content</button>
                                </td>
                            </tr>
                            <tr v-for="row in rows" :key="row.key" @dblclick="openInlineItem(row)">
                                <td v-for="column in row.columns" :key="column">{{ column }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div v-if="isDisplayCard">
                <div class="ctds-card">
                    <div class="ctds-card-header">
                        <div class="ctds-card-header-title col-xs-9">
                            <h1>Card</h1>
                            <p>This is an inline Card-Component.</p>
                        </div>
                        <div class="col-xs-3">
                            <div class="row ctds-card-header-icon-buttons">
                                <button class="ctds-icon-button pull-right" @click="closeInlineItem"><i class="fa fa-times"></i><span class="sr-only">Close</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="ctds-card-body">
                        <p>This a card for: {{ currentItem }}.</p>
                    </div>
                </div>
            </div>
        </div>
        <pre><code>
&lt;template&gt;
...
    &lt;div v-if="isDisplayList"&gt;
        &lt;div class="ctds-tile"&gt;
            &lt;header class="ctds-tile-header" @click="toggleInlineTile"&gt;
                &lt;button class="ctds-icon-button pull-right"&gt;
                    &lt;i :class="navigationTileInlineOpenCloseClasses"&gt;&lt;/i&gt;&lt;span class="sr-only"&gt;{{ navigationTileInlineOpenCloseLabel }}&lt;/span&gt;
                &lt;/button&gt;
                &lt;h3&gt;Navigation List Inline Example&lt;/h3&gt;
            &lt;/header&gt;
            &lt;table v-if="navigationTileInline.isOpenTile" class="ctds-tile-body ctds-grid"&gt;
                &lt;thead&gt;
                    &lt;th&gt;Column 1&lt;/th&gt;
                    &lt;th&gt;Column 2&lt;/th&gt;
                    &lt;th&gt;Column 3&lt;/th&gt;
                &lt;/thead&gt;
                &lt;tbody&gt;
                    &lt;tr&gt;
                        &lt;td :colspan="rows[0].columns.length"&gt;
                            &lt;button class="ctds-icon-button" @click="addNewInlineItem"&gt;&lt;i class="fa fa-plus"&gt;&lt;/i&gt;Add new content&lt;/button&gt;
                        &lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr v-for="row in rows" :key="row.key" @dblclick="openInlineItem(row)"&gt;
                        &lt;td v-for="column in row.columns" :key="column"&gt;{{ columnLabelString }}&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/tbody&gt;
            &lt;/table&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div v-if="isDisplayCard"&gt;
        &lt;div class="ctds-card"&gt;
            &lt;div class="ctds-card-header"&gt;
                &lt;div class="ctds-card-header-title col-xs-9"&gt;
                    &lt;h1&gt;Card&lt;/h1&gt;
                    &lt;p&gt;This is an inline Card-Component.&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="col-xs-3"&gt;
                    &lt;div class="row ctds-card-header-icon-buttons"&gt;
                        &lt;button class="ctds-icon-button pull-right" @click="closeInlineItem"&gt;&lt;i class="fa fa-times"&gt;&lt;/i&gt;&lt;span class="sr-only"&gt;Close&lt;/span&gt;&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="ctds-card-body"&gt;
                &lt;p&gt;This a card for: {{ currentItemLabelString }}.&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
...
&lt;/template&gt;
&lt;script&gt;
export default {
    data () {
        return {
            navigationTileInline: {
                isOpenTile: true
            },
            rows: [
                {
                    key: 'Row1',
                    columns: [ 'Info A', 'Info B', 'Info C' ]
                },
                {
                    key: 'Row2',
                    columns: [ 'Info D', 'Info E', 'Info F' ]
                }
            ],
            isDisplayList: true,
            isDisplayCard: false,
            currentItem: null
        };
    },
    computed: {
        navigationTileInlineOpenCloseLabel () {
            return `${this.navigationTileInline.isOpenTile ? 'Close' : 'Open'} tile`;
        },
        navigationTileInlineOpenCloseClasses () {
            const isOpen = this.navigationTileInline.isOpenTile;
            return {
                fa: true,
                'fa-angle-up': isOpen,
                'fa-angle-down': !isOpen
            };
        }
    },
    methods: {
        toggleInlineTile () {
            this.navigationTileInline.isOpenTile = !this.navigationTileInline.isOpenTile;
        },
        addNewInlineItem () {
            this.openInlineItem();
        },
        openInlineItem (item) {
            this.currentItem = item || 'New item';
            this.isDisplayList = false;
            this.isDisplayCard = true;
        },
        closeInlineItem () {
            this.isDisplayList = true;
            this.isDisplayCard = false;
        }
    }
};
&lt;/script&gt;
        </code></pre>
        
        <h4>Navigation List - Navigate to new URL</h4>
        <div class="documentation-example">
            <div class="ctds-tile">
                <header class="ctds-tile-header" @click="toggleNavigateTile">
                    <button class="ctds-icon-button pull-right">
                        <i :class="navigationTileNavigateOpenCloseClasses"></i><span class="sr-only">{{ navigationTileNavigateOpenCloseLabel }}</span>
                    </button>
                    <h3>Navigation List Navigate Example</h3>
                </header>
                <table v-if="navigationTileNavigate.isOpenTile" class="ctds-tile-body ctds-grid">
                    <thead>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                    </thead>
                    <tbody>
                        <tr class="ctds-grid-add-new-row">
                            <td :colspan="rows[0].columns.length">
                                <button class="ctds-icon-button" @click="addNewNavigateItem"><i class="fa fa-plus"></i>Add new content</button>
                            </td>
                        </tr>
                        <tr v-for="row in rows" :key="row.key" @dblclick="openNavigateItem(row)">
                            <td v-for="column in row.columns" :key="column">{{ column }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <pre><code>
&lt;template&gt;
...
    &lt;div class="ctds-tile"&gt;
        &lt;header class="ctds-tile-header" @click="toggleNavigateTile"&gt;
            &lt;button class="ctds-icon-button pull-right"&gt;
                &lt;i :class="navigationTileNavigateOpenCloseClasses"&gt;&lt;/i&gt;&lt;span class="sr-only"&gt;{{ navigationTileNavigateOpenCloseLabel }}&lt;/span&gt;
            &lt;/button&gt;
            &lt;h3&gt;toggleNavigateTile&lt;/h3&gt;
        &lt;/header&gt;
        &lt;table v-if="navigationTileNavigate.isOpenTile" class="ctds-tile-body ctds-grid"&gt;
            &lt;thead&gt;
                &lt;th&gt;Column 1&lt;/th&gt;
                &lt;th&gt;Column 2&lt;/th&gt;
                &lt;th&gt;Column 3&lt;/th&gt;
            &lt;/thead&gt;
            &lt;tbody&gt;
                &lt;tr&gt;
                    &lt;td :colspan="rows[0].columns.length"&gt;
                        &lt;button class="ctds-icon-button" @click="addNewNavigateItem"&gt;&lt;i class="fa fa-plus"&gt;&lt;/i&gt;Add new content&lt;/button&gt;
                    &lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr v-for="row in rows" :key="row.key" @dblclick="openNavigateItem(row)"&gt;
                    &lt;td v-for="column in row.columns" :key="column"&gt;{{ columnLabelString }}&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/tbody&gt;
        &lt;/table&gt;
    &lt;/div&gt;
...
&lt;/template&gt;
&lt;script&gt;
export default {
    data () {
        return {
            navigationTileNavigate: {
                isOpenTile: true
            },
            rows: [
                {
                    key: 'Row1',
                    columns: [ 'Info A', 'Info B', 'Info C' ]
                },
                {
                    key: 'Row2',
                    columns: [ 'Info D', 'Info E', 'Info F' ]
                }
            ]
        };
    },
    computed: {
        navigationTileNavigateOpenCloseLabel () {
            return `${this.navigationTileNavigate.isOpenTile ? 'Close' : 'Open'} tile`;
        },
        navigationTileNavigateOpenCloseClasses () {
            const isOpen = this.navigationTileNavigate.isOpenTile;
            return {
                fa: true,
                'fa-angle-up': isOpen,
                'fa-angle-down': !isOpen
            };
        }
    },
    methods: {
        toggleNavigateTile () {
            this.navigationTileNavigate.isOpenTile = !this.navigationTileNavigate.isOpenTile;
        },
        addNewNavigateItem () {
            this.openNavigateItem();
        },
        openNavigateItem (item) {
            window.Workspace.navigate('bb/my-module/item', { trigger: false });
        }
    }
};
&lt;/script&gt;
        </code></pre>

        <h3>Future functionality</h3>
        <ul>
            <li>Is a component: <code>&lt;ctds-navigation-list&gt;&lt;/ctds-navigation-list&gt;</code>.</li>
            <li>Columns can be sorted.</li>
            <li>Columns can be grouped.</li>
            <li>Columns can be filtered.</li>
            <li>Columns can be reordered.</li>
            <li>Columns can be resized.</li>
            <li>Lists can be paginated.</li>
        </ul>
    </article>
</template>
<script>
export default {
    data () {
        return {
            navigationTileInline: {
                isOpenTile: true,
                labelString: '{{ navigationTileInlineOpenCloseLabel }}'
            },
            navigationTileNavigate: {
                isOpenTile: true,
                labelString: '{{ navigationTileNavigateOpenCloseLabel }}'
            },
            rows: [
                {
                    key: 'Row1',
                    columns: [ 'Info A', 'Info B', 'Info C' ]
                },
                {
                    key: 'Row2',
                    columns: [ 'Info D', 'Info E', 'Info F' ]
                }
            ],
            columnLabelString: '{{ column }}',
            currentItemLabelString: '{{ currentItem }}',
            isDisplayList: true,
            isDisplayCard: false,
            currentItem: null
        };
    },
    computed: {
        navigationTileInlineOpenCloseLabel () {
            return `${this.navigationTileInline.isOpenTile ? 'Close' : 'Open'} tile`;
        },
        navigationTileInlineOpenCloseClasses () {
            const isOpen = this.navigationTileInline.isOpenTile;
            return {
                fa: true,
                'fa-angle-up': isOpen,
                'fa-angle-down': !isOpen
            };
        },
        navigationTileNavigateOpenCloseLabel () {
            return `${this.navigationTileNavigate.isOpenTile ? 'Close' : 'Open'} tile`;
        },
        navigationTileNavigateOpenCloseClasses () {
            const isOpen = this.navigationTileNavigate.isOpenTile;
            return {
                fa: true,
                'fa-angle-up': isOpen,
                'fa-angle-down': !isOpen
            };
        }
    },
    methods: {
        toggleInlineTile () {
            this.navigationTileInline.isOpenTile = !this.navigationTileInline.isOpenTile;
        },
        toggleNavigateTile () {
            this.navigationTileNavigate.isOpenTile = !this.navigationTileNavigate.isOpenTile;
        },
        addNewInlineItem () {
            this.openInlineItem();
        },
        openInlineItem (item) {
            this.currentItem = item || 'New item';
            this.isDisplayList = false;
            this.isDisplayCard = true;
        },
        closeInlineItem () {
            this.isDisplayList = true;
            this.isDisplayCard = false;
        },
        addNewNavigateItem () {
            this.openNavigateItem();
        },
        openNavigateItem (item) {
            alert(`Navigated to ${item ? item.key : 'New item'}`);
        }
    }
};
</script>
