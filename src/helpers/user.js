import Cookies from 'js-cookie';

const getUserInfo = () => {
    let userInfo = Cookies.get("userInfo");
    userInfo = JSON.parse(decodeURIComponent(userInfo));
    return userInfo;
}

export const getUserId = () => {
    return getUserInfo().userId;
}

export const getUsername = () => {
    return getUserInfo().username;
}

export const getProfileName = () => {
    return getUserInfo().name;
}

export const getEmailId = () => {
    return getUserInfo().emailId;
}

export const getRoleId = () => {
    return getUserInfo().roleId;
}

// function a(){ 

// }

// module.exports = {
//     getUserId,
//     getUsername,
//     getProfileName,
//     getEmailId,
//     getRoleId
// };