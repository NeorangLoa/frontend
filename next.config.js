/** @type {import('next').NextConfig} */
const nextConfig = { //app 경로는 아직 experimental 로 구분되기 때문에 next.config.js 파일에 아래와 같은 설정을 추가
    experimental:{
        appDir : true
    }
}

module.exports = nextConfig
