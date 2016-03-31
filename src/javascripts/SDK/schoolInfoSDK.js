import request from 'superagent';
import config from './config';

const defaultSchoolInfo = {
    logo: {
        src: "http://s3-us-west-2.amazonaws.com/lmb-qa-org-wiki/ud/images/image_20160331022942483316.png",
        alt: ""
    },
    cover: {
        img: {
            src: "http://www.gregoryelectric.com/wp-content/uploads/2013/11/University-of-Dayton-Dayton-Ohio-2.jpg",
            alt: ""
        },
        text: "欢迎",
        linkText: "加入我们"
    },
    notice: {
        title: "重要通知",
        data: "内容1\n内容2"
    },
    featureGroup: {
        title: "Feature Group",
        text: "",
        link: {
            text: "联系我们",
            href: "/about/university/"
        },
        data: [{
            title: "新生指南",
            img: {
                src: "http://getbootstrap.com/assets/img/sass-less.png",
                alt: ""
            },
            text: "万事开头难，但我遇见了你"
        }, {
            title: "日常生活",
            img: {src: "http://getbootstrap.com/assets/img/devices.png", alt: ""},
            text: "我的生活，我做主。让无趣的生活沸腾吧"
        }, {
            title: "毕业指南",
            img: {src: "http://getbootstrap.com/assets/img/components.png", alt: ""},
            text: "毕业≠失业，但亲们，尽早准备，学长们只能帮你到这了"
        }]
    }

};


export default {
    getSchoolList() {
        var promise = new Promise((resolve, reject) => {
            request
                .get(config.s3Host + "school-list/index.json")
                .end((err, res)=> {
                    //console.log(res);
                    resolve(JSON.parse(res.text));
                })
        });
        return promise;
    },
    getSchoolInfo(schoolname) {
        var promise = new Promise((resolve, reject) => {
            request
                .get(config.s3Host + "school-list/" + schoolname + ".json")
                .end((err, res)=> {
                    //console.log(res);
                    resolve(JSON.parse(res.text));
                })
        });
        return promise;
    },
    updateSchoolInfo(schoolname, info){
        var promise = new Promise((resolve, reject) => {
            request
                .post(config.APIHost + 'api/portal/wiki/upload/')
                .type('form')
                .send({
                    old_path: "school-list/" + schoolname + ".json",
                    new_path: "school-list/" + schoolname + ".json",
                    page: JSON.stringify(info)
                })
                .end((err, res)=> {
                    //console.log(err,res);
                    resolve(info)
                });
        });
        return promise;
    },
    updateSchoolList(newSchoolList){
        var promise = new Promise((resolve, reject) => {
            request
                .post(config.APIHost + 'api/portal/wiki/upload/')
                .type('form')
                .send({
                    old_path: "school-list/index.json",
                    new_path: "school-list/index.json",
                    page: JSON.stringify(newSchoolList)
                })
                .end((err, res)=> {
                    //console.log(err,res);
                    resolve(newSchoolList)
                });
        });
        return promise;
    },
    addSchoolInfo(schoolname){
        var promise = new Promise((resolve, reject) => {
            request
                .post(config.APIHost + 'api/portal/wiki/upload/')
                .type('form')
                .send({
                    old_path: undefined,
                    new_path: "school-list/" + schoolname + ".json",
                    page: JSON.stringify(defaultSchoolInfo)
                })
                .end((err, res)=> {
                    //console.log(err,res);
                    resolve(defaultSchoolInfo)
                });
        });
        return promise;
    },
    deleteSchoolInfo(schoolname){
        var promise = new Promise((resolve, reject) => {
            request
                .post(config.APIHost + 'api/portal/keys/delete/')
                .type('form')
                .send({
                    key_name: "school-list/" + schoolname + ".json"
                })
                .end((err, res)=> {
                    resolve();
                });
        });
        return promise;
    },
    getHomepageSettings(){
        var promise = new Promise((resolve, reject) => {
            setTimeout(resolve(defaultSchoolInfo), 1000);
        });
        return promise;
    }
}