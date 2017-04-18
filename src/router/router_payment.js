export default {
    meta:{
        title:'收营台'
    },
    path: '/payment',
    name: 'payment',
    component: resolve => require(['components/payment'], resolve),
    children: []
}