/* eslint-disable no-param-reassign */
const messageDict = {
  USER_SIGNUP_ERROR: () => {
    return {
      status: 'error',
      header: '注册失败',
      details: '这可能是由于网络问题造成的',
    };
  },
  USER_SIGNUP_END: (payload) => {
    if (payload.code === 0) {
      return {
        status: 'success',
        header: '注册成功',
        details: '还等什么，可以开始尽情玩耍了',
      };
    }
    if (payload.code === 400) {
      return {
        status: 'error',
        header: '注册失败',
        details: '可能是由于该用户名已经被注册过了',
      };
    }
    return {
      status: 'error',
      header: '注册失败',
      details: '用户名/密码不符合要求',
    };
  },
  USER_SIGNIN_ERROR: () => {
    return {
      status: 'error',
      header: '登入失败',
      details: '这可能是由于网络问题造成的',
    };
  },
  USER_SIGNIN_END: (payload) => {
    if (payload.code === 0) {
      return {
        status: 'success',
        header: '登入成功',
        details: '还等什么，可以开始尽情玩耍了',
      };
    }
    if (payload.code === 400) {
      return {
        status: 'error',
        header: '登入失败',
        details: '用户不存在或用户名/密码错误',
      };
    }
    return {
      status: 'error',
      header: '登入失败',
      details: '用户名/密码不符合要求',
    };
  },
  USER_SIGNOUT_ERROR: () => {
    return {
      status: 'error',
      header: '登出失败',
      details: '这可能是由于网络问题造成的',
    };
  },
  USER_SIGNOUT_END: (payload) => {
    if (payload.code !== 0) {
      return {
        status: 'error',
        header: '登出失败',
        details: '这可能是由于服务器的错误造成的',
      };
    }
  },
  USER_UPDATE_PASSWORD_ERROR: () => {
    return {
      status: 'error',
      header: '更新密码失败',
      details: '这可能是由于网络问题造成的',
    };
  },
  USER_UPDATE_PASSWORD_END: (payload) => {
    if (payload.code === 0) {
      return {
        status: 'success',
        header: '更新密码成功',
        details: '请使用新密码重新登入',
      };
    }
    if (payload.code === 400) {
      return {
        status: 'error',
        header: '更新密码失败',
        details: '请确保你的原始密码正确',
      };
    }
    return {
      status: 'error',
      header: '更新密码失败',
      details: '新密码不符合要求',
    };
  },
  USER_BIND_AUTHENTICATE_ERROR: () => {
    return {
      status: 'error',
      header: '绑定失败',
      details: '这可能是由于网络问题造成的',
    };
  },
  USER_BIND_AUTHENTICATE_END: (payload) => {
    if (payload.success) {
      return {
        status: 'success',
        header: '绑定成功',
        details: '还等什么，可以开始尽情玩耍了',
      };
    }
    return {
      status: 'error',
      header: '绑定失败',
      details: [
        '请确保你已注册，并重新核对你的用户名和密码',
        '请确保没有重复绑定',
      ],
    };
  },
  USER_SIGNOUT: () => {
    return {
      status: 'success',
      header: '成功登出',
    };
  },
  USER_USERNAME_CHECK_ERROR: () => {
    return {
      status: 'error',
      inline: '用户名检查失败',
      details: '这可能是网络原因造成的，你可以尝试继续注册',
    };
  },
  USER_USERNAME_CHECK_END: (payload) => {
    if (payload.valid) {
      return {
        status: 'success',
        inline: '你不能使用该用户名',
      };
    }
    return {
      status: 'error',
      inline: '你不能使用该用户名',
      details: '这可能是由于已经有人使用该用户名注册了',
    };
  },
  USER_GET_OAUTH_INFO_END: () => {
    return {
      status: 'success',
      inline: '获取第三方登录信息完成',
    };
  },
  USER_GET_OAUTH_INFO_ERROR: () => {
    return {
      status: 'error',
      inline: '获取第三方登录信息失败',
      details: '这可能是网络原因造成的',
    };
  },
};

// this is a function to generate the action parameter
export default ({ type, payload }) => {
  const handler = messageDict[type];
  if (handler) {
    return {
      type,
      payload: {
        ...payload,
        ui_message: handler(payload) || {},
      },
    };
  }
  console.log(`no message handler found for type: ${type}`); // eslint-disable-line no-console
  return { type, payload };
};

