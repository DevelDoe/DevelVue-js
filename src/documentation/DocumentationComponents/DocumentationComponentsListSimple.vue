<template>
    <article name="documentationComponentsListSimple" class="documentation-article">
        <h3>Description</h3>
        <p>Displays a Collection of Items in a Grid and allows adding/editing an Item.</p>
        <p>A user can:</p>
        <ul>
            <li>View data in multiple Items in a Collection.</li>
            <li>Add a new Item to a Collection. Either by pressing the Add-button or tabbing out of the last row while in edit mode.</li>
            <li>Interact with an existing Item in a Collection. Can edit an Item when in edit mode or remove an Item by pressing the Delete-button.</li>
        </ul>

        <!-- <h3>Example</h3>
        <h4>Simple List</h4>
        <div class="documentation-example">
            <div class="ctds-tile">
                <header class="ctds-tile-header" @click="toggleTile">
                    <button class="ctds-icon-button pull-right">
                        <i :class="simpleTileOpenCloseClasses"></i><span class="sr-only">{{ simpleTileOpenCloseLabel }}</span>
                    </button>
                    <h3>Simple List Example</h3>
                </header>
                <table v-if="simpleTile.isOpenTile" class="ctds-tile-body ctds-grid">
                    <thead>
                        <th>Id</th>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th class="ctds-grid-delete-column"></th>
                    </thead>
                    <tbody>
                        <tr class="ctds-grid-interactive-row">
                            <td colspan="4">
                                <button class="ctds-icon-button" @click="addNewItem($event)"><i class="fa fa-plus"></i>Add new content</button>
                            </td>
                        </tr>
                        <tr v-for="(row, index) in rows" :key="row.id" :class="{ 'ctds-grid-interactive-row': checkIfInEditMode(index) }">
                            <td v-for="(columnValue, columnKey) in row" :key="columnKey" @click="openEditMode(index, $event)" @keydown.enter.prevent="closeEditMode">
                                <input v-if="checkIfInEditMode(index)" v-model="row[columnKey]" class="form-control">
                                <p v-else>{{ columnValue }}</p>
                            </td>
                            <td class="ctds-grid-delete-column" @keydown.tab.prevent="addNewItem($event, index)">
                                <button class="ctds-icon-button" @click="deleteItem(index)">
                                    <i class="fa fa-trash"></i><span class="sr-only">Delete item</span>
                                </button>
                            </td>
                        </tr>
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
                    &lt;i :class="simpleTileOpenCloseClasses"&gt;&lt;/i&gt;&lt;span class="sr-only"&gt;{{ simpleTileOpenCloseLabel }}&lt;/span&gt;
                &lt;/button&gt;
                &lt;h3&gt;Simple List Example&lt;/h3&gt;
        &lt;/header&gt;
        &lt;table v-if="simpleTile.isOpenTile" class="ctds-tile-body ctds-grid"&gt;
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
            simpleTile: {
                isOpenTile: true
            }
        }
    },
    computed: {
        simpleTileOpenCloseLabel () {
            return `${this.simpleTile.isOpenTile ? 'Close' : 'Open'} tile`;
        },
        simpleTileOpenCloseClasses () {
            const isOpen = this.simpleTile.isOpenTile;
            return {
                fa: true,
                'fa-angle-up': isOpen,
                'fa-angle-down': !isOpen
            };
        }
    },
    methods: {
        toggleTile () {
            this.simpleTile.isOpenTile = !this.simpleTile.isOpenTile;
        }
    }
};
&lt;/script&gt;
        </code></pre> -->

        <h3>Future functionality</h3>
        <p></p>
        <ul>
            <li>Has full documentation.</li>
            <li>Is a component: <code>&lt;ctds-simple-list&gt;&lt;/ctds-simple-list&gt;</code>.</li>
            <li>Columns can be sorted.</li>
        </ul>
    </article>
</template>
<script>
export default {
    data () {
        return {
            simpleTile: {
                isOpenTile: true,
                labelString: '{{ simpleTileOpenCloseLabel }}'
            },
            rows: [
                {
                    id: 'Row1',
                    column1: 'Info A',
                    column2: 'Info B'
                },
                {
                    id: 'Row2',
                    column1: 'Info C',
                    column2: 'Info D'
                }
            ],
            editRowIndex: null
        };
    },
    computed: {
        simpleTileOpenCloseLabel () {
            return `${this.simpleTile.isOpenTile ? 'Close' : 'Open'} tile`;
        },
        simpleTileOpenCloseClasses () {
            const isOpen = this.simpleTile.isOpenTile;
            return {
                fa: true,
                'fa-angle-up': isOpen,
                'fa-angle-down': !isOpen
            };
        },
        lastRowIndex () {
            return this.rows.length - 1;
        }
    },
    methods: {
        toggleTile () {
            this.simpleTile.isOpenTile = !this.simpleTile.isOpenTile;
        },
        addNewItem (event, index = null) {
            // If adding by tabbing, only do it for last row.
            console.log(event.currentTarget);
            console.log(index);

            if (index !== null && index !== this.lastRowIndex) {
                return;
            }
            this.rows.push({
                id: null,
                column1: null,
                column2: null
            });
            this.$nextTick(() => {
                this.openEditMode(this.lastRowIndex, null);
            });
        },
        deleteItem (index) {
            this.rows.splice(index, 1);
        },
        openEditMode (index, event) {
            this.editRowIndex = index;
            // const focusItem = event === null ? this.$refs.mySimpleList

            // this.$nextTick(() => {
            //     const focusItem = this.$refs.mySimpleListRow[rowIndex];
            //     console.log(focusItem);
            //     console.log(`openEditMode: ${rowIndex}, ${columnIndex}`);
            // });
        },
        closeEditMode () {
            this.editRowIndex = null;
        },
        checkIfInEditMode (index) {
            return index === this.editRowIndex;
        }
    }
};
</script>
