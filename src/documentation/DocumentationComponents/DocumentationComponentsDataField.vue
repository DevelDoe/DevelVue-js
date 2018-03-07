<template>
    <article name="documentationComponentsDataField" class="documentation-article">
        <h3>Description</h3>
        <p><code>&lt;ctds-data-field&gt;</code> - Displays single data nodes.</p>
        <p>Has the following states:</p>
        <ul>
            <li>Default: edit a data node in an input field.</li>
            <li>Read-Only: view a data node as a text field.</li>
            <li>Disabled: view a data node in an input field.</li>
            <li>Hidden: data node in an input field in the DOM, but not visible to the User.</li>
            <li>Required: edit a data node in an input field, validated as required.</li>
        </ul>
        <p>Has the following types:</p>
        <ul>
            <li>Default: view/edit as a string.</li>
            <li>Number: view as a string with correct number format, edit as a number.</li>
            <li>Boolean: view as a string, edit as a checkbox</li>
            <li>Textarea: view as a string, edit as a textarea with multiple row support</li>
            <li>Collection: view as a string, edit as a drop down list</li>
            <li>Date: view as a string with desired date format and time zone, edit as a date time picker</li>
            <li>DateTime: view as a string with desired date format and time zone, edit as a date picker</li>
        </ul>
        <h3>Props</h3>
        <ul>
            <li><code>v-model</code> - Input model, will be changed on input (use moment object for <code>DATE</code> and <code>DATETIME</code>)</li>
            <li><code>id</code> - id of the input, used by label</li>
            <li><code>type</code> - type of input: <code>STRING, NUMBER, BOOLEAN, COLLECTION, TEXTAREA, DATE, DATETIME</code></li>
            <li><code>label</code> - label of the input</li>
            <li><code>isReadOnly</code> - view a data node as a text field</li>
            <li><code>isDisabled</code> - view a data node in an input field, with the <code>disabled</code> attribute</li>
            <li><code>isHidden</code> - data node in an input field in the DOM, but not visible to the User</li>
            <li><code>isRequired</code> - view a data node in an input field, with the <code>required</code> attribute</li>
            <li><code>labelTrue</code> - Label for type <code>BOOLEAN</code>, when value is <code>true</code>, default: <code>'Yes'</code></li>
            <li><code>labelFalse</code> - Label for type <code>BOOLEAN</code>, when value is <code>false</code>, default: <code>'No'</code></li>
            <li><code>options</code> - Array of options for <code>COLLECTION</code>. Format: <code>[{ key: 'mykey', value: 'My value' }, ...]</code></li>
            <li>
                <code>dateSettings</code> - Object of settings for <code>DATE</code> and <code>DATETIME</code>. Available options:
                <ul>
                    <li><code>timeZone</code> - String, name of the timezone to use. To get all available timezones, use <code>moment.tz.names</code></li>
                    <li><code>format</code> - String, format to use when in ReadOnly-state, <a href="https://momentjs.com/docs/#/displaying/format/">https://momentjs.com/docs/#/displaying/format/</a></li>
                    <li><code>minDate</code> - moment, min date in date picker</li>
                    <li><code>maxDate</code> - moment, max date in date picker</li>
                </ul>
            </li>
        </ul>

        <h3>Default example</h3>
        <div class="documentation-example">
            <ctds-data-field
                v-model="inputModel"
                type="STRING"
                id="inputDefault"
                label="Text input"></ctds-data-field>
        </div>
        <pre><code>
&lt;template&gt;
    &lt;ctds-data-field
        type="STRING"
        v-model="inputModel"
        id="inputDefault"
        label="Text input"&gt;&lt;/ctds-data-field&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    data () {
        return {
            inputModel: 'Input field'
        };
    }
};
&lt;/script&gt;
        </code></pre>

        <h3>Date time example</h3>
        <ctds-data-field
            v-model="dateModel"
            type="DATETIME"
            id="inputDateTime"
            label="Date time input"></ctds-data-field>
        <ctds-data-field
            v-model="dateModel"
            type="DATETIME"
            :dateSettings="dateSettings"
            :isReadOnly="true"></ctds-data-field>
        <pre><code>
&lt;template&gt;
    &lt;ctds-data-field
        v-model="dateModel"
        type="DATETIME"
        id="inputDateTime"
        label="Date time input"&gt;&lt;/ctds-data-field&gt;
    &lt;ctds-data-field
        v-model="dateModel"
        type="DATETIME"
        :dateSettings="dateSettings"
        :isReadOnly="true"&gt;&lt;/ctds-data-field&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    data () {
        return {
            dateModel: this.$moment(),
            dateSettings: {
                format: 'MM/DD/YYYY hh:mm a',
                timeZone: 'America/New_York'
            }
        };
    }
};
&lt;/script&gt;
        </code></pre>
    </article>
</template>
<script>
import CtdsDataField from '../../components/CtdsDataField';

export default {
    components: {
        CtdsDataField
    },
    data () {
        return {
            inputModel: 'Input field',
            dateModel: this.$moment(),
            dateSettings: {
                format: 'MM/DD/YYYY hh:mm a',
                timeZone: 'America/New_York'
            }
        };
    }
};
</script>
