import Mock from 'mockjs'

export const getUserInfo = (options) => {
    const Random = Mock.Random
    const template = {
        'str|2-4': 'haoxin',
        'str2|5': 'haoxin',
        'age|+2': 18,
        'age2|2-8': 0,
        'age3|3-9.2-5': 0,
        'bool|1': true,
        'bool2|1-9': true,
        'obj|2': {
            'aa': 1,
            'bb': 2,
            'cc': 3
        },
        'obj2|2-4': {
            'aa': 11,
            'bb': 22,
            'cc': 33,
            'dd': 44,
            'ee': 55
        },
        'arr|1': ['a', 'b', 'c'],
        'arr2|2': ['a', 'b', 'c'],
        'arr3|2-5': ['a', 'b', 'c'],
        'func': () => {
            return 'this is created by func'
        },
        'reg': /\d\w/,
        'email': Mock.mock('@email'),
        'email2': Random.email('haoxin.com'),
        'email3': '@email',
        'date': Random.date(),
        'time': Random.time()
    }
    let i = 1
    const arr = []
    while (i--) arr.push(template)
    return Mock.mock(arr)
}

export const authorization = () => {
    return {
        code: 200,
        data: {
            token: 'xxx',
            rules: {
                page: {
                    home: true,
                    folder_tree: true,
                    about: true,
                    argu: true,
                    countView: true,
                    menuPage: true,
                    upload: true,
                    form: false,
                    form2: false,
                    form3: true,
                    folder_tree: true,
                    renderPage: true,
                    splitPane: true,
                    parent: true,
                    child: true,
                    namedroute: true,
                    store: true,
                    main: true,
                    iconPage: true,
                    all: true
                },
                component: {
                    edit_button: true,
                    publish_button: false
                }
            }
        },
        mes: ''
    }
}