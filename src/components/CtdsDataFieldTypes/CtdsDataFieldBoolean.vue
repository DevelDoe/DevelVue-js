<template>
    <input
        v-if="!displayState.isReadOnly"
        v-model="modelValue"
        :type="inputType"
        :id="id"
        :disabled="displayState.isDisabled"
        :required="displayState.isRequired"
        @change="updateInput" />
    <span :id="id" v-else>{{ formattedValue }}</span>
</template>
<script>
import CtdsDataFieldPropsMixin from '../mixins/CtdsDataFieldPropsMixin';
import ModelValueMixin from '../mixins/ModelValueMixin';

export default {
    name: 'CtdsDataFieldBoolean',
    mixins: [ModelValueMixin, CtdsDataFieldPropsMixin],
    props: {
        labelTrue: null,
        labelFalse: null
    },
    computed: {
        inputType () {
            return this.displayState.isHidden ? 'hidden' : 'checkbox';
        },
        formattedValue () {
            if (typeof this.value === 'undefined' || this.value === null) {
                return '';
            }
            return this.modelValue ? this.labelTrue : this.labelFalse;
        }
    }
};
</script>
