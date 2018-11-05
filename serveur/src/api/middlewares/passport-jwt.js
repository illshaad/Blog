import Passport from 'passport';
import PassportJWT from 'passport-jwt';
import Admin from '../ressources/admin/adminModel';
import { getConfig } from '../../config/config';

const config = getConfig(process.env.NODE_ENV)

export const configJWTStrategy = () => {
  const opts = {
    jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret,
  };
  Passport.use(
    new PassportJWT.Strategy(opts, (payload, done) => {
      Admin.findOne({_id: payload.id}, (err, admin) => {
        if (err) {
          return done(err);
        }
        if (admin) {
          return done(null, admin);
        }
        return done(null, false);
      });
    })
  );
};
