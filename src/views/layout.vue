<template>
    <div class="h-100">
        <Layout class="h-100">
            <sider collapsible v-model="collapsed" hide-trigger>
                <sider-menu :list='list' :collapsed='collapsed'></sider-menu>
            </sider>
            <Layout>
                <Header class="header-wrapper">
                    <Icon type="md-menu" :size='32'  :class='triggerCLass' @click.native='handleTrigger'/>
                </Header>
                <Content class="content-wrapper">
                    <Card class="card-wrapper">
                        <p slot="title">icard</p>
                        <Row :gutter='16' class="blue">
                            <i-col :span='12'>111</i-col>
                            <i-col :span='12'>222</i-col>
                        </Row>
                        <router-view/>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import SiderMenu from '_c/sider-menu'
export default {
    name: 'layout',
    data() {
        return {
            collapsed: false,
            triggerCLass: ['triggerIcon'],
            list: [
                {
                    title: 'menu1',
                    icon: 'logo-angular'
                },
                {
                    title: 'menu2',
                    icon: 'logo-android',
                    children: [
                        {
                            title: 'menu2-1',
                            icon: 'md-analytics'
                        },
                        {
                            title: 'menu2-2',
                            icon: 'ios-apps-outline'
                        },
                        {
                            title: 'menu2-3',
                            icon: 'ios-battery-dead',
                            children: [
                                {
                                    title: 'menu2-3-1',
                                    icon: 'md-analytics'
                                },
                                {
                                    title: 'menu2-3-2',
                                    icon: 'ios-apps-outline'
                                },
                            ]
                        }
                    ]
                },
                {
                    title: 'menu3',
                    icon: 'ios-book-outline',
                    children: [
                        {
                            title: 'menu3-1',
                            icon: 'md-analytics'
                        },
                        {
                            title: 'menu3-2',
                            icon: 'ios-apps-outline'
                        },
                    ]
                }
            ]
        }
    },
    components: {
        SiderMenu
    },
    methods: {
        handleTrigger(){
            this.collapsed = !this.collapsed
            this.triggerCLass = ['triggerIcon',this.collapsed?'rotate':'']
        }
    }
}
</script>

<style lang="less">
.header-wrapper {
    background: #fff!important;
    box-shadow: 0 1px 1px 1px rgba(51,51,51,0.2);
    .triggerIcon {
        transition: transform .3s ease;
        &.rotate{
            transform: rotateZ(90deg);
        }
    }
}
.content-wrapper{
    padding: 10px;
    .card-wrapper{
        height: ~"calc(100vh - 84px)";
        .ivu-col {
            height: 50px;
            margin-top: 10px;
            line-height: 50px;
        }
        .blue{
            .ivu-col {
                background: #2db7f5;
                background-clip: content-box;
                color:#fff;
                text-align: center;
            }
        }
    }
}
</style>

