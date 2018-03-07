<template>
    <article name="DocumentationUtilitiesVeeValidate" class="documentation-article">
        <section>
            <h2>Vee-Validate</h2>
            <p>This is a plugin for Vue.js that allows you to validate input fields, and display errors.</p>
            <p>You only need to specify, for each input, what kind of validators should be used when the value changes. You will then get informed of the errors for each field.</p>
            <p>Although most of the validations occur automatically, you can use the validator however you see fit. The validator object has no dependencies and is a standalone object.</p>
            <p>For more information please visit the <a href="http://vee-validate.logaretm.com/index.html">Official site</a></p>

            <h3>Basic "required" Example</h3>
            <p>All you need is to add the v-validate directive to the input you wish to validate.
                Then, pass to the directive an object which contains a list of key/value validation rules.</p>
                <p>For the following example the validation rules are straight forward. Use required to indicate that the field is required,
                and email to indicate that the field must be an email. To combine both rules we assign the string value required|email to
                the v-validate expression value.
            </p>
            <ctds-tabs :tabs="BasicRequiredValidationTabs" :id="'BasicRequiredValidation'">
                <component v-for="tab in BasicRequiredValidationTabs" :key="tab.route" :is="tab.route" :slot="tab.route"></component>
            </ctds-tabs>

            <h3>Delayed Validation (Debounced)</h3>
            <p>You can specify a delay to debounce the input event, a case scenario that you may want to wait for the user to stop typing then validate the field.
            This can be achieved by adding a <code>data-vv-delay</code> attribute on the field being validated, and assign it the number of milliseconds you want to wait for.</p>
            <pre v-pre><code>
&lt;input type=&quot;email&quot;  v-validate=&quot;{required: true, email: true}&quot; data-vv-delay=&quot;1000&quot; class=&quot;form-control&quot; name=&quot;email&quot; &nbsp;placeholder=&quot;Email&quot;&gt;
            </code></pre>

            <h3>Min & Max Example</h3>
            <p>If min is specified, the field under validation length should not be less than the specified length.</p>
            <p>If max is specified, The field under validation length may not exceed the specified length.</p>
            <ctds-tabs :tabs="MinMaxTabs" :id="'BasicRequiredValidation'">
                <component v-for="tab in MinMaxTabs" :key="tab.route" :is="tab.route" :slot="tab.route"></component>
            </ctds-tabs>

            <h3>Regular Expression Example</h3>
            <p>The field under validation must match the specified regular expression.</p>
            <ctds-tabs :tabs="RegexTabs" :id="'BasicRequiredValidation'">
                <component v-for="tab in RegexTabs" :key="tab.route" :is="tab.route" :slot="tab.route"></component>
            </ctds-tabs>

        </section>

    </article>
</template>

<script>
import CtdsTabs from '../../../components/CtdsTabs';
import BasicRequiredDemo from './BasicRequiredDemo';
import BasicRequiredSource from './BasicRequiredSource';
import MinMaxDemo from './MinMaxDemo';
import MinMaxSource from './MinMaxSource';
import RegexDemo from './RegexDemo';
import RegexSource from './RegexSource';

export default {
    data (args) {
        return {
            BasicRequiredValidationTabs: [
                {
                    id: 'BasicRequiredDemo',
                    title: 'Demo',
                    route: 'BasicRequiredDemo',
                    defaultTab: true
                },
                {
                    id: 'BasicRequiredSource',
                    title: 'Source',
                    route: 'BasicRequiredSource',
                    defaultTab: false
                }
            ],
            MinMaxTabs: [
                {
                    id: 'MinMaxDemo',
                    title: 'Demo',
                    route: 'MinMaxDemo',
                    defaultTab: true
                },
                {
                    id: 'MinMaxSource',
                    title: 'Source',
                    route: 'MinMaxSource',
                    defaultTab: false
                }
            ],
            RegexTabs: [
                {
                    id: 'RegexDemo',
                    title: 'Demo',
                    route: 'RegexDemo',
                    defaultTab: true
                },
                {
                    id: 'RegexSource',
                    title: 'Source',
                    route: 'RegexSource',
                    defaultTab: false
                }
            ]
        };
    },
    components: {
        CtdsTabs,
        BasicRequiredDemo,
        BasicRequiredSource,
        MinMaxDemo,
        MinMaxSource,
        RegexDemo,
        RegexSource
    }
};
</script>
