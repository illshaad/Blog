import jwt from 'jsonwebtoken';
import {devConfig} from '../../config/env/development'

// const config = getConfig(process.env.NODE_ENV)
export default {
  issue(payload, expiresIn) {
    return jwt.sign(payload, devConfig.secret, {
      expiresIn,
    })
  },
};
