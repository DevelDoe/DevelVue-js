<template>
    <div name="ctdsDataField" class="form-group">
        <ctds-data-field-boolean
            v-if="isBooleanType"
            v-model="modelValue"
            :displayState="displayState"
            :id="id"
            :labelTrue="labelTrue"
            :labelFalse="labelFalse"
            @input="updateInput"></ctds-data-field-boolean>
        <label :for="id" v-if="useLabel && !isHidden">{{ label }}</label>
        <ctds-data-field-default
            v-if="isInputType"
            v-model="modelValue"
            :type="type"
            :displayState="displayState"
            :id="id"
            @input="updateInput"></ctds-data-field-default>
        <ctds-data-field-collection
            v-if="isCollectionType"
            v-model="modelValue"
            :options="options"
            :displayState="displayState"
            :id="id"
            @input="updateInput"></ctds-data-field-collection>
        <ctds-data-field-textarea
            v-if="isTextareaType"
            v-model="modelValue"
            :displayState="displayState"
            :id="id"
            @input="updateInput"></ctds-data-field-textarea>
        <ctds-data-field-date-time
            v-if="isDateTimeType"
            v-model="modelValue"
            :type="type"
            :displayState="displayState"
            :id="id"
            :settings="dateSettings"
            @input="updateInput"></ctds-data-field-date-time>
    </div>
</template>
<script>
import DATA_FIELD_TYPE from './enums/CtdsDataFieldType';
import ModelValueMixin from './mixins/ModelValueMixin';
import CtdsDataFieldDefault from './CtdsDataFieldTypes/CtdsDataFieldDefault';
import CtdsDataFieldCollection from './CtdsDataFieldTypes/CtdsDataFieldCollection';
import CtdsDataFieldTextarea from './CtdsDataFieldTypes/CtdsDataFieldTextarea';
import CtdsDataFieldBoolean from './CtdsDataFieldTypes/CtdsDataFieldBoolean';
import CtdsDataFieldDateTime from './CtdsDataFieldTypes/CtdsDataFieldDateTime';

export default {
    name: 'CtdsDataField',
    components: {
        CtdsDataFieldDefault,
        CtdsDataFieldCollection,
        CtdsDataFieldTextarea,
        CtdsDataFieldBoolean,
        CtdsDataFieldDateTime
    },
    mixins: [ModelValueMixin],
    props: {
        id: null,
        type: {
            required: true,
            type: String,
            default: DATA_FIELD_TYPE.STRING
        },
        label: null,
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        isHidden: false,
        options: {
            type: Array,
            default () {
                return [];
            }
        },
        labelTrue: {
            type: String,
            default: 'Yes'
        },
        labelFalse: {
            type: String,
            default: 'No'
        },
        dateSettings: null
    },
    computed: {
        displayState () {
            return {
                isDisabled: this.isDisabled,
                isReadOnly: this.isReadOnly,
                isRequired: this.isRequired,
                isHidden: this.isHidden
            };
        },

        isInputType () {
            return [DATA_FIELD_TYPE.STRING, DATA_FIELD_TYPE.NUMBER].indexOf(this.type) !== -1;
        },

        isCollectionType () {
            return this.type === DATA_FIELD_TYPE.COLLECTION;
        },

        isTextareaType () {
            return this.type === DATA_FIELD_TYPE.TEXTAREA;
        },

        isBooleanType () {
            return this.type === DATA_FIELD_TYPE.BOOLEAN;
        },

        isDateTimeType () {
            return [DATA_FIELD_TYPE.DATE, DATA_FIELD_TYPE.DATETIME].indexOf(this.type) !== -1;
        },

        useLabel () {
            return typeof this.label !== 'undefined' && this.label !== null;
        }
    }
};
</script>
