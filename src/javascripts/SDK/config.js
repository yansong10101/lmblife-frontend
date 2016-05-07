
const prod = {
  host:"www.lmeib.com",
  s3Host:'http://s3-us-west-2.amazonaws.com/lmb-qa-org-wiki/',
};

const dev = {
  host:"www.lvh.me:8080",
  s3Host:'http://s3-us-west-2.amazonaws.com/lmb-qa-org-wiki/',
};

let config;
if(process.env.NODE_ENV ==='production'){
  config = prod;
}else{
  config = dev;
}

export default config;
