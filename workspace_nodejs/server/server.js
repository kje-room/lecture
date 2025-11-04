const express = require('express');
const app = express();
const appRoot = require('app-root-path').path;
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./oracle.js')

const port = 3000;
app.listen(port, () => {
    console.log('server start :: port = ', port);
})

// 패러미터로 받은 json 해석 가능
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('views', appRoot + '/ui/views');
app.set('view engine', 'ejs');

app.use(express.static(appRoot + '/ui/public'));
app.use(session({
    secret: 'secretTest',
    resave: false,                  // 세션 내용이 바뀌지 않으면 저장 X
    saveUninitialized: true,        // 로그인 안 된 사용자의 세션은 저장 X
    rolling: true,                  // 활동이 있을 경우 갱신
    cookie: {maxAge: 30*60*1000}    // 30분 후 로그인 해제
}));

app.use(aop);


app.get('/hello', (req, resp) => {
    console.log('hello express');
})

app.get('/echo', (req, resp) => {
    // get 방식을 때의 패러미터
    const id = req.query.id;
    console.log('id', id);
    resp.send();
})

app.get('/json', (req, resp) => {
    const j = {
        a: 1,
        b: "eng",
        c: "한글"
    }
    resp.send(j);
})

app.get('/ejs', (req, resp) => {
    resp.render('hello', {title: 'TITLE'});
})

app.get('/login', (req, resp) => {
    const pw = req.query.pw;
    if(pw=='1234') {
        req.session.user = {
            login: true
        }
        resp.send('success')
    }
    else {
        resp.send('fail')
    }
})

app.get('/main', (req, resp) => {
    if(req.session.user && req.session.user.login) {
        resp.send('only for member')
    }
    else {
        resp.send('cannot access')
    }
})

app.get('/delay', async (req, resp) => {
    await delay(2000);
    resp.send('2s')
})

app.get('/deptno', async (req, resp) => {
    const deptno = await req.query.deptno
    resp.send(db.getDeptno(deptno))
})

app.post('/ajax', (req, resp) => {
    console.log(req.body.name, req.body.addr);

    resp.send(req.body);
})

function aop(req, resp, next) {
    const before = new Date().getTime();
    next();
    resp.on('finish', () => {
        const after = new Date().getTime();
        console.log(after - before);        
    })

}

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}