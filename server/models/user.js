import bcrypt from 'bcrypt';
import {insertUser} from "../utils/dbUtils.js";

const user = {
    create: async (userData) => {
        console.log(`userData.email: ${userData.email}`);
        console.log(`userData.password: ${userData.password}`);
        console.log(`userData.username: ${userData.username}`);
        try {
            const hash = await bcrypt.hash(userData.password, 10);
            return await insertUser(
                userData.email,
                hash,
                userData.username
            );
        } catch (error) {
            throw error;
        }
    }
};

export default user;