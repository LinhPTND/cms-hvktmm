import "@/models/Letter";
import "@/models/User";
import { Repository } from "@/core/Repository/index";
import env from "@/core/env/index";
class AdminRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    getAllLetterApply(payload) {
        return this.request({
            url: `/admin/allLetter`,
            method: "get",
            params: payload,
        });
    }
}
export default new AdminRepository();
