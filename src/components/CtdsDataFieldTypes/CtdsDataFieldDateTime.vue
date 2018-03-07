<template>
    <div class="ctds-data-field-date input-group" v-if="!displayState.isHidden">
        <template v-if="!displayState.isReadOnly">
            <date-picker
                v-model="modelValue"
                :config="config"
                :wrap="true"
                :required="displayState.isRequired"
                :id="id"
                @input="updateValue"></date-picker>
            <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
            </span>
        </template>
        <p :id="id" v-else>{{ formattedValue }}</p>
    </div>
    <input v-else type="hidden" :value="formattedValue" />
</template>
<script>
import DATA_FIELD_TYPE from '../enums/CtdsDataFieldType';
import CtdsDataFieldPropsMixin from '../mixins/CtdsDataFieldPropsMixin';
import ModelValueMixin from '../mixins/ModelValueMixin';
import DatePicker from 'vue-bootstrap-datetimepicker';

const DEFAULT_FORMAT = Object.freeze({
    DATETIME: 'YYYY-MM-DD HH:mm',
    DATE: 'YYYY-MM-DD'
});

const DEFAULT_TIMEZONE = Object.freeze({
    LOCAL: 'local',
    UTC: 'UTC'
});

export default {
    name: 'CtdsDataFieldDateTime',
    components: {
        DatePicker
    },
    mixins: [ModelValueMixin, CtdsDataFieldPropsMixin],
    props: {
        type: null,
        settings: {
            type: Object,
            default () {
                return {
                    timeZone: null,
                    format: null,
                    minDate: null,
                    maxDate: null
                };
            }
        }
    },
    data () {
        return {
            config: {
                format: this.type === DATA_FIELD_TYPE.DATETIME ? DEFAULT_FORMAT.DATETIME : DEFAULT_FORMAT.DATE,
                minDate: false,
                maxDate: false
            },
            originalTimeZone: DEFAULT_TIMEZONE.LOCAL,
            formattedValue: null
        };
    },
    watch: {
        value (newValue) {
            this.modelValue = newValue;
            this.formatValue();
        }
    },
    mounted () {
        this.setConfig();
    },
    methods: {
        formatValue () {
            const date = this.contructMoment();
            this.formattedValue = this.setTimezone(date).format(this.settings.format);
        },

        contructMoment () {
            let date;
            if (this.originalTimeZone === DEFAULT_TIMEZONE.UTC) {
                date = this.$moment.utc(this.modelValue);
            } else if (this.originalTimeZone === DEFAULT_TIMEZONE.LOCAL) {
                date = this.$moment(this.modelValue);
            } else {
                date = this.$moment.tz(this.modelValue, this.originalTimeZone);
            }
            return date;
        },

        setTimezone (date) {
            return this.settings.timeZone && this.originalTimeZone !== DEFAULT_TIMEZONE.UTC
                ? date.tz(this.settings.timeZone)
                : date;
        },

        updateValue () {
            this.formatValue();
            this.$emit('input', this.constructFromConfig(this.modelValue));
        },

        setConfig () {
            if (!this.value._isAMomentObject) {
                throw new Error('Only moment is supported as model');
            }

            let timeZone = this.modelValue.tz();
            if (timeZone) {
                this.originalTimeZone = timeZone;
            } else if (this.modelValue.isUTC()) {
                this.originalTimeZone = DEFAULT_TIMEZONE.UTC;
            }

            if (!this.settings.format) {
                this.settings.format = this.type === DATA_FIELD_TYPE.DATETIME ? DEFAULT_FORMAT.DATETIME : DEFAULT_FORMAT.DATE;
            }

            if (this.settings.minDate) {
                this.config.minDate = this.settings.minDate;
            }

            if (this.settings.maxDate) {
                this.config.maxDate = this.settings.maxDate;
            }

            this.formatValue();
        },

        constructFromConfig (value) {
            return this.contructMoment(value);
        }
    }
};
</script>
