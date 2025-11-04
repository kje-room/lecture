const oracle = require('oracledb');
oracle.initOracleClient({
    libDir: 'D:\\tools\\instantclient basic\\instantclient_23_9'
})

getEmp()

async function getEmp() {

    let conn = null;

    try {
        // DB 접속
        conn = await oracle.getConnection({
            connectString: '125.181.132.133:51521/xe',
            user: 'scott4_1',
            password: 'tiger'
        })

        // SQL문
        const query = 'select * from emp'

        // SQL 실행 및 결과 확보
        const result = await conn.execute(query, [], {
            outFormat: oracle.OUT_FORMAT_OBJECT
        })

        // 결과 활용
        console.log('result', result)
    }
    catch(err) {
        console.log('>>> !!ERROR!! >>>', err)
    }
    finally {
        if(conn) {
            try{
                await conn.close()
            }
            catch(err){
                console.log('>>> !!FINALLY ERROR!! >>>', err)
            }
        }
    }
}

// getDeptno(20);

async function getDeptno(deptno) {

    let conn = null
    let result = {}

    try {
        // DB 접속
        conn = await oracle.getConnection({
            connectString: '125.181.132.133:51521/xe',
            user: 'scott4_1',
            password: 'tiger'
        })

        // SQL문
        const query = 'select * from emp where deptno = :deptno'    // :뒤의 것이 변수명. 임의 작성 가능.

        // SQL 실행 및 결과 확보
        result = await conn.execute(query, [deptno], {
            outFormat: oracle.OUT_FORMAT_OBJECT
        })

        // 결과 활용
        console.log('length', result.rows.length)
        console.log('first', result.rows[0].ENAME)
    }
    catch(err) {
        console.log('>>> !!ERROR!! >>>', err)
    }
    finally {
        if(conn) {
            try{
                await conn.close()
            }
            catch(err){
                console.log('>>> !!FINALLY ERROR!! >>>', err)
            }
        }
    }

    return result;
}

module.exports = {
    getDeptno: getDeptno
}