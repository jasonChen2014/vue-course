<template>
    <div>
        <span ref="number" :id = 'eleId'></span>
        <slot></slot>
    </div>
</template>

<script>
import CountUp from 'countup'
export default {
    name: 'countTo',
    data(){
        return {
            countUpIns: {}
        }
    },
    props: {
        startVal: {
            type: Number,
            default: 0
        },
        endVal: {
            type: Number,
            required: true
        },
        decimalNum: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default: 2
        },
        easing: {
            type: Boolean,
            default: true
        },
        group: {
            type: Boolean,
            default: true
        },
        separator: {
            type: String,
            default: ','
        },
        decimal: {
            type: String,
            default: '.'
        },
        delay: {
            type: Number,
            default: 0
        }
    },
    components: {
        CountUp
    },
    computed: {
        eleId(){
            return `count_up_${this._uid}`
        }
    },
    mounted(){
        this.$nextTick(() => {
            this.countUpIns = new CountUp(this.eleId,this.startVal,this.endVal,this.decimalNum,this.duration,{
                useEasing: this.easing, 
                useGrouping: this.group, 
                separator: this.separator, 
                decimal: this.decimal, 
            })
        })
        setTimeout(() => {
            this.countUpIns.start()
            setTimeout(() => {
                this.animationEnd()
            },this.duration*1000+5)
        },this.delay)
    },
    watch: {
        endVal(newVal,oldVal) {
            this.countUpIns.update(newVal)
            setTimeout(() => {
                this.animationEnd()
            },this.duration*1000+5)
        }
    },
    methods: {
        getNumber() {
            return this.$refs.number.innerText
        },
        animationEnd(){
            this.$emit('on-amimation-end',this.$refs.number.innerText)
        }
    }
}
</script>

<style>

</style>
