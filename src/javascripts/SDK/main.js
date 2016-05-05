/**
 * Created by ypling on 5/4/16.
 */
import './index.html';
import * as admin from './admin';
import * as user from './user';
import * as wiki from './wiki';
import * as school from './schoolInfo';


window.sdk = {
    admin,
    user,
    wiki,
    school
};