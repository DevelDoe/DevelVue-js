<template>
    <div name="ctdsDataFieldTextarea" v-if="!displayState.isHidden">
        <textarea
            v-if="!displayState.isReadOnly"
            v-model="modelValue"
            class="form-control ctds-input"
            :id="id"
            :disabled="displayState.isDisabled"
            :required="displayState.isRequired"
            @input="updateInput"></textarea>
        <p :id="id" v-else>{{ value }}</p>
    </div>
    <div v-else>
        <input type="hidden" :value="modelValue" />
    </div>
</template>
<script>
import CtdsDataFieldPropsMixin from '../mixins/CtdsDataFieldPropsMixin';
import ModelValueMixin from '../mixins/ModelValueMixin';

export default {
    name: 'CtdsDataFieldTextarea',
    mixins: [ModelValueMixin, CtdsDataFieldPropsMixin]
};
</script>
