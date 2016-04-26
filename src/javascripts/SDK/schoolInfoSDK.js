import request from 'superagent';
import config from './config';

var defaultSchoolInfo = "U2FsdGVkX1/Uv2IbVGoj6VhvumH0YqpO0MM14wb2JJ348MzwFMBFZ+rmsQM/D6Mn1HaabjASDQAcWrc66F8Pw8v5pPYV+LRZDD4CTzu3s3an5oV+cJ0UPOF2+yBggb2CQqVNhoQYvYtO9zsXqMr/0rVV36I6Mj9a4zQWUjqT0gMsYVKlDXGPgzUw25xvhQ3LioG21V/oIdfprm0P5woNbY9TKy6Tln870jvOqn6VRLLFskOTzF5QClQ9lYd1+ChM3j95OSJY/Qp+MDVbwb9euSL7D9CvGLMuQVHzrLQuCtkTtibBKuZBStAI6dwsI65DMG6L68G7z+AQwBiGF+YFv7CP9FJvO7nDTd/Ts/DjoFEv2MjCVTiuWcDZ+IBNl8VPB8ppuMm/1XrdUVdez1Yb1Ri7KRd2So+DAmIMtit7na400O2YDOiZB8NumzDNVNf+6LumtZmEulptVRom3BZ5VhjyXKcddsK85IP+mgdJT3dpiFR9bAGj3CEVb4O2v0L9rzew8xD4iCwHUiYWuo7cyThkmoRAolA0PtuFsMV5O2XHK/LeGbQGh/4ZL00Rx/lA7iUb1X+usLAVsF46xKXBcCoWKmnoVwlWsPrmLkXqPUngRKf3L7QQ1lBWAz32lofgCCPJMowoRUV/faH3UhOCfhxXOPt+ajB18WDo7WOtRNIaflpbQRDMmQC5L9yEG5sefGwTd8x2MYCrqIX8bliA7v9erR5DPq0j/4f2hg+gnHKOAaNWRR/FF0Tbe2fZ9XN4q25vW55bQc/eg9vXthXb9+Lx4iQZNwr4RTsj2jjtXZru5pXoz6UsedLFSN9UNzzb9gayYc3xziqDcrqFD+M1nDV95FE2Z++wTR9H/D4Sfm+akEn09QNmOAH+S4pjRIfYpOye+SGURosl7ZnyzDCbxl0d0sAJxTXWHn+hwbNABfyzrZ/kjidZWNZ+/F7iqhQoFOBpaECZfeU6aBtRvadEKyBy7DccYgU6cEt/PThfB2hJNaVJkvHObEvrzqlB7K8pmf9EcJkd2ihL+zqZp6izPSjydozm6nDQ+HVVDQOqgrUZi/acMIqVvDbFrEqlpsVEIBhGKw7cROv7zqohg0NoSLZ/DhMYz6pAuJARucst2rLsDqWCAmwihg5cP+r0HhZ3Tei8XgRq2tl3Wmok8e11fJ7OowNpZpiD9pOoQF43hR/l4nFTgruG+j7sieKo4asZdpZIkG9Eoe29b6mA2Uu5jZWT7Qvb0CGRBrAIgHRIkKbmnTFAlSjEmOGfBCDAHd3cFEsd56k5Vm9acv0HBsL0JomB";


export default {
    getSchoolList() {
        var promise = new Promise((resolve, reject) => {
            request
                .get("http://52.38.143.243:8001/api/universities/")
                .end((err, res)=> {
                    //console.log(res);
                    resolve(res.body);
                })
        });
        return promise;
    },
    getSchoolInfo(pk) {
        var promise = new Promise((resolve, reject) => {
            request
                .get("http://52.38.143.243:8001/api/universities/"+pk+"/")
                .end((err, res)=> {
                    //console.log(res);
                    resolve(res.body);
                })
        });
        return promise;
    },
    updateSchoolInfo(pk, info){
        var promise = new Promise((resolve, reject) => {
            request
                .post("http://52.38.143.243:8001/api/universities/update/"+pk+"/")
                .type('form')
                .send(info)
                .end((err, res)=> {
                    //console.log(err,res);
                    resolve(info)
                });
        });
        return promise;
    },

    addSchoolInfo(info){
        var promise = new Promise((resolve, reject) => {
            request
                .post('http://52.38.143.243:8001/api/universities/create/')
                .type('form')
                .send(info)
                .end((err, res)=> {
                    //console.log(err,res);
                    resolve(info)
                });
        });
        return promise;
    },
    //deleteSchoolInfo(schoolname){
    //    var promise = new Promise((resolve, reject) => {
    //        request
    //            .post(config.APIHost + 'api/portal/keys/delete/')
    //            .type('form')
    //            .send({
    //                key_name: "school-list/" + schoolname + ".json"
    //            })
    //            .end((err, res)=> {
    //                resolve();
    //            });
    //    });
    //    return promise;
    //},
    getHomepageSettings(){
        var promise = new Promise((resolve, reject) => {
            setTimeout(resolve(defaultSchoolInfo), 600);
        });
        return promise;
    },
    saveHomepageSettings(pageContent){
        var promise = new Promise((resolve, reject) => {
            defaultSchoolInfo=pageContent;
            setTimeout(resolve(pageContent), 600);
        });
        return promise;
    }
}