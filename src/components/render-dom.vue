<script>
export default {
    name: 'render-dom',
    functional: true,
    props: {
        number:{
            type: Number
        },
        renderFunc:{
            type: Function
        }
    },
    render:(h,ctx)=>{
        return ctx.props.renderFunc(h,ctx.props.number)//注意不能直接通过this调用
    }
}
</script>
