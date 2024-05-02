import bcrypt from 'bcrypt';
import {insertUser} from "../utils/dbUtils.js";

const user = {
    create: async (userData) => {
        console.log(`userData: ${userData.uid}`);
        console.log(`userData: ${userData.password}`);
        try {
            const hash = await bcrypt.hash(userData.password, 10);
            console.log(`hash: ${hash}`);

            const results = await insertUser(userData.uid, hash);
            return results;
        } catch (error) {
            throw error;
        }
    }
};

export default user;