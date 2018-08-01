import  adminService from './admin.service';
import Admin from './adminModel'
import jwt from '../../helpers/jwt'
import { STANDARD_ROLE } from './adminModel'

export default {
    async signup(req,res){
        try{
            const { value, error } = adminService.validateSignup(req.body);
            if(error){
                return res.status(400).json(error)
            }
            const encryptedPass = adminService.encryptedPass(value.password)
            
            const admin = await Admin.create({
                firstName:value.firstName,
                lastName:value.lastName,
                email:value.email,
                password:encryptedPass,
                role: value.role || STANDARD_ROLE,
            });
                return res.json({success : true});
            }catch(err){
            console.error(err);
            return res.status(500).send(err);
        }
        return res.json(value);
        },
        async login(req,res){
            try{
                const { value , error } = adminService.validateLogin(req.body);
                if(error){
                    return res.status(400).json(error)
                }
                const admin = await Admin.findOne({email:value.email});
                if(!admin){
                    return res.status(401).json({err :"not autorised"})
                };
                const authenticated = adminService.comparePassword(
                    value.password,
                    admin.password
                 );
                if(!authenticated){
                    return res.status(401).json({err : "not autorised"});
                }

                const token = jwt.issue({id: admin._id},'1d')
                return res.json({token})
                
                }catch(err){
                    console.error(err)
                    return res.status(500).send(err)
                }
            },

            authenticated(req,res){
                return res.json(req.admin)
            },
        };
    
