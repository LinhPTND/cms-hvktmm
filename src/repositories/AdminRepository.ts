import {StatusLetter} from "@/models/Letter";
import {ListLetterResponse} from "@/models/User";
import {Repository} from "@/core/Repository/index";
import env from "@/core/env/index";


class AdminRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    getAllLetterApply(
        payload: { status?: StatusLetter; name?: string; msv?: string }
    ) {
        return this.request<ListLetterResponse>({
            url: `/admin/allLetter`,
            method: "get",
            params: payload,
        });
    }

}

export default new AdminRepository();
