<template>
    <div v-if="!displayState.isHidden">
        <select
            v-if="!displayState.isReadOnly"
            v-model="modelValue"
            :disabled="displayState.isDisabled"
            :required="displayState.isRequired"
            :id="id"
            @change="updateInput"
            class="form-control">
            <option v-for="v in selectData" :key="v.key" :value="v.key">{{ v.value }}</option>
        </select>
        <p :id="id" v-else>{{ value }}</p>
    </div>
    <div v-else>
        <input type="hidden" :value="modelValue" />
    </div>
</template>
<script>
import ModelValueMixin from '../mixins/ModelValueMixin';
import CtdsDataFieldPropsMixin from '../mixins/CtdsDataFieldPropsMixin';

export default {
    name: 'CtdsDataFieldCollection',
    mixins: [ModelValueMixin, CtdsDataFieldPropsMixin],
    props: {
        options: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    computed: {
        selectData () {
            let modelData = [];
            if (this.options.length > 0 && typeof this.options[0].key === 'undefined') {
                modelData = this.options.map(value => ({ key: value, value: value }));
            } else {
                modelData = this.options;
            }
            return modelData;
        }
    }
};
</script>
