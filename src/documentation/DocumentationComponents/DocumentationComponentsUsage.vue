<template>
    <article name="documentationComponentsUsage" class="documentation-article">
        <h3>General</h3>
        <p>These components are based off the <a href="http://zone.kgh.local/collaboration/10/bfxproject/SitePages/Home.aspx?RootFolder=%2Fcollaboration%2F10%2Fbfxproject%2FGemensamma%20dokument%2FBF%20System%20Requirements%2FUX%20and%20UI%20standard%2FCTDS%5FUX%5Fdelivery%2FDelivery%2FUX%2Dinstructions&FolderCTID=0x012000D4A3BFCB8287A4448148305F7B1A7D29&View=%7BED3C590A%2D7678%2D40FE%2DBC27%2DC3282CAD624C%7D" target="_blank">CTDS Design Guidelines and Style Sheet</a>.</p>
        <p>In this section a series of typical workflows are detailed to provide an example of each component's usage. The current version of the Framework does not support keeping state between different browser URLs. This will be upgraded with <a href="https://vuex.vuejs.org/en/intro.html" target="_blank">Vuex</a> in a later version of the Framework. This will impact the design of the application.</p>

        <h3>Search</h3>
        <p>This is the first Module a user is presented when going into a Building Block. It is split into two components:</p>
        <ol>
            <li>Search Bar</li>
            <li>Navigation List</li>
        </ol>
        <p>Currently, the full Collection to be displayed in the Navigation List is loaded when the Module is mounted. The Navigation list, however, is empty to start.</p>
        <p>The Search bar is a series of search fields used to filter the data presented in the Navigation List. As the full Collection is loaded at the beginning of the Module's life-cycle, the filtering is done client-side.</p>
        <p>The Navigation List...</p>
        <ul>
            <li>has an optional "Add new" row at the top of the List. Clicking on this opens a First-Level Card-Component to add a new Item.</li>
            <li>has rows that display a portion of an Item in a Collection. Double-clicking on a row opens a First-Level Card-Component to view/edit an existing Item.</li>
        </ul>
        <p>The card is either an inline-component to be able to keep the current state of the Search or navigated to via URL (which will clear the Search state).</p>

        <h3>First-Level Card</h3>
        <p>This is a Component in which the user can edit Items or launch actions from. It fills the entire body of the Application and is split into into two parts:</p>
        <ol>
            <li>Header</li>
            <li>Body</li>
        </ol>
        <p>When opening a card as an inline-component from Search, the data is passed into the Card by its parent. When opening a card via URL navigation, data is loaded when the Card is mounted.</p>
        <p>The Header contains static Data Field-components for general information about the Item opened in the Card. To the far right there are also different actions. Default actions are:</p>
        <ul>
            <li>Close (via the X-icon). Closes the Card, discards any changes that have not been saved, and shows the Search.</li>
            <li>Save (via the disk-icon). Saves any changes that have been made in the Card.</li>
            <li>Expand/Collapse (via the arrow-icons). Either opens or closes all Tile-Components inside the Card.</li>
        </ul>
        <p>The Body can either show a single content area or multiple content areas via the Tabs-Component. The content area(s) are split into Tile-components that can have Data Field-Components, List-Components, or Button-Componnents.</p>
        <p>If the Body contains a Navigation List, it acts in the same way as a Navigation List in Search. Except, in this case it opens a Second-Level Card-Component, which must be inline.</p>

        <h3>Second-Level Card</h3>
        <p>This is a Component that acts much in the same way as a First-Level Card. It fills the entire body of the content area in which it was opened from the First-Level Card-Component. It is the deepest level, therefore it cannot contain a Navigation List-Component.</p>
        <p>The parent First-Level Card-Component's actions are disabled when a Second-Level Card-Component is open. Default actions are:</p>
        <ul>
            <li>Close (via the X-icon). Closes the Card, discards any changes that have not been saved, and shows the First-Level Card.</li>
            <li>Save (via the disk-icon). Saves any changes that have been made in the Card, closes the Card, and shows the First-Level Card. With the saved changed there is a round-trip so the First-Level Card is updated.</li>
            <li>Expand/Collapse (via the arrow-icons). Either opens or closes all Tile-Components inside the Card.</li>
        </ul>

        <h3>Other components</h3>
        <p>There are some components whose usage is not explained in this section:</p>
        <ul>
            <li>Modal</li>
            <li>Bucket</li>
            <li>Feedback</li>
        </ul>
        <p>These are explained in their own sections. What is good to know is that these components need to be added as inline-components at the moment.</p>
    </article>
</template>