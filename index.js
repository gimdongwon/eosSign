import ecc from 'eosjs-ecc'
const ecc = require('eosjs-ecc')
const ecc = eosjs_ecc;
const hello = "hello"
ecc.randomKey().then(privateKey => {
    // randomKey 함수를 통해 privateKey 와 Public Key를 생성.
    console.log('Private Key:\t', privateKey) // wif
    console.log('Public Key:\t', ecc.privateToPublic(privateKey)) // EOSkey...
    
    // hello 문자열을 privateKey로 서명.
    const codingEcc = ecc.sign(hello, privateKey);
    console.log(codingEcc)
    console.log("privateKey로 암호화된 hello \t" + codingEcc)

    // 암호화 된 값과 서명이 올바른지 검증하는 verify 함수.
    // codingEcc를 public 키로 복호화했을 때 hello랑 같은지 확인하는 함수
    // isValidPublic도 이름이 헷갈리긴 했지만 Public이 유효한지 확인하는 함수였습니다.
    console.log(ecc.verify(codingEcc, 'hello', ecc.privateToPublic(privateKey))===true)
    console.log(ecc.verify(codingEcc, 'notHello', ecc.privateToPublic(privateKey))===true)
    })
